import { useQuiz } from "context";

function ResultPage() {
  const {
    quizState: { score },
  } = useQuiz();

  return <h1>Points: {score}</h1>;
}

export { ResultPage };
