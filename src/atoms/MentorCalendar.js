import {Calendar, momentLocalizer} from 'react-big-calendar'
import moment from 'moment'
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import './mentor-calendar.scss'
import {connect} from "react-redux";
import {updateEvent} from "../pages/mentor-schedule/data/thunks";

const localizer = momentLocalizer(moment)
const DnDCalendar = withDragAndDrop(Calendar);


const MentorCalendar = ({events, updateEvent}) => {
    const onEventDrop = (data) => {
        const {start, end, event} = data;
        updateEvent({...event, start: moment(start).toDate().valueOf(), end: moment(end).toDate().valueOf()});
    };
    const onEventResize = (data) => {
        const {start, end, event} = data;

        updateEvent({...event, start: moment(start).toDate().valueOf(), end: moment(end).toDate().valueOf()});
    };


    return (
        <div className="mentor-calendar-placeholder">
            <DnDCalendar
                localizer={localizer}
                onEventDrop={onEventDrop}
                onEventResize={onEventResize}
                events={events.map(event => ({
                    ...event,
                    start: moment(event.start).toDate(),
                    end: moment(event.end).toDate(),
                }))}
                resizable
            />
        </div>
    );
}

const mapStateToProps = (state) => {
    const {
        mentorScheduleReducer
    } = state;
    return {
        events: mentorScheduleReducer.events,
    };
};

export default connect(mapStateToProps, {
    updateEvent,
})(MentorCalendar);
