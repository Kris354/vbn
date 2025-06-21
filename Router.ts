import { Elysia, t } from "elysia";
import BookController from "./controllers/BookController";

interface BookBody {
  name: string;
  price: number;
}

interface BookParams {
  id: string;
}

const books = new Elysia()
  .post(
    "/",
    ({ body }: { body: BookBody }) => BookController.create({ body }),
    {
      body: t.Object({
        name: t.String(),
        price: t.Number(),
      }),
    }
  )
  .get(
    "/:id",
    ({ params }: { params: BookParams }) => BookController.getById({ params }),
    {
      params: t.Object({
        id: t.String(),
      }),
    }
  )
  .get("/", () => BookController.getAll())
  .delete(
    "/:id",
    ({ params }: { params: BookParams }) => BookController.delete({ params }),
    {
      params: t.Object({
        id: t.String(),
      }),
    }
  );

export const Router = {
  books,
};
