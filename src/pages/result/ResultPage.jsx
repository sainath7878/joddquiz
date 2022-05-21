import { ResultCard } from "components";
import { useQuiz } from "context";
import { useDocumentTitle, useScrollToTop } from "hooks";
import styles from "./resultPage.module.css";

function ResultPage() {
  const {
    quizState: { score, quiz },
  } = useQuiz();

  useDocumentTitle("Results");
  useScrollToTop();

  return (
    <div className={styles.resultContainer}>
      <h1 className="fs-l secondary-text">Result</h1>

      {quiz && (
        <h2 className="fs-ml">
          Final Score: {score}/{quiz.totalScore}
        </h2>
      )}
      {quiz &&
        quiz?.mcqs.length > 0 &&
        quiz.mcqs.map((question, index) => {
          return (
            <ResultCard
              questionObj={question}
              key={question._id}
              questionNumber={index}
            />
          );
        })}
    </div>
  );
}

export { ResultPage };
