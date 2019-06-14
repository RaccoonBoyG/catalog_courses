import openeduService from '../../services/openurfu';
import * as fetchSelectors from './reducer';

export function fetchPrograms() {
  return async dispatch => {
      let getPrograms = await openeduService.getProgramsAPI()
      dispatch(fetchSelectors.fetchProgramSuccess(getPrograms))
  }
}

export function fetchAboutProgram(program) {
  return async dispatch => {
    try{
      let getAboutProgram = await openeduService.getAboutProgramItem(program)
      dispatch(fetchSelectors.fetchProgramAboutSuccess(getAboutProgram))

    } catch(error){
      console.log(error)
    }
  }
}


export function fetchAboutProgramList() {
  return async (dispatch,getState) => {
    try{
      let getAboutProgramList = await openeduService.getAboutProgramList()
      dispatch(fetchSelectors.fetchProgramAboutListSuccess(getAboutProgramList))
    } catch(error){
      console.log(error)
    }
  }
}