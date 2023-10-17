import NextAuth from 'next-auth'

declare module 'next-auth' {
  export interface AdapterUser {
    id: string;
    username: string;
    name: string;
    email: string;
    avatar_url: string;
  }

  export interface Session {
    user: {
      id: string;
      username: string;
      name: string;
      email: string;
      avatar_url: string;
    }
  }
}