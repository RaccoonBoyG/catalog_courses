import openeduService from '../../services/openurfu'
import * as fetchSelectors from '../user/reducer'

export function fetchUserState() {
    return async (dispatch) => {
      let responseStatus = await openeduService.ResponseStatusAPI()
      dispatch(fetchSelectors.fetchUserStart())
      if(responseStatus===200) {
        try{
          let getUser = await openeduService.CheckAuthAPI()
          let getCourseEnroll = await openeduService.CheckEnrollCourseAPI()
          dispatch(fetchSelectors.fetchUserSuccess(getUser))
          dispatch(fetchSelectors.fetchCourseEnroll(getCourseEnroll))
    
        } catch(error){
          dispatch(fetchSelectors.fetchUserFailure(error))
          console.log(error)
        }
      } else if(responseStatus===401) {
        dispatch(fetchSelectors.UserUnAuth())
      }
    }
  }