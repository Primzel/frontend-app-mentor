import MentorCalendar from "../../atoms/MentorCalendar";
import './mentor-schedule.scss'
import {connect} from "react-redux";
import CreateEventSlotModal from "../../atoms/CreateEventSlotModal";
import {useParams} from "react-router";
import {fetchAppointmentSlots} from "./data/thunks";
import {useContext, useEffect} from "react";
import {AppContext} from "@edx/frontend-platform/react";


const MentorSchedule = (props) => {
    const {courseId: courseIdFromUrl} = useParams();

    const {authenticatedUser} = useContext(AppContext);


    const {fetchAppointmentSlots} = props;

    useEffect(() => {
        if (authenticatedUser)
            fetchAppointmentSlots(authenticatedUser.userId, courseIdFromUrl);
    }, []);

    return (
        <div className="mentor-calendar-container">
            <MentorCalendar/>
            <CreateEventSlotModal title={"Create appointment slots."} mode="staff" courseId={courseIdFromUrl}/>
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        courseId: state.mentorScheduleReducer.courseId,
        createEventModalState: state.mentorScheduleReducer.createEventModalState,
    };
};

export default connect(mapStateToProps, {
    fetchAppointmentSlots
})(MentorSchedule);
