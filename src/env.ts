import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
    server: {
        // Add future backend secrets here (e.g. DATABASE_URL, JWT_SECRET, etc.)
        // DATABASE_URL: z.string().url(),
        NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
    },
    client: {
        // Add future public variables here (e.g. NEXT_PUBLIC_API_URL)
        // NEXT_PUBLIC_API_URL: z.string().url(),
    },
    experimental__runtimeEnv: {
        NODE_ENV: process.env.NODE_ENV,
        // NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    },
});
