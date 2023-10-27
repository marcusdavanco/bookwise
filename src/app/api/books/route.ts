import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET() {
  const books = await prisma.book.findMany({
    include: {
      ratings: true,
      categories: true,
    },
  })

  return NextResponse.json({ books }, { status: 200 })
}
