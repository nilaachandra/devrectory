import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // This is where we'll check the user credentials
        const user = { id: "1", name: "Admin", email: "admin@example.com" }

        if (credentials?.username === process.env.ADMIN_USERNAME && 
            credentials?.password === process.env.ADMIN_PASSWORD) {
          return user
        } else {
          return null
        }
      }
    })
  ],
  pages: {
    signIn: '/login',
  },
})

export { handler as GET, handler as POST }

