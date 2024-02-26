import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Image from 'next/image';
import { fetchProducts } from '@/src/lib/supabase/db';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Drizzle-Supabase',
  description: 'Demo app',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const products = await fetchProducts();
  const DEFAULT_IMAGE_URL =
    'https://via.placeholder.com/500x300?text=Product+Image+Unavailable';
  const DEFAULT_ALT_TEXT = 'Default product name';
  return (
    <html lang='en'>
      <body className='font-inter bg-gray-100'>
        <div className='py-8 px-4 sm:px-6 lg:px-8'>
          <h1 className='text-3xl font-bold text-center mb-8'>Our Products</h1>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {products.map((product) => (
              <div
                key={product.id}
                className='transition duration-300 ease-in-out transform hover:scale-105'
              >
                <div className='overflow-hidden rounded-lg shadow-lg'>
                  <Image
                    className='h-48 w-full object-cover'
                    src={product.image || DEFAULT_IMAGE_URL}
                    alt={product.name || DEFAULT_ALT_TEXT}
                    width={500}
                    height={300}
                  />
                  <div className='px-6 py-4 bg-white dark:bg-slate-800'>
                    <h2 className='mb-2 text-lg font-semibold text-gray-900 dark:text-white'>
                      {product.name}
                    </h2>
                    <p className='mb-3 text-base text-gray-700 dark:text-gray-300'>
                      {product.description
                        ? product.description.slice(0, 100)
                        : 'No description available'}
                      ...
                    </p>
                    <div className='flex justify-between items-center'>
                      <span className='text-xl font-bold text-gray-900 dark:text-white'>
                        ${product.price}
                      </span>
                      <span className='text-sm text-gray-600 dark:text-gray-400'>
                        {product.quantity} in stock
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </body>
    </html>
  );
}
