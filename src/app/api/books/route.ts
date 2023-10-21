import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET() {
  const books = prisma.book.findMany()

  return NextResponse.json({ books }, { status: 200 })
}
