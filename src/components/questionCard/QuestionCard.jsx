import { useQuiz } from "context";
import { Link, useParams } from "react-router-dom";
import styles from "./questionCard.module.css";

function QuestionCard({ questionObj, noOfQuestions }) {
  const { quizid, questionNumber } = useParams();
  const { question, options, answer } = questionObj;

  const {
    quizDispatch,
    quizState: { questionAnswers },
  } = useQuiz();

  const scoreHandler = () => {
    if (questionAnswers[questionNumber] === answer) {
      quizDispatch({ type: "SET_SCORE" });
    }
  };

  return (
    <>
      <div className={styles.cardContainer}>
        <span className={styles.questionNumber}>
          Question: {Number(questionNumber) + 1}/{noOfQuestions}
        </span>
        <h1 className="fs-m">{question}</h1>
        <ul className={styles.list}>
          {options.map((option) => {
            return (
              <li
                key={option}
                className={`${styles.listItem} ${
                  questionAnswers && questionAnswers[questionNumber] === option
                    ? styles.selected
                    : ""
                }`}
              >
                <label
                  htmlFor={option}
                  onClick={(event) =>
                    quizDispatch({
                      type: "SET_QUESTION_ANSWERS",
                      payload: {
                        questionNumber: questionNumber,
                        value: event.target.value,
                      },
                    })
                  }
                  className={styles.optionLabel}
                >
                  <input
                    type="radio"
                    name="question-option"
                    value={option}
                    id={option}
                  />{" "}
                  {option}
                </label>
              </li>
            );
          })}
        </ul>
        {Number(questionNumber) === noOfQuestions - 1 ? (
          <Link to={`/result`} onClick={() => scoreHandler()}>
            <button className={styles.btn}>Result</button>
          </Link>
        ) : (
          <Link to={`/questions/${quizid}/${Number(questionNumber) + 1}`}>
            <button className={styles.btn} onClick={() => scoreHandler()}>
              Next
            </button>
          </Link>
        )}
      </div>
    </>
  );
}

export { QuestionCard };
