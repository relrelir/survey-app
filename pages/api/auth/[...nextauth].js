import NextAuth from "next-auth";
import User from "../../../models/user";
import EmailProvider from "next-auth/providers/email";
import FacebookProvider from "next-auth/providers/facebook";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { dbClient } from "../../../middlware/mongodb";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";

export const authOptions = {
  debug: true,

  adapter: MongoDBAdapter(dbClient()),

  secret: process.env.NEXTAUTH_SECRET,

  session: {
    strategy: "jwt", // "database"
    maxAge: 30 * 24 * 60 * 60, // 30 days
    updateAge: 24 * 60 * 60, // 24 hours
  },

  jwt: {
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },

  callbacks: {
    async jwt(params) {
      const { token, account, user } = params;

      // if (account?.access_token) token.accessToken = account.access_token;
      if (user?.role) token.role = user?.role;

      console.log("jwtCallback", params);

      return token;
    },

    async session(params) {
      const { session, token, user } = params;

      if (session) {
        // if (token?.accessToken) session.accessToken = token.accessToken;

        session.user = session.user || {};
        let id = token?.sub || user?.id;
        if (id) session.user.id = id;
        let role = token?.role || user?.role;
        if (role) session.user.role = role;
      }

      console.log("sessionCallback", params);

      return session;
    },
    // async signIn({ user, account, profile, email, credentials }) {
    //   const isAllowedToSignIn = true;

    //   await fetch("http://localhost:3000/api/user", {
    //     method: "POST",
    //     body: JSON.stringify({
    //       email,
    //     }),
    //   });
    // },
  },
  pages: {
    signIn: "/auth/signin",
    signOut: "/auth/signOut",
  },
  providers: [
    EmailProvider({
      server: {
        host: "smtp.ethereal.email",
        port: 587,
        auth: {
          user: "bernadette54@ethereal.email",
          pass: "9TEUJAkjC5XG3p91Hm",
        },
      },
      from: process.env.EMAIL_FROM,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
};

export default NextAuth(authOptions);
