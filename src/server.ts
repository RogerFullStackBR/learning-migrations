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

app.get("/courses", async (request: Request, response: Response) => {
  //const courses = await knex.raw("SELECT * FROM courses");
  const courses = await knex("courses").select().orderBy("name", "asc");
  response.status(200).json({ courses });
});

app.put("/courses/:id", async (request: Request, response: Response) => {
  const { id } = request.params;
  const { name } = request.body;
  await knex("courses").update({ name }).where({ id });
  response.json();
});

app.delete("/courses/:id", async (request: Request, response: Response) => {
  const { id } = request.params;
  await knex("courses").delete().where({ id });
  response.json();
});

app.post("/modules/:id", async (request: Request, response: Response) => {
  const { name } = request.body;
  const courseId = request.params.id;
  await knex("course_modules").insert({ name, course_id: courseId });
  response.status(201).json();
});

app.get("/modules", async (request: Request, response: Response) => {
  const listModules = await knex("course_modules").select();
  response.json({ listModules });
});

app.get("/courses/:id/models", async (request: Request, response: Response) => {
  const listCourses = await knex("courses")
    .select(
      "courses.id AS course_id",
      "course_modules.id AS module_id",
      "course_modules.name AS module",
      "courses.name AS course"
    )
    .join("course_modules", "courses.id", "course_modules.course_id");
  response.json(listCourses);
});

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
