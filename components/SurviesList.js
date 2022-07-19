import Box from "@mui/material/Box";
import { useSession } from "next-auth/react";

function SurviesTitleList() {
  const { data: session } = useSession();
  // session.user.questionaries = [
  //   { title: "questionarie1" },
  //   { title: "questionarie2" },
  // ];
  // console.log(session.user.questionaries[0].title);
  return (
    session.user.questionaries > 0 &&
    session.user.questionaries.map((questionarie) => {
      <Box
        key={questionarie._id}
        sx={{
          my: "8px",
          width: "363px",
          height: "61px",
          backgroundColor: "#FFFFFF",
          borderRadius: "18px",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          // transform: "matrix(-1, 0, 0, 1, 0, 0)",

          "&:hover": {
            backgroundColor: "#c7cdd6",
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      >
        {questionarie.title}
      </Box>;
    })
  );
}

export default SurviesTitleList;
