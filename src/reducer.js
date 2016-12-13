export default function(state = {}, action) {
    switch(action.type) {
        case 'SET_STATE':
            return action.state;
        case 'INCREMENT':
            return {
                count: state.count + 1
            }
        case 'DECREMENT':
            return {
                count: state.count - 1
            }
        case 'RECEIVE_ARTICLE':
            return {
                ...state,
                search: action.data[0],
                results: action.data[1].map((e, i, a) => {
                    return {title: e, text: action.data[2][i], url: action.data[3][i]};
                })
            }
        default:
            return state;
    }
}
