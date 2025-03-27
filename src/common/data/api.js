import {getAuthenticatedHttpClient} from "@edx/frontend-platform/auth";
import {getConfig} from "@edx/frontend-platform";


export async function fetchMyRolesApi(courseId) {
    const url = `${getConfig().LMS_BASE_URL}/mentoring/api/v1/course/${courseId}/my-roles/`;
    return getAuthenticatedHttpClient().get(url);
}
