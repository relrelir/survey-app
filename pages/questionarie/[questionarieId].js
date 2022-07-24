import { useRouter } from "next/router";
import { connectDB } from "../../middlware/mongodb";
import Questionarie from "../../models/questionarie";

export default function questionarieByIdPage({ questionarie }) {
  //   const {
  //     query: { questionarieId },
  //   } = useRouter();
  questionarie = JSON.stringify(questionarie);
  return questionarie;
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
