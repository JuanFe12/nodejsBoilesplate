# Boilerplate node js with arquitecture clean ddd


Basic setup of a NodeJS project with typescript, ESLint and Prettier for code standardization and formatting, mocha for tests and postgres as a test bank, and prisma as ORM using the Postgres database.

# Run 

* npm install
* npm start.

# Run test with mocha and chai

* npm run test.

# Run migrations prisma

* npx prisma migrate save --name init --experimental
* npx prisma migrate up --experimental
