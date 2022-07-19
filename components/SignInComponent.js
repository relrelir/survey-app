import { providers, signIn, getSession, csrfToken } from "next-auth/react";

function SignInComponent({ providers }) {
  return (
    <div>
      {providers &&
        Object.values(providers).map((provider) => {
          return (
            <div key={provider.name}>
              <button onClick={() => signIn(provider.id)}>
                Sign in with {provider.name}
              </button>
            </div>
          );
        })}
    </div>
  );
}

// export async function getServerSideProps(context) {
//   const { req } = context;
//   const session = await getSession({ req });

//   if (session) {
//     return {
//       redirect: { destination: "/" },
//     };
//   }

//   return {
//     props: {
//       providers: await providers(),
//       csrfToken: await csrfToken(context),
//     },
//   };
// }

export default SignInComponent;
