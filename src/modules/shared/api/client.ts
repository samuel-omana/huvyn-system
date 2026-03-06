import { z } from 'zod';

export class ApiError extends Error {
    constructor(public status: number, message: string, public data?: unknown) {
        super(message);
        this.name = 'ApiError';
    }
}

/**
 * Huvyn Base API Client
 * Designed for strict bit-level precision in data handling.
 */
export async function apiClient<T>(
    endpoint: string,
    schema?: z.ZodSchema<T>,
    options: RequestInit = {}
): Promise<T> {
    const response = await fetch(endpoint, {
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options.headers,
        },
    });

    if (!response.ok) {
        let errorData;
        try {
            errorData = await response.json();
        } catch {
            errorData = null;
        }
        throw new ApiError(response.status, `API Failure: ${endpoint}`, errorData);
    }

    const data = await response.json();

    if (schema) {
        const result = schema.safeParse(data);
        if (!result.success) {
            console.error('Data Integrity Violation:', result.error);
            throw new Error(`Invalid data format from ${endpoint}`);
        }
        return result.data;
    }

    return data as T;
}
