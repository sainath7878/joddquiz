const initialAuthState = {
    loading: false,
    encodedToken: null
}

const authReducer = (authState, { type, payload }) => {
    switch (type) {
        case "SET_LOADER":
            return { ...authState, loading: payload }
        case "SET_USER":
            return { ...authState, encodedToken: payload.encodedToken }
        default:
            throw new Error("Undefined action")
    }
}

export { initialAuthState, authReducer }