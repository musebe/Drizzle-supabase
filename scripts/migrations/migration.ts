/**
 * This script handles the database migration process using drizzle-ORM for a PostgreSQL database.
 * It loads environment variables from a .env file, initializes the database connection,
 * and then performs the migration based on the scripts located in the migrations folder.
 */

import db from '../../src/lib/supabase/db'; // Adjust the import path to your db module
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import dotenv from 'dotenv';

// Load environment variables from .env file at the root of the project
dotenv.config();

/**
 * Executes database migration using drizzle-ORM.
 * It logs the migration start and completion statuses.
 * In case of an error, it logs the error and exits the process with status code 1.
 */
const migrateDatabase = async (): Promise<void> => {
    console.log('🚀 Starting database migration...');

    try {
        // Perform the migration using the configured database connection and migration folder
        await migrate(db, { migrationsFolder: 'migrations' });
        console.log('✅ Successfully completed the database migration.');

        // Exit the process successfully
        process.exit(0);
    } catch (error) {
        // Log the error with a descriptive message
        console.error('❌ Error during the database migration:', error);

        // Exit the process with an error code
        process.exit(1);
    }
};

// Execute the migration function
migrateDatabase();
