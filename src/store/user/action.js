import openeduService from '../../services/openurfu'
import * as fetchSelectors from '../user/reducer'

export function fetchUserState() {
  return async dispatch => {
    try{
      let getAbout = await openeduService.CheckAuthAPI()
      console.log(getAbout)
      dispatch(fetchSelectors.fetchUserSuccess(getAbout))

    } catch(error){
      console.log(error)
    }
  }
}