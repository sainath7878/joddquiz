import { useQuiz } from "context";
import styles from "./resultCard.module.css";

function ResultCard({ questionObj, questionNumber }) {
  const { question, options, answer } = questionObj;

  const {
    quizState: { questionAnswers },
  } = useQuiz();

  return (
    <>
      <div className={styles.cardContainer}>
        <h1 className="fs-m">{question}</h1>
        <ul className={styles.list}>
          {options.map((option) => {
            return (
              <li
                key={option}
                className={`${styles.listItem} ${
                  questionAnswers[questionNumber] === option &&
                  questionAnswers[questionNumber] !== answer
                    ? styles.incorrect
                    : ""
                } ${option === answer ? styles.correct : ""}`}
              >
                <p className="text-align-center">{option}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export { ResultCard };
