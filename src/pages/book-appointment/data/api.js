import {getAuthenticatedHttpClient} from "@edx/frontend-platform/auth";
import {getConfig} from "@edx/frontend-platform";

export async function fetchAvailableBookingApi(userId, courseId) {
    const url = `${getConfig().LMS_BASE_URL}/mentoring/api/course/${courseId}/available-student-slots/`;
    return getAuthenticatedHttpClient().get(url);
}
export async function bookMentoringSlotApi(payload) {
    const url = `${getConfig().LMS_BASE_URL}/mentoring/api/v1/mentoring-events/`;
    return getAuthenticatedHttpClient().post(url, payload);
}
