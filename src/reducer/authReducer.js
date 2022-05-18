const initialAuthState = {
    loading: false,
    encodedToken: null
}

const authReducer = (authState, { type, payload }) => {
    switch (type) {
        case "SET_LOADER":
            return { ...authState, loading: payload }
        default:
            throw new Error("Undefined action")
    }
}

export { initialAuthState, authReducer }