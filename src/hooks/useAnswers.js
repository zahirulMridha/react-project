import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default function useAnswers(videoID) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [answers, setAnswers] = useState([]);
  useEffect(() => {
    async function fatchAnswer() {
      const db = getDatabase();
      const answerRef = ref(db, "answers/" + videoID + "/questions");
      const answerQuery = query(answerRef, orderByKey());

      try {
        setError(false);
        setLoading(true);
        const snapshot = await get(answerQuery);
        setLoading(false);
        if (snapshot.exists()) {
          return setAnswers((prevAnswer) => [
            ...prevAnswer,
            ...Object.values(snapshot.val()),
          ]);
        }
      } catch {
        setError(true);
        setLoading(false);
      }
    }
    fatchAnswer();
  }, [videoID]);
  return {
    loading,
    error,
    answers,
  };
}
