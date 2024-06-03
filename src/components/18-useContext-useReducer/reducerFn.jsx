export const reducerFn = (state, action) => {
    if (action.type === "INPUT") return { ...state, ...action.payload }

    return state
}
