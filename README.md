# Next.js Postgres Auth Example

This project demonstrates how to set up authentication in a Next.js application using Auth.js (NextAuth.js) and a PostgreSQL database.

## Environment Variables

Copy the `.env.example` file to `.env.local` and fill in the following values:

```bash
DATABASE_URL=postgresql://user:password@localhost:5432/dbname
AUTH_GOOGLE_ID=your_google_client_id
AUTH_GOOGLE_SECRET=your_google_client_secret
AUTH_SECRET=your_auth_secret # Generate with `npx auth secret`
```

## Features

- **Authentication:** Using Auth.js with Google provider.
- **Database:** PostgreSQL with `@auth/pg-adapter`.
- **Middleware:** Protected routes using Auth.js middleware.
- **Client/Server Components:** Usage of `auth()` and `useSession()` to access user data.

## Docker Compose

To run the database and the application together, follow these steps:

1. Create a `.env` file from the `.env.example`.
2. Generate an `AUTH_SECRET`: `npx auth secret`.
3. Fill in the `AUTH_GOOGLE_ID` and `AUTH_GOOGLE_SECRET`.
4. Run the services: `docker-compose up --build`.
