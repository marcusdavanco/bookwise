import { prisma } from '@/lib/prisma'
import { NextRequest } from 'next/server'

export async function GET(req: NextRequest) {
  const id = req.nextUrl.pathname.split('/').pop()

  const user = await prisma.user.findFirstOrThrow({
    where: {
      id,
    },
  })

  return user
}
