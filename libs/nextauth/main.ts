/** */
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

/** */
const handler = NextAuth({
  pages: {
    signIn: '/auth/login'
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        return {
          ...token,
          // @ts-ignore
          user: user?.user
        }
      }

      return token
    },
    async session({ session, token }) {
      if (token.user) {
        // @ts-ignore
        session.user = token.user
        // @ts-ignore
        session.token = token.jti
      }
      return session
    }
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          required: true
        },
        password: {
          label: 'Password',
          type: 'password',
          required: true
        }
      }
    })
  ]
})

/** */
export { handler as GET, handler as POST }
