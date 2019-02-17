# Simple Auth Starter

A simple auth-starter package using React & Express that runs in a docker environment

Run:
`docker-compose up --build`

### Services
[Client](#client)
[Nginx](#nginx)
[Redis-Server](#redis-server)
[Server](#server)

#### Client

- React
  - Built using latest version of React to use the hooks api in production
  - Use hooks because it's awesome (no more classes)
  - Use Suspense because it's awesome (no more loading renders)
- Graphql
  - `apollo-boost` to write gql
  - `react-apollo-hooks` to connect to apollo-server and `useQuery`, `useMutation` for queries and mutations.
- Router
  - We need router and history
- Formik
  - Useful form api that works perfectly with `Yup` (validation schemas)
  - Error validations
  - Doesn't play too well with graphql
- Material-UI
  - Clean ui, get started fast.
  - Component prop names suck

#### Nginx
- Simple config to route requests between client and server. All requests made to server will be handled by `/api` route. Creates socket connection for CRA hot reloading.

#### Redis-Server
- Used to store sessions

#### Server

- Express
  - Express is simple and good docs
- Bcrypt
  - `bcryptjs` - A lot more memory than `bcrypt` but needs additional packages installed from Docker, so we chose `bcryptjs` here
- Postgres
  - Super fast, indices, good docs + huge support
- connect-redis
  - Connect to redis server
- TypeORM
  - is ORM required? No but TypeORM works really well with typescript and codegen
- Passport
  - great node library to handle authentication and oauth
- Graphql
  - `apollo-server-express`