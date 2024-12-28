import express, { Request, Response } from "express";

const PORT = 3333;
const app = express();
app.use(express.json());

app.get("/", async (request: Request, response: Response) => {
  response.status(200).json({ message: "Help me Jesus!" });
});

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
