import NextAuth from "next-auth";
import User from "../../../models/user";
import FacebookProvider from "next-auth/providers/facebook";
import GitHubProvider from "next-auth/providers/gitHub";
import GoogleProvider from "next-auth/providers/google";
import { connectDBOnly } from "../../../middlware/mongodb";
import { getCookies, setCookie } from "cookies-next";
// import { MongoDBAdapter } from "@next-auth/mongodb-adapter";

export default NextAuth({
  // callbacks: {
  //   async jwt({ token, account }) {
  //     // Persist the OAuth access_token to the token right after signin
  //     if (account) {
  //       token.accessToken = account.access_token;
  //     }
  //     return token;
  //   },
  //   async session({ session, token, user }) {
  //     // Send properties to the client, like an access_token from a provider.
  //     session.accessToken = token.accessToken;
  //     return session;
  //   },
  // },

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

  callbacks: {
    // async jwt({ token, account }) {
    //   console.log("jwt account:", account);
    //   console.log("jwt token:", token);

    //   if (account) {
    //     token.accessToken = account.access_token;

    //     const { name, email, picture } = token;

    //     const fetchRes = await fetch("http://localhost:3000/api/user", {
    //       method: "POST",
    //       credentials: "same-origin",
    //       body: JSON.stringify({
    //         // accessToken,
    //         email,
    //         name,
    //         image: picture,
    //       }),
    //     });
    //   }
    //   return token;
    // },
    // async session({ session, token, user }) {
    //   console.log("session user:", user);
    //   console.log("session session:", session);
    //   console.log("session token:", token);
    //   console.log("cookies", getCookies());
    //   const { name, email, picture } = session.user;

    //   // const fetchRes = await fetch("http://localhost:3000/api/user", {
    //   //   method: "POST",
    //   //   credentials: "same-origin",
    //   //   body: JSON.stringify({
    //   //     // accessToken,
    //   //     email,
    //   //     name,
    //   //     image: picture,
    //   //   }),
    //   // });

    //   // const json = await fetchRes.json();

    //   // console.log("json?.accessToken", json?.accessToken);

    //   // // Send properties to the client, like an access_token from a provider.
    //   // session.accessToken = token.accessToken;
    //   return session;
    // },
    async signIn(res /*account, profile*/) {
      console.log("signIn res:", res);
      const accessToken = res?.account?.access_token;
      const email = res?.user?.email;
      const name = res?.user?.name;
      const image = res?.user?.image;

      const fetchRes = await fetch("http://localhost:3000/api/user", {
        method: "POST",
        credentials: "same-origin",
        body: JSON.stringify({
          accessToken,
          email,
          name,
          image,
        }),
      });

      const json = await fetchRes.json();

      console.log("json?.accessToken", json?.accessToken);

      return true;
      // Cookies.set("access_token", accessToken);

      // await connectDBOnly();
      // await User.findOneAndUpdate(
      //   {
      //     email: res.user.email,
      //   },
      //   {
      //     name: res.user.name,
      //     image: res.user.image,
      //   },
      //   { upsert: true }
      // );
      // return true;
    },
  },
});
