import openeduService from '../../services/openurfu'
import * as fetchSelectors from '../cards/reducer'

export function fetchCards() {
  return async dispatch => {
    try{
      let getCard = await openeduService.getCardAPI()
      dispatch(fetchSelectors.fetchProductsSuccess(getCard))

    } catch(error){
      console.log(error)
    }
    
  }
}

// export function fetchPages(){
//   return dispatch => {
//       dispatch(fetchProductsPages());
//   }

// }

// export function fetchProducts() {
//   return async dispatch => {
//     let res = await fetch(ROOT_URL);
//     let json = await res.json();
//     dispatch(fetchProductsSuccess(json.results));
//     return json.results;
    // return fetch(ROOT_URL)
    //   .then(handleErrors)
    //   .then(res => res.json())
    //   .then(json => {
    //     dispatch(fetchProductsSuccess(json.results));
    //     return json.results;
    //   })
    //   .catch(error => dispatch(fetchProductsFailure(error)));
//   };
// }
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