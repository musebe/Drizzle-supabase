// File: src/lib/supabase/db.ts

/**
 * This module initializes the database connection using drizzle-ORM and the postgres library.
 * It leverages environment variables for configuration, specifically looking for DATABASE_URL.
 * The database schema is imported from a predefined location and utilized in setting up the drizzle client.
 * A message is logged to indicate the successful establishment of the database connection.
 */

import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import dotenv from 'dotenv';
import * as schema from '../supabase/schema';

// Load environment variables from a .env file at the root of the project
dotenv.config();

// Validate the presence of the DATABASE_URL environment variable
if (!process.env.DATABASE_URL) {
  console.error('❌ Error: Database URL is not specified in the environment variables.');
  process.exit(1); // Exit with an error code if DATABASE_URL is missing
}

// Initialize the postgres client with the DATABASE_URL
const client = postgres(process.env.DATABASE_URL, { max: 1 });

// Configure and initialize the drizzle client with the specified schema
const db = drizzle(client, { schema });

console.log('Database connection successfully established.');

// Function to fetch products from the database
export const fetchProducts = async () => {
  // Replace 'schema.products' with the correct table reference from your schema
  const result = await db.select().from(schema.product);
  // console.log("Products", result);
  return result;
};

// Export the drizzle database client for use across the application
export default db;
