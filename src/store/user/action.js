import openeduService from "../../services/openurfu";
import * as fetchSelectors from "../user/reducer";

export function fetchUserState() {
  return async dispatch => {
    let responseStatus = await openeduService.ResponseStatusAPI();

    dispatch(fetchSelectors.fetchUserStart());
    if (responseStatus === 200) {
      try {
        let getUser = await openeduService.CheckAuthAPI();
        // let getCourseEnroll = await openeduService.CheckEnrollCourseAPI()
        // console.log(getUser, getCourseEnroll);
        dispatch(fetchSelectors.fetchUserSuccess(getUser));
        // dispatch(fetchSelectors.fetchCourseEnroll(getCourseEnroll))
      } catch (error) {
        dispatch(fetchSelectors.fetchUserFailure(error));
        console.log(error);
      }
    } else if (responseStatus === 401) {
      dispatch(fetchSelectors.UserUnAuth());
    }
  };
}

export function fetchEnrollState(username, id) {
  return async dispatch => {
    let responseStatus = await openeduService.ResponseStatusAPI();
    if (responseStatus === 200) {
      try {
        let getCourseEnroll = await openeduService.CheckEnrollCourseAPI(
          username,
          id
        );
        
        let filterCourseEnroll = getCourseEnroll.some(item => {
          return item.is_active;
        });

        dispatch(fetchSelectors.fetchCourseEnroll(filterCourseEnroll, getCourseEnroll));
      } catch (error) {
        console.log(error);
      }
    } else if (responseStatus === 401) {
      dispatch(fetchSelectors.UserUnAuth());
    }
  };
}


export function clearLoadingUser(){
  return async dispatch => {
    dispatch(fetchSelectors.clearLoadingUserSelector())
  }
}