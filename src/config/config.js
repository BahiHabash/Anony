import env from './validateEnv.js';

const config = {
    // App settings
    PORT: parseInt(env.PORT, 10),
    NODE_ENV: env.NODE_ENV,
    BASE_URL: env.BASE_URL || `http://localhost:${env.PORT}`,

    // Database
    MONGO_URI: env.MONGO_URI,
    DB_NAME: env.DB_NAME,

    // JWT
    JWT_SECRET: env.JWT_SECRET,
    JWT_EXPIRES_IN: env.JWT_EXPIRES_IN,
    REFRESH_EXPIRES_IN: env.JWT_REFRESH_EXPIRES_IN,

    // Cookies
    COOKIE_SECRET: env.COOKIE_SECRET,
    COOKIE_EXPIRES_IN: env.COOKIE_EXPIRES_IN,

    // Email / SMTP
    SMTP_HOST: env.SMTP_HOST,
    SMTP_PORT: parseInt(env.SMTP_PORT, 10),
    SMTP_USER: env.SMTP_USER,
    SMTP_PASS: env.SMTP_PASS,
    EMAIL_FROM: env.EMAIL_FROM,

    // CORS
    CORS_ORIGIN: env.CORS_ORIGIN,

    // Rate limiting
    RATE_LIMIT_MAX: parseInt(env.RATE_LIMIT_MAX, 10),
    RATE_LIMIT_WINDOW_MS: parseInt(env.RATE_LIMIT_WINDOW_MS, 10),

    // File uploads
    MAX_FILE_SIZE_MB: parseInt(env.MAX_FILE_SIZE_MB, 10),

    // Third-party APIs (e.g., Firebase, AWS, Stripe)
    // Logging & Debug
    // Redis 
    // Other
};

export default config;
