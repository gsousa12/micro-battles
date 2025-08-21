import { Elysia } from "elysia";
import { TesteEntity } from "@micro-battles/types/src/index";

const app = new Elysia().get("/", () => "Hello Elysia").listen(3000);

const teste: TesteEntity = {
  id: "1",
  name: "Teste Entity",
  description: "This is a test entity",
};

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port} : ${teste.name}`
);
