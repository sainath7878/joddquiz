import { useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./quiz.module.css";
import { useQuiz, useAuth } from "context";
import { css } from "@emotion/react";
import BeatLoader from "react-spinners/BeatLoader";
import { QuestionCard } from "components";
import { useDocumentTitle, useFetch, useScrollToTop } from "hooks";

function Quiz() {
  const { quizid, questionNumber } = useParams();
  useDocumentTitle("Quiz");
  useScrollToTop();

  const { quiz: quizDataFromApi } = useFetch(`/api/quizzes/${quizid}`);
  const {
    quizDispatch,
    quizState: { quiz },
  } = useQuiz();
  const {
    authState: { loading },
  } = useAuth();

  useEffect(() => {
    quizDataFromApi &&
      quizDispatch({ type: "SET_QUIZ", payload: quizDataFromApi });
  }, [quizDataFromApi]);

  return (
    <div className={styles.quizContainer}>
      <div className="loader">
        <BeatLoader
          color="#a40ae0"
          loading={loading}
          css={css}
          margin={2}
          size={15}
        />
      </div>

      {quiz && quiz?.mcqs?.length > 0 && (
        <>
          <h1 className="fs-xl text-align-center mb-sm">{quiz.title}</h1>
          <QuestionCard
            questionObj={quiz.mcqs[questionNumber]}
            noOfQuestions={quiz.mcqs.length}
          />
        </>
      )}
    </div>
  );
}

export { Quiz };
