import { useReducer, createContext, useContext } from "react";
import { quizReducer, initialQuizState } from "reducer"

const QuizContext = createContext()

function QuizProvider({ children }) {
    const [quizState, quizDispatch] = useReducer(quizReducer, initialQuizState);

    return (
        <QuizContext.Provider value={{ quizState, quizDispatch }}>
            {children}
        </QuizContext.Provider>
    )
}

const useQuiz = () => useContext(QuizContext);

export { QuizProvider, useQuiz };