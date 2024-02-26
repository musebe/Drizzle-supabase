import type { Config } from 'drizzle-kit';
import * as dotenv from 'dotenv';

// Load environment variables from a .env file at the root of the project
dotenv.config();

// Validate the presence of the DATABASE_URL environment variable
if (!process.env.DATABASE_URL) {
    console.error('🔴 Cannot find database URL. Please ensure the .env file contains DATABASE_URL.');
    process.exit(1); // Exit with an error code to prevent further execution
}

const config: Config = {
    // Path to the schema file
    schema: './src/lib/supabase/schema.ts',
    // Output directory for the migration files
    out: './migrations',
    // Database driver to use
    driver: 'pg',
    // Database connection credentials
    dbCredentials: {
        connectionString: process.env.DATABASE_URL,
    },
    // Enable verbose logging for detailed operation logs
    verbose: true,
    // Enforce strict mode for additional validations
    strict: true,
};

export default config;
