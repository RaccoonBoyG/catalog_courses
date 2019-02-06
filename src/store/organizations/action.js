import openeduService from '../../services/openurfu'
import * as fetchSelectors from '../organizations/reducer'

export function fetchOrg(id) {
  return async dispatch => {
    try{
      let getOrg = await openeduService.getOrgAPI(id)
      dispatch(fetchSelectors.fetchOrgSuccess(getOrg))

    } catch(error){
      console.log(error)
    }
  }
}
