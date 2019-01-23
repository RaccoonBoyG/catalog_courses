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
