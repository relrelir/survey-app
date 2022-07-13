import NextAuth from "next-auth";
import User from "../../../models/user";
import FacebookProvider from "next-auth/providers/facebook";
import GitHubProvider from "next-auth/providers/gitHub";
import GoogleProvider from "next-auth/providers/google";
import { connectDBOnly } from "../../../middlware/mongodb";
// import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import mongoose from "mongoose";

export default NextAuth({
  callbacks: {
    async jwt({ token, account }) {
      // Persist the OAuth access_token to the token right after signin
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token from a provider.
      session.accessToken = token.accessToken;
      return session;
    },
  },

  providers: [
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

  // callbacks: {
  //   async signIn(user /*account, profile*/) {
  //     console.log("user:", user);
  //     await connectDBOnly();
  //     await User.findOneAndUpdate(
  //       {
  //         email: user.user.email,
  //       },
  //       {
  //         name: user.user.name,
  //         image: user.user.image,
  //       },
  //       { upsert: true }
  //     );
  //     return true;
  //   },
  // },
});
