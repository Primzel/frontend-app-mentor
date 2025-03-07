import MentorCalendar from "../../atoms/MentorCalendar";
import moment from 'moment'
import './mentor-schedule.scss'
import {connect} from "react-redux";
import {createEvent} from "./data/thunks";

const MentorSchedule = (props) => {
    const {
        createEvent,
    } = props
    createEvent({
        start: moment().toDate().valueOf(),
        end: moment().add(1,'hours').toDate().valueOf(),
        title: "Qasim/Sajnay Call",
    });
    return (
        <div className="mentor-calendar-container">
            <MentorCalendar/>
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        courseId: state.mentorScheduleReducer.courseId,
    };
};

export default connect(mapStateToProps, {
    createEvent
})(MentorSchedule);
