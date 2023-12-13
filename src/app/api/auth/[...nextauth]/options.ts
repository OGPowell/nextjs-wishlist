import type { NextAuthOptions } from "next-auth"
import GithubProvider from "next-auth/providers/github"

export const authOptions: NextAuthOptions = {
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID!,
            clientSecret: process.env.GITHUB_SECRET!,
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        signIn({ user, account }) {
            console.log(account)
            if (user.name === process.env.USER_NAME) {
                return Promise.resolve(true)
            } else {
                return Promise.resolve(false)
            }
        }
    },
    theme: {
        logo: "/favicon.ico"
    }
}