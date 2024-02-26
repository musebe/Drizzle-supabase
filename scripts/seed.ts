import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import { product } from '../src/lib/supabase/schema'; 
import { faker } from '@faker-js/faker';
import * as dotenv from 'dotenv';

dotenv.config({ path: './.env' });

if (!process.env.DATABASE_URL) {
    console.error('DATABASE_URL not found in .env');
    process.exit(1);
}

const main = async () => {
    const pool = new Pool({
        connectionString: process.env.DATABASE_URL,
    });
    const db = drizzle(pool);

    const productsData = [];

    for (let i = 0; i < 20; i++) {
        productsData.push({
            name: faker.commerce.productName(),
            description: faker.commerce.productDescription(),
            price: faker.commerce.price({ min: 100, max: 1000, dec: 2, symbol: '' }), 
            quantity: faker.number.int({ min: 1, max: 100 }), 
            image: faker.image.url(), 
        });
    }

    console.log('Seed start');
    await db.insert(product).values(productsData).execute(); 
    console.log('Seed done');
    await pool.end();
};

main().catch((error) => {
    console.error('Failed to seed products:', error);
    process.exit(1);
});
