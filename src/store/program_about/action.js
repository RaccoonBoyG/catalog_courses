import openeduService from '../../services/openurfu'
import * as fetchSelectors from '../program_about/reducer'

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
