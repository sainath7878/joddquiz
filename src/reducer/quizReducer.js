const initialQuizState = {
    quiz: {},
    score: 0,
    questionAnswers: {}
}

const quizReducer = (authState, { type, payload }) => {
    switch (type) {
        case "SET_QUIZ":
            return { ...authState, quiz: payload }
        case "SET_SCORE":
            return { ...authState, score: authState.score + 10 }
        case "SET_QUESTION_ANSWERS":
            const { questionNumber, value } = payload
            return { ...authState, questionAnswers: { ...authState.questionAnswers, [questionNumber]: value } }
        default:
            throw new Error("Undefined Action");
    }
}

export { initialQuizState, quizReducer }