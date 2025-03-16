import { Hono } from "hono";
import { createContainer } from "awilix";
import ProductService from "@medusajs/product";
import { MikroORM } from "@mikro-orm/core";
import { PostgreSqlDriver } from "@mikro-orm/postgresql";

type ContainerKeys = "product" | "cart" | "order" | "pricing" | "store";

console.log(ProductService);

const container = createContainer();

const app = new Hono();

app.get("/", async (c) => {
  return c.text("Hello World");
});

export default app;
