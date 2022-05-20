import { useQuiz } from "context";
import styles from "./resultCard.module.css";

function ResultCard({ questionObj, questionNumber }) {
  const { question, options, answer } = questionObj;

  const {
    quizState: { questionAnswers },
  } = useQuiz();

  console.log(options, questionNumber);

  return (
    <>
      <div className={styles.cardContainer}>
        <h1 className="fs-m">{question}</h1>
        <ul className={styles.list}>
          {options.map((option) => {
            console.log(
              option,
              answer,
              questionNumber,
              questionAnswers,
              questionAnswers[questionNumber]
            );
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
