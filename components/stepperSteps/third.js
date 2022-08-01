import { Button } from "@mui/material";

export default function StepperThird({ questionarie }) {
  const postQuestionarie = async (e) => {
    const { title, introduction, isQuize, questions, pointsValue } =
      questionarie;

    await fetch(`/api/questionariePost`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        introduction,
        isQuize,
        questions,
        pointsValue,
      }),
    });

    // .catch((res) => console.error(res.error));
  };

  //     try {
  //       fetch(`/api/questionarie`),
  //         {
  //           method: "POST",
  //           headers: { "Content-Type": "application/json" },
  //           body: JSON.stringify({
  //             title,
  //             introduction,
  //             isQuize,
  //             questions,
  //             pointsValue,
  //           }),
  //         };
  //     } catch (err) {
  //       console.error("err", err);
  //     }
  //   };

  return (
    <Button onClick={postQuestionarie} variant="contained" color="success">
      Create
    </Button>
  );
}
