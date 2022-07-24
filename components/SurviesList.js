import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useContext } from "react";
import AppContext from "../contexts/AppContext";
import DeleteIcon from "@mui/icons-material/Delete";

function SurviesTitleList() {
  const router = useRouter();
  const { data: session } = useSession();
  const { questionaries, deleteQuestionarie, setIsOpen } =
    useContext(AppContext);

  console.log("questionaries", questionaries);
  return (
    <>
      {questionaries.length > 0 &&
        questionaries.map((questionarie) => {
          return (
            <Box key={questionarie._id}>
              <Box
                onClick={() => {
                  router.push({
                    pathname: `/questionarie/[questionarieId]`,
                    query: { questionarieId: questionarie._id },
                  }),
                    setIsOpen(false),
                    console.log(questionarie._id);
                }}
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
                <h1>{questionarie.title} </h1>
              </Box>
              <Button
                sx={{
                  mr: "74%",
                  "&:hover": {
                    backgroundColor: "#002984",
                    opacity: [0.0, 0.0, 0.9],
                  },
                }}
                onClick={() => deleteQuestionarie(questionarie._id)}
                variant="contained"
                startIcon={<DeleteIcon />}
              >
                Delete
              </Button>
              {/* <Button onClick={() => deleteQuestionarie(questionarie._id)}>
                DELETE
              </Button> */}
            </Box>
          );
        })}
    </>
  );
}

export default SurviesTitleList;
