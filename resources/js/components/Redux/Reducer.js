
const current_state = {
    promotion: [],
    country: '',
    account_type: 's',
    continent: '',
    city: '',
    state: ''
}
const reducer = (state = current_state, action) => {
    if (action.type == 'CHANGE_PROMOTION') {
        console.log(action.payload)
        return {
            ...state,
            promotion: action.payload.promotion,
            country: action.payload.country,
            continent: action.payload.continent,
            city: action.payload.city,
            state: action.payload.state
        }
    } else if (action.type == 'CHANGE_ACCOUNT_TYPE') {
        console.log(action.payload)
        return {
            ...state,
            account_type: action.payload,
        }
    }
    return state;
}

export default reducer;
