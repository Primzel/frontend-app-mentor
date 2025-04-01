import MentorCalendarStudentView from "../../atoms/MentorCalendarStudentView";
import BookMentoringEvent from "../../atoms/BookMentoringEvent";
import {useToggle} from "@openedx/paragon";
import {useParams} from "react-router";
import {useContext} from "react";
import {AppContext} from "@edx/frontend-platform/react";
import {connect} from "react-redux";
import {storeCurrentSelectedBooking} from "./data/thunk";
import {bookMentoringSlotApi} from "./data/api";

const BookAppointment = (props) => {
    const [isOpen, open, close] = useToggle(false);
    const {courseId: courseIdFromUrl} = useParams();
    const {currentSelectedBooking} = props;

    const {authenticatedUser} = useContext(AppContext);

    const {
        storeCurrentSelectedBooking,
    } = props;

    const onSelectEvent = (slotInfo) => {
        console.log(authenticatedUser)
        const bookingData = {
            "event_name": "-",
            "description": "-",
            "start_time": slotInfo.start_time,
            "end_time": slotInfo.end_time,
            "organiser": slotInfo.user,
            "guests": [
                authenticatedUser.userId
            ],
            "course_id": courseIdFromUrl
        }

        storeCurrentSelectedBooking(bookingData);
        open();
    }

    return (
        <div>
            <MentorCalendarStudentView
                onSelectEvent={onSelectEvent}
            />
            <BookMentoringEvent
                isOpen={isOpen}
                open={open}
                close={() => {
                    storeCurrentSelectedBooking(null);
                    close()
                }}
                OK={() => {

                    bookMentoringSlotApi(currentSelectedBooking).then(() => {
                        close();
                    }).catch((error) => {
                        console.log(error)
                    }).finally(() => {
                        storeCurrentSelectedBooking(null);
                        close();
                    });
                }}
            />
        </div>
    )
}

function mapPropToState(state) {
    return {
        currentSelectedBooking: state.bookAppointmentReducer.currentSelectedBooking,
    }
}


export default connect(mapPropToState, {
    storeCurrentSelectedBooking,
})(BookAppointment);
