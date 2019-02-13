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
    const page = fetchSelectors.LoadMoreDataPage(getState())
    const length = fetchSelectors.LoadMoreDataLength(getState()) + 10;
    dispatch(fetchSelectors.LoadMoreDataStart())
    let getBodySize = await openeduService.getCardBodySizeCheck()
    let getCard = await openeduService.getCardLoadMoreAPI({page})
    if(length <= getBodySize){
      try {
        dispatch(fetchSelectors.LoadMoreDataSuccess(getCard))

      } catch(error){
        dispatch(fetchSelectors.LoadMoreDataFailure(error))
        console.log(error)
      }      
    } else {
        dispatch(fetchSelectors.LoadMoreDataSuccess(getCard))
        dispatch(fetchSelectors.LoadMoreDataHideButton())
    }
  }
}

// export function LoadMore(){
//   return dispatch => {
//     dispatch(fetchSelectors.LoadMoreData())
//   }
// }

export function searchInput(value){
  return (dispatch) => {
    dispatch(fetchSelectors.searchInputData(value))
    // fetchSelectors.searchInputDataFilter(getState(),value)
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