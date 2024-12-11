import dotenv from 'dotenv';

dotenv.config();

interface EnvConfig {
    DB_NAME: string;
    DB_USER: string;
    DB_PASSWORD: string;
    DB_HOST: string;
}

const { DB_USER, DB_PASSWORD, DB_NAME, DB_HOST } = process.env as unknown as EnvConfig;
console.log('DB_USER :>> ', DB_USER, DB_PASSWORD, DB_NAME, DB_HOST);
// Throw an error if any required environment variable is missing
if (!DB_USER || !DB_NAME || !DB_HOST) {
    throw new Error('Missing required environment variables');
}

// Default export
export default { DB_USER, DB_PASSWORD, DB_NAME, DB_HOST };
