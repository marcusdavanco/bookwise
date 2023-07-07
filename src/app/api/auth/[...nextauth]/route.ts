// import type { NextApiRequest, NextApiResponse } from "next"
import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import GithubProvider from 'next-auth/providers/github'

export const authOption = {
  secret: process.env.NEXTAUTH_SECRET ?? '',
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
    }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID ?? '',
      clientSecret: process.env.GITHUB_CLIENT_SECRET ?? '',
    }),
  ],
  pages: {
    signIn: '/login',
  },
}

const handler = NextAuth(authOption)

export { handler as GET, handler as POST }
