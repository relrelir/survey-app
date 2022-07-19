import { getToken } from "next-auth/jwt";
import { useRouter } from "next/router";
import { connectDB } from "../../middlware/mongodb";
import User from "../../models/user";

export default function UserById({ user }) {
  //   const {
  //     query: { questionarieId },
  //   } = useRouter();
  console.log(user);
  return <pre>{JSON.stringify(user)}</pre>;
}

export async function getServerSideProps({ params, req, res }) {
  const token = await getToken({ req });
  const userId = params.userId == "me" ? token.sub : params.userId; // /user/me || /user/xxx
  //   console.log(req.headers);
  //   console.log(req.cookies);
  //   let { userId } = params;
  await connectDB();
  let user = await User.findById(userId);
  return {
    props: {
      user: JSON.parse(JSON.stringify(user)),
      isMe: user._Id === userId,
    },
  };
}
