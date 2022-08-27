import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import Google from "next-auth/providers/google"
import KeycloakProvider from 'next-auth/providers/keycloak'
export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: "452554611733-8jh13ru5fii3b1vrqbpp3f951p1emaj9.apps.googleusercontent.com",
      clientSecret: "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",
      
    }),
  
    // ...add more providers here
  ],
  pages:{
    siginin: "/signin"
  },
  secret:process.env.SECRET,
  callbacks:{
    async session({session , token }){
      session.user.id = token.sub;
      
      return session;
    }
  }
})