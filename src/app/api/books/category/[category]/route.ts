import { prisma } from '@/lib/prisma'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const categoryId = req.nextUrl.pathname.split('/').pop()

  if (!categoryId) {
    return NextResponse.json({ message: 'id is required.' }, { status: 400 })
  }

  const categoryBooksIds = await prisma.categoriesOnBooks
    .findMany({
      where: {
        categoryId,
      },
    })
    .then((categoryBooks) => categoryBooks.map((item) => item.book_id))

  const books = await prisma.book.findMany({
    where: {
      id: {
        in: categoryBooksIds,
      },
    },
  })

  if (!books) {
    return NextResponse.json(
      { message: 'resource not found.' },
      { status: 404 },
    )
  }

  return NextResponse.json({ books }, { status: 200 })
}
