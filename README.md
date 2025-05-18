# DUKE Assistant

This project is a Next.js based application that includes a UI and API components backed by a PostgreSQL database. It uses Next.js, React, Tailwind CSS, Supabase, and several modern React libraries. This documentation covers setup, development, and deployment instructions.

![FLyer-DUKE](public/resources/slide-duke.jpg "Flyer DUKE")

## Prerequisites

- [Node.js](https://nodejs.org/) (v16 or later)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)
- A PostgreSQL database instance
- Environment variable management (a .env file in the project root)

## Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/danil09234/duke-frontend/
   cd duke-chat
   ```

2. **Install dependencies**

   ```bash
   npm i
   # or
   yarn
   ```

3. **Set up Supabase**

   Install the Supabase CLI using Homebrew:

   ```bash
   brew install supabase/tap/supabase
   ```

   Start your local Supabase instance:

   ```bash
   supabase start
   ```

   After Supabase starts, it will display your database URL and anon key. Create a `.env` file in the project root and populate it with the following (replace the placeholder values with those provided by Supabase):

   ```env
   DATABASE_URL=postgres://YOUR_SUPABASE_USER:YOUR_SUPABASE_PASSWORD@localhost:5432/YOUR_SUPABASE_DB
   NEXT_PUBLIC_SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY
   ```

   If you need additional environment variables for your project, consult the Supabase documentation and add them accordingly.


## Development

To start the development server, run:

```bash
npm run dev
# or
yarn dev
```

This will start Next.js in development mode. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Project Structure Overview

- **app/**: Contains global CSS, layout, and page components for Next.js.
- **components/**: Contains reusable UI components and page-specific components.
- **lib/**: Utility functions and database connection configurations.
- **migrations/**: SQL migration files for setting up the PostgreSQL database schema.
- **scripts/**: Utility scripts such as database migration executors.
- **public/**: Public assets served by the application.
- **styles/**: Additional CSS or module CSS files.
- **pages/**: In some setups, you might find pages here if using a hybrid routing strategy.

## Building for Production

To build the application for production run:

```bash
npm run build
# or
yarn build
```

Then, start the production server with:

```bash
npm run start
# or
yarn start
```

## Additional Scripts

- **Linting**: Run `npm run lint` to check for linting errors.
- **Generating Database Schema**: If supported, use `npm run generate`.


## Troubleshooting

- **Database Errors**: Verify your `DATABASE_URL` in the .env file and that your PostgreSQL instance is accessible.
- **Environment Variables**: Double-check that all required environment variables are defined in your platform or .env file.

## Conclusion

This documentation provides an overview of how to set up, develop, and deploy the DUKE assistant application. 

For further assistance, please consult with:
- Vladyslav Panik: vpanik50@gmail.com
- Danylo Zahourlko: dailzag05@gmail.com

---

For more detailed configuration, refer to the individual configuration files such as `next.config.ts`, `tailwind.config.ts`, and `drizzle.config.ts`.



@ KPI FEI TUKE 2024
Vladyslav Panik & Danylo Zahorulko
