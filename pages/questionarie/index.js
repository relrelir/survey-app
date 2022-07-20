import { Button } from "@mui/material";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function IndexPage() {
  const [questionaries, setQuestionaries] = useState([]);
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
  );
}
