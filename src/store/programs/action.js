import openeduService from '../../services/openurfu';
import * as fetchSelectors from './reducer';

export function fetchPrograms() {
  return async dispatch => {
    let getPrograms = await openeduService.getProgramsAPI();
    dispatch(fetchSelectors.fetchProgramSuccess(getPrograms));
  };
}

export function fetchAboutProgram(program) {
  return async dispatch => {
    try {
      let getAboutProgram = await openeduService.getAboutProgramItem(program);
      dispatch(fetchSelectors.fetchProgramAboutSuccess(getAboutProgram));
    } catch (error) {
      console.log(error);
    }
  };
}

export function fetchEnrollProgram(program) {
  return async (dispatch, getState) => {
    getState();
    let checkSessionID = await openeduService.checkSession();
    if (checkSessionID) {
      let getEnrollProgram = await openeduService.CheckEnrollProgramAPI(program);
      dispatch(fetchSelectors.fetchEnrollProgramSuccess(getEnrollProgram));
    }
  };
}

export function fetchAboutProgramList(program) {
  return async dispatch => {
    try {
      let getAboutProgramList = await openeduService.getAboutProgramList(program);
      dispatch(fetchSelectors.fetchProgramAboutListSuccess(getAboutProgramList));
    } catch (error) {
      console.log(error);
    }
  };
}
