export function receiveArticle(data) {
    return {
        type: 'RECEIVE_ARTICLE',
        data
    };
}

const api = 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&limit=10&search=';
const cors = process.env.NODE_ENV === 'development' ? 'http://localhost:3001' : 'https://gordon2012-cors-anywhere.herokuapp.com';

export const fetchArticle = (search) => dispatch => {
    if(search) return fetch(`${cors}/${api}${search}`)
        .then((res, rej) => res.json())
        .then(json => dispatch(receiveArticle(json)));
}
