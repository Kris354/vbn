import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class BookController {
  static async create({ body }: { body: { name: string; price: number } }) {
    try {
      const book = await (prisma as any).book.create({
        data: { name: body.name, price: body.price },
      });
      return book;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

static async getById({ params }: { params: { id: string } }) {
  try {
    const book = await (prisma as any).book.findUnique({
      where: { id: Number(params.id) },
    });
    if (!book) throw new Error("Book not found");
    return book;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

static async getAll() {
  try {
    const book = await (prisma as any).book.findMany();
    return book;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

static async delete({ params }: { params: { id: string } }) {
  try {
    const book = await (prisma as any).book.delete({
      where: { id: Number(params.id) },
    });
    return { message: "Book deleted", book };
  } catch (error) {
    console.error(error);
    throw error;
  }
}
}


export default BookController;
