
const ROOT_URL = `https://courses.openedu.urfu.ru/api/courses/v1/courses/`

export const FETCH_PRODUCTS_BEGIN   = 'FETCH_PRODUCTS_BEGIN';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';

export const fetchProductsBegin = () => ({
  type: FETCH_PRODUCTS_BEGIN
});

export const fetchProductsSuccess = data => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: { data }
});

export const fetchProductsFailure = error => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: { error }
});

export function fetchProducts() {
  return dispatch => {
    dispatch(fetchProductsBegin());
    return fetch(ROOT_URL)
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchProductsSuccess(json.results));
        return json.results;
      })
      .catch(error => dispatch(fetchProductsFailure(error)));
  };
}

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}
// export const receivedPosts = json => ({
//   type: FETCH_API,
//   payload: json.results,
// });

// export function fetchPosts() {
//   return dispatch =>{
//     return fetch(ROOT_URL)
//     .then(
//       response => response.json()
//     )
//     .then((json) => {
//       dispatch(receivedPosts(json))
//     })
//   }
// }

// async function fetchPosts(subreddit) {
//     return dispatch => {
//       dispatch(requestPosts(subreddit))
//       return await fetch(`http://www.reddit.com/r/${subreddit}.json`)
//         .then(response => response.json())
//         .then(json => dispatch(receivePosts(subreddit, json)))
//     }
//   }
  
// async function fetchPosts(subreddit) {
//     return dispatch => {
//         dispatch(requestPosts(subreddit))
//         const response = await fetch('https://courses.openedu.urfu.ru/api/courses/v1/courses/');
//         const json = await response.json();
//         return dispatch(receivePosts(subreddit, json))
//     }
// }