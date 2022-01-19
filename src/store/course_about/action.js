import openeduService from "../../services/openurfu";
import * as fetchSelectors from "../course_about/reducer";
// import { browserHistory } from 'react-router'

export function fetchAbout(id) {
  return async dispatch => {
    try {
      let getAbout = await openeduService.getAboutItem(id);
      dispatch(fetchSelectors.fetchAboutSuccess(getAbout));
    } catch (error) {
      this.history.push("/404");
    }
  };
}
