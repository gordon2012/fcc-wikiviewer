export function setState(state) {
    return {
        type: 'SET_STATE',
        state
    };
}

export function increment() {
    return {
        type: 'INCREMENT'
    };
}

export function decrement() {
    return {
        type: 'DECREMENT'
    };
}
