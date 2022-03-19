import {query as q} from 'faunadb'

import NextAuth from 'next-auth'
import GitHubProvider from "next-auth/providers/github";

import {fauna} from '../../../Services/fauna'

export default NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      scope:'read:user'
    }),
  ],

  callbacks: {

    async signIn({ user, account, profile, credentials }) {

      const { email }  = user

      await fauna.query(
        q.Create(
          q.Collection('users'),
          {
            data: {email},
          },
        )
      )
      .then((ret) => console.log(ret))
      .catch((err) => console.error(
        'Error: [%s] %s: %s',
        err.name,
        err.message,
        err.errors()[0].description,
      ))
      

      return true
    }
  }
})