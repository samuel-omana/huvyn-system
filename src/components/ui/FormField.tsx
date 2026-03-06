'use client';

import React from 'react';
import { useFormContext } from 'react-hook-form';

interface FormFieldProps {
    name: string;
    label: string;
    type?: string;
    placeholder?: string;
    description?: string;
}

/**
 * Standardized Huvyn Form Field
 * Built for extreme reliability in Backoffice & Inventory systems.
 */
export const FormField: React.FC<FormFieldProps> = ({
    name,
    label,
    type = 'text',
    placeholder,
    description
}) => {
    const {
        register,
        formState: { errors }
    } = useFormContext();

    const error = errors[name];
    const errorId = `${name}-error`;
    const descriptionId = `${name}-description`;

    return (
        <div className="flex flex-col gap-2 w-full">
            <label
                htmlFor={name}
                className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500"
            >
                {label}
            </label>

            <input
                {...register(name)}
                id={name}
                type={type}
                placeholder={placeholder}
                aria-invalid={error ? 'true' : 'false'}
                aria-describedby={`${error ? errorId : ''} ${description ? descriptionId : ''}`}
                className={`
                    bg-zinc-50 border rounded-xl px-4 py-3 text-sm font-medium outline-none transition-all
                    ${error ? 'border-red-500 focus:ring-1 focus:ring-red-200' : 'border-black/[0.03] focus:ring-1 focus:ring-zinc-200'}
                `}
            />

            {description && (
                <p id={descriptionId} className="text-[10px] text-zinc-400 font-medium">
                    {description}
                </p>
            )}

            {error && (
                <p id={errorId} className="text-[10px] text-red-500 font-black uppercase tracking-wider animate-in fade-in slide-in-from-top-1">
                    {error.message as string}
                </p>
            )}
        </div>
    );
};
