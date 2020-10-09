import dotenv from 'dotenv';
import express from 'express';
import bodyParser from "body-parser";
//import indexRoutes from './routes/user.routes';
import cors from 'cors';
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
// load the environment variables from the .env file
dotenv.config({
  path: '.env'
});

const port = process.env.APP_PORT || 4848;

export function run() {
  async function main() {
    // ... you will write your Prisma Client queries here
    const allUsers = await prisma.user.findMany()
    console.log(allUsers)
  }
  
  main()
    .catch((e) => {
      throw e
    })
    .finally(async () => {
      await prisma.$disconnect()
    })
    
  const app = express();
  
  app.use(cors());
  app.use(express.json())
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  //app.use(indexRoutes);

  app.get("/", function (_, res) {
    res.type("text/plain").send("Server is running");
  });

  return app.listen(port, function () {
    // Port is forwarded by docker to 80.
    console.log(`Listening on http://localhost:${port}`);
  });
}

if (process.env.NODE_ENV !== "testing") {
  run();
}