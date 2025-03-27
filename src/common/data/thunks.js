import {fetchMyRolesApi} from "./api";
import {setMyRolesInfo} from "./slice";

export function fetchMyRoles(courseId) {
    return async function (dispatch) {
        fetchMyRolesApi(courseId).then(({data}) => {
            dispatch(setMyRolesInfo(data));
        });
    }
}
