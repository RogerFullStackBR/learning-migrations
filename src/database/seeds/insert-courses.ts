import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Inserts seed entries
  await knex("courses").insert([
    { name: "Javascript" },
    { name: "ReactJS" },
    { name: "React-Node" },
    { name: "Node.js" },
    { name: "Git" },
    { name: "Github" },
    { name: "Tailwind" },
    { name: "Express" },
  ]);
}
