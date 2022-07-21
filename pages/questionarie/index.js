import { Button } from "@mui/material";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import AppContext from "../../contexts/AppContext";
import ControlPointTwoToneIcon from "@mui/icons-material/ControlPointTwoTone";
export default function IndexPage() {
  const { questionaries, setQuestionaries } = useContext(AppContext);
  // const [questionaries, setQuestionaries] = useState([]);
  const [isdelted, setIsdelted] = useState([]);

  const deleteQustionarie = (_id) => {
    console.log("_id", _id);
    fetch(`/api/deleteQuestionarie`, {
      method: "DELETE",
      // headers: { "Content-Type": "application/json" },
      body: _id,
    })
      .then((response) => response.json())
      .then((questionaries) => setIsdelted(!isdelted));
  };

  useEffect(() => {
    fetch("/api/questionarie")
      .then((response) => response.json())
      .then((questionaries) => setQuestionaries(questionaries));
  }, [isdelted]);

  return (
    <>
      <ul>
        {questionaries?.map((questionarie) => (
          <li key={questionarie._id}>
            <Link href={`/questionarie/${questionarie._id}`}>
              <a>{questionarie.title}</a>
            </Link>
            <Button onClick={() => deleteQustionarie(questionarie._id)}>
              DELETE
            </Button>
          </li>
        ))}
      </ul>
      <ControlPointTwoToneIcon
        onClick={() => router.push("/questionarie/new")}
        sx={{
          position: "absolute",
          right: 50,
          bottom: 50,
          fontSize: 100,
          borderRadius: "50%",
          boxShadow: "0px 0px 27px rgba(0, 0, 0, 0.11)",
          opacity: "70%",
          backgroundColor: "#FFFFFF",
          color: "#abdbe3",
          // color: "#FFFFFF",

          "&:hover": {
            backgroundColor: "#FFFFFF",
            color: "#abcf6",
            cursor: "pointer",
          },
        }}
      />
    </>
  );
}
