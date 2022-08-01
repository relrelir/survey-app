import { getToken } from "next-auth/jwt";
import withMongodb, { connectDB } from "../../middlware/mongodb";
import Answer from "../../models/answer";
import Question from "../../models/question";
import Questionarie from "../../models/questionarie";
import User from "../../models/user";

const secret = process.env.NEXTAUTH_SECRET;
const handler = async (req, res) => {
  console.log("try123");
  if (req.method === "POST") {
    const { title, introduction, isQuize, questions, pointsValue } = req.body;
    // await connectDB();
    // const token = await getToken({ req, secret });
    const [token] = await Promise.all([getToken({ req, secret }), connectDB()]);
    console.log("token:", token);
    const userId = token.sub;

    if (title) {
      try {
        let user = await User.findById(userId);
        console.log("user", user);
        console.log("userId", userId);

        // let newQuestions = [];
        // for (let q of questions) {
        //   let newAnswers = [];

        //   for (let a of q.answers) {
        //     let answer = new Answer(a);

        //     newAnswers.push(await answer.save());
        //   }
        //   let { title, introduction, isMultiChoise } = q;

        //   let question = new Question({
        //     title,
        //     introduction,
        //     isMultiChoise,
        //     answers: newAnswers,
        //   });

        //   newQuestions.push(await question.save());
        // }

        // const questionarie = new Questionarie({
        //   author: user,
        //   title,
        //   introduction,
        //   isQuize,
        //   questions: newQuestions,
        // });
        /*
        let $questions = [];
        for (let q of questions) {
          let $answers = [];
          for (let a of q.answers) {
            let answer = new Answer(a);
            $answers.push(answer.save());
          }
          let { title, introduction, isMultiChoise } = q;

          let question = new Question({
            title,
            introduction,
            isMultiChoise,
            answers: await Promise.all($answers),
          });
          $questions.push(question.save());
        }
        const questionarie = new Questionarie({
          author: user,
          title,
          introduction,
          isQuize,
          questions: await Promise.all($questions),
        });
*/

        const questionarie = new Questionarie({
          author: user,
          title,
          introduction,
          isQuize,
          questions: questions.map(
            ({ title, introduction, isMultiChoise, answers }) =>
              new Question({
                title,
                introduction,
                isMultiChoise,
                answers: answers.map((a) => new Answer(a)),
              })
          ),
          pointsValue,
        });

        const questionarieCreated = await questionarie.save();
        res.status(200).json(questionarieCreated);
      } catch (error) {
        console.log("error", error);
        res.status(500).json(error.messege);
      }
    } else {
      res.status(422).send("data_incomplete");
    }
  }
};

export default withMongodb(handler);
