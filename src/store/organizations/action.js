import openeduService from '../../services/openurfu';
import * as fetchSelectors from './reducer';

export function fetchOrg() {
  return async dispatch => {
      let getOrg = await openeduService.getOrgAPI()
      dispatch(fetchSelectors.fetchOrgSuccess(getOrg))
  }
}

export function fetchAboutOrg(organizations) {
  return async dispatch => {
    try{
      let getAboutProgram = await openeduService.getAboutOrgItem(organizations)
      dispatch(fetchSelectors.fetchOrganizationAboutSuccess(getAboutProgram))

    } catch(error){
      console.log(error)
    }
  }
}


export function fetchAboutOrgList(organizations) {
  return async (dispatch,getState) => {
    try{
      let getAboutProgramList = await openeduService.getAboutOrgList(organizations)
      dispatch(fetchSelectors.fetchOrganizationAboutList(getAboutProgramList))
    } catch(error){
      console.log(error)
    }
  }
}
