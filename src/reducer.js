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
        default:
            return state;
    }
}
