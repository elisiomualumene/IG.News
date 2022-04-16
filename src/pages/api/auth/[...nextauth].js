import { query  as q} from 'faunadb'

import NextAuth from 'next-auth'
import GitHubProvider from "next-auth/providers/github";

import {client} from '../../../Services/fauna'

export default NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      scope:'read:user'
    }),
  ],

  jwt: {
    signingKey: process.env.SIGNING_KEY
  },

  callbacks: {
    async signIn( {user, account, profile} ) {

      const email  = user

        try {
        await client.query(
            q.If(
              q.Not(
                q.Exists(
                  q.Match(
                    q.Index('users_by_email'),
                    q.Casefold(user.email)
                  )
                )
              ),
              q.Create(
                q.Collection('users'),
                { data: { email }}
              ),
              q.Get(
                q.Match(
                  q.Index('users_by_email'),
                  q.Casefold(user.email)
                )
              )
            )
          )

        return true }
        catch {
           return false
          }

      }
    }
})