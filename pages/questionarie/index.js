import Link from "next/link";
import { useEffect, useState } from "react";

export default function IndexPage() {
  const [questionaries, setQuestionaries] = useState([]);

  useEffect(() => {
    fetch("/api/questionarie", {
      query: { skip: 0, limit: 1 },
    })
      .then((response) => response.json())
      .then((questionaries) => setQuestionaries(questionaries));
  }, []);

  return (
    <ul>
      {questionaries.map((questionarie) => (
        <li key={questionarie._id}>
          <Link href={`/questionarie/${questionarie._id}`}>
            <a>{questionarie.title}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
}
