export function fetchPostsRequest(){
    return {
      type: "FETCH_REQUEST"
    }
}
  
export function fetchPostsSuccess(payload) {
    return {
      type: "FETCH_SUCCESS",
      payload
    }
}
  
export function fetchPostsError() {
    return {
      type: "FETCH_ERROR"
    }
}

export function fetchPostsWithRedux() {
	return (dispatch) => {
  	dispatch(fetchPostsRequest());
    return fetchPosts().then(([response, json]) =>{
    	if(response.status === 200){
      	dispatch(fetchPostsSuccess(json))
      }
      else{
      	dispatch(fetchPostsError())
      }
    })
  }
}

function fetchPosts() {
  const URL = "https://jsonplaceholder.typicode.com/posts";
  return fetch(URL, { method: 'GET'})
     .then( response => Promise.all([response, response.json()]));
}

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