export const reduserFn = (state, action) => {

    if (action.type === "PRODUCT") return { ...state, cart: action.payload }

    if (action.type === "REFRESH") return { ...state, cart: action.payload }

    return state
}