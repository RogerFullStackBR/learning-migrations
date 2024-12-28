import express, { Request, Response } from "express";
import { knex } from "./database/knex";

const PORT = 3333;
const app = express();
app.use(express.json());

app.post("/courses", async (request: Request, response: Response) => {
  const { name } = request.body;

  //database connection
  await knex("courses").insert({ name });

  response.status(201).json({ name });
});

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
