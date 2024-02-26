---

# Next.js Supabase Drizzle ORM Demo

This project is a demonstration of integrating Next.js with Supabase and utilizing Drizzle ORM for efficient database management.

## Contributors

- [Eugine Musebe](https://github.com/musebe) (Main Contributor)

## About

This project showcases the integration of Next.js, a React framework, with Supabase, an open-source Firebase alternative, for backend services. Drizzle ORM is utilized for database management, ensuring seamless interaction with PostgreSQL databases.

## Resources

- [Supabase](https://supabase.io/)
- [Drizzle ORM Documentation](https://orm.drizzle.team/)
- [Drizzle ORM Kit Documentation](https://orm.drizzle.team/kit-docs/overview)

## Getting Started

To start the project, follow these steps:

1. **Setup Environment Variables**: Create a `.env` file in the root directory with your Supabase credentials and any other necessary configurations.

   Example `.env` file:
   ```plaintext
   DATABASE_URL=your-database-url
   NEXT_PUBLIC_SUPABASE_URL=your-supabase-url.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
   SERVICE_ROLE_KEY=your-service-role-key
   PW=your-password
   NEXT_PUBLIC_SITE_URL=your-site-url
   ```

   **Note**: Ensure your Supabase project is set up and your PostgreSQL database is accessible before proceeding.

2. **Install Dependencies**: Run `npm install` to install project dependencies.

3. **Run the Project**: Execute `npm run dev` to start the development server.

4. **Explore**: Visit `http://localhost:3000` in your browser to explore the demo application.

## Contribution

Contributions are welcome! If you encounter any issues or have suggestions for improvement, please feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

