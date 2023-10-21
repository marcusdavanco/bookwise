import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET() {
  const categories = prisma.category.findMany()

  return NextResponse.json({ categories }, { status: 200 })
}
