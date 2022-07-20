import { useRouter } from "next/router";
import { connectDB } from "../../middlware/mongodb";
import Questionarie from "../../models/questionarie";

export default function questionarieByIdPage({ questionarie }) {
  //   const {
  //     query: { questionarieId },
  //   } = useRouter();

  return <pre>{JSON.stringify(questionarie)}</pre>;
}

export async function getServerSideProps({ params, req, res }) {
  let { questionarieId } = params;
  await connectDB();
  let questionarie = await Questionarie.findById(questionarieId).populate(
    "author"
  );
  return {
    props: { questionarie: JSON.parse(JSON.stringify(questionarie)) },
  };
}
