import { z } from 'zod';
import { MESSAGE_ENCRYPTION_ALGORITHMS } from '../utils/enums/enviromentEnums.js';
import dotenv from 'dotenv';
dotenv.config();



const envSchema = z.object({
    // App settings
    PORT: z.string().default('5000'),
    NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
    BASE_URL: z.string().optional(),

    // Database
    MONGO_URI: z.string().url(),
    DB_NAME: z.string().default('app_db'),

    // Tokens
    ACCESS_TOKEN_SECRET: z.string(),
    ACCESS_TOKEN_EXPIRES_IN: z.string().default('1d'),
    REFRESH_TOKEN_EXPIRES_IN: z.string().default('7d'),

    // Cookies
    COOKIE_SECRET: z.string(),
    COOKIE_EXPIRES_IN: z.string().default('1d'),

    // SMTP
    SMTP_HOST: z.string().optional(),
    SMTP_PORT: z.string().default('587'),
    SMTP_USER: z.string().optional(),
    SMTP_PASS: z.string().optional(),
    EMAIL_FROM: z.string().default('noreply@example.com'),

    // CORS
    CORS_ORIGIN: z.string().default('http://localhost:3000'),

    // Rate limiting
    RATE_LIMIT_MAX: z.string().default('300'),
    RATE_LIMIT_WINDOW_MS: z.string().default(`${60 * 60 * 1000}`),

    // File uploads
    MAX_FILE_SIZE_MB: z.string().default('10'),

    // Hash
    HASH_PASSWORD_ROUNDS: z.string().default('12'),

    // Encryption
    MESSAGE_ENCRYPTION_KEY: z.string().min(32, 'Encryption key must be at least 32 characters'),
    MESSAGE_ENCRYPTION_ALGORITHM: z.enum(MESSAGE_ENCRYPTION_ALGORITHMS).default('aes-256-gcm'),
});

const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
    console.error('❌ Invalid or missing environment variables:', parsedEnv.error.format());
    process.exit(1);
}

export default parsedEnv.data;
