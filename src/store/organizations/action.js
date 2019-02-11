import openeduService from '../../services/openurfu';
import * as fetchSelectors from '../organizations/reducer';

export function fetchOrg() {
  return async dispatch => {
      let getOrg = await openeduService.getOrgAPI()
      dispatch(fetchSelectors.fetchOrgSuccess(getOrg))
  }
}
