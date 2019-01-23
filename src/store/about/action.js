import openeduService from '../../services/openurfu'
import * as fetchSelectors from '../about/reducer'

export function fetchAbout() {
  return async dispatch => {
    try{
      let getAbout = await openeduService.getAboutCourseAPI()
      dispatch(fetchSelectors.fetchAboutSuccess(getAbout))

    } catch(error){
      console.log(error)
    }
  }
}
