const initialState = {
    isLoadingInitial: false,
    userDetail: {}
}

export default function (state = initialState, action = {}) {
    switch (action.type) {
        case 'GET_HOME_LOADING':
            return {
                ...state,
                isLoadingInitial: true,
            }
        case 'GET_HOME_SUCCESS':
            console.log(state.userDetail)
            return {
                ...state,
                isLoadingInitial: false,
                userDetail: action.payload.data
            }
        case 'GET_HOME_ERROR':
            return {
                ...state,
                isLoadingInitial: false,
            }
        default:
            return {
                ...state
            }
    }
}
