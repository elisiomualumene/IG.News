import NextAuth from 'next-auth'
import providers from "next-auth/providers"

export default NextAuth({
  providers: [
    providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      scope:'read:user'
    }),
  ],
})