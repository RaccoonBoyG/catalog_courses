import openeduService from '../../services/openurfu'
import * as fetchSelectors from '../cards/reducer'

export function fetchCards() {
  return async (dispatch) => {
    dispatch(fetchSelectors.fetchCardsStart())
    try{
      let getCard = await openeduService.getCardAPI()
      dispatch(fetchSelectors.fetchCardsSuccess(getCard))

    } catch(error){
      dispatch(fetchSelectors.fetchCardsFailure(error))
      console.log(error)
    }
  }
}

export function LoadMoreTest() {
  return async (dispatch, getState) => {
    const page = fetchSelectors.LoadMoreDataLength(getState())
    dispatch(fetchSelectors.LoadMoreDataStart())
    try{
      let getCard = await openeduService.getCardLoadMoreAPI({page})
      dispatch(fetchSelectors.LoadMoreDataSuccess(getCard))

    } catch(error){
      dispatch(fetchSelectors.LoadMoreDataFailure(error))
      console.log(error)
    }
  }
}

// export function LoadMore(){
//   return dispatch => {
//     dispatch(fetchSelectors.LoadMoreData())
//   }
// }

export function searchInput(value){
  return dispatch => {
    console.log(value)
    dispatch(fetchSelectors.searchInputData(value))
  }
}

// export function chooseViewCard(){
//   return dispatch => {
//     dispatch(fetchSelectors.chooseViewDataCard())
//   }
// }

// export function chooseViewList(){
//   return dispatch => {
//     dispatch(fetchSelectors.chooseViewDataList())
//   }
// }