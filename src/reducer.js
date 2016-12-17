export default function(state = {}, action) {
    switch(action.type) {
        case 'REQUEST_ARTICLE':
            return {
                loading: true
            };
        case 'RECEIVE_ARTICLE':
            return {
                ...state,
                loading: false,
                search: action.data[0],
                results: action.data[1].map((e, i) => {
                    return {title: e, text: action.data[2][i], url: action.data[3][i]};
                })
            };
        default:
            return state;
    }
}
