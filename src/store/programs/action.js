import openeduService from '../../services/openurfu';
import * as fetchSelectors from '../programs/reducer';

export function fetchPrograms() {
  return async dispatch => {
      let getPrograms = await openeduService.getProgramsAPI()
      dispatch(fetchSelectors.fetchProgramSuccess(getPrograms))
  }
}
