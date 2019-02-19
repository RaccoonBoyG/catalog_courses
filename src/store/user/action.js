import openeduService from '../../services/openurfu'
import * as fetchSelectors from '../user/reducer'

export function fetchUserState() {
    return async (dispatch) => {
      dispatch(fetchSelectors.fetchUserStart())
      try{
        let getUser = await openeduService.CheckAuthAPI()
        dispatch(fetchSelectors.fetchUserSuccess(getUser))
  
      } catch(error){
        dispatch(fetchSelectors.fetchUserFailure(error))
        console.log(error)
      }
    }
  }