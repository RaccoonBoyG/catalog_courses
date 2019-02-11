import openeduService from '../../services/openurfu'
import * as fetchSelectors from '../cards/reducer'

export function fetchCards() {
  return async dispatch => {
    try{
      let getCard = await openeduService.getCardAPI()
      dispatch(fetchSelectors.fetchCardsSuccess(getCard))

    } catch(error){
      console.log(error)
    }
  }
}

export function LoadMore(){
  return dispatch => {
    dispatch(fetchSelectors.LoadMoreData())
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

export function searchInput(value){
  return dispatch => {
    console.log(value)
    dispatch(fetchSelectors.searchInputData(value))
  }
}