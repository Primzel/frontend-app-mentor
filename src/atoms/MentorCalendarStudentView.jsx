import {Calendar, momentLocalizer} from 'react-big-calendar'
import moment from 'moment'
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import './mentor-calendar.scss'
import {fetchAvailableBooking} from "../pages/book-appointment/data/thunk";
import {connect} from "react-redux";
import {useEffect} from "react";
import {useParams} from "react-router";

const localizer = momentLocalizer(moment)
const DnDCalendar = withDragAndDrop(Calendar);

const MentorCalendarStudentView = (props) => {
    // actions
    const {
        fetchAvailableBooking,
        onSelectEvent
    } = props;
    // state
    const {
        availableBookings
    } = props;

    const {courseId: courseIdFromUrl} = useParams();

    useEffect(() => {
        fetchAvailableBooking(undefined, courseIdFromUrl);
    }, []);
    const onEventDrop = (data) => {
        console.log(data)
    };
    const onEventResize = (data) => {
        console.log(data)
    };

    const onSlotSelect = (slotInfo) => {
        console.log(slotInfo);
    }

    const eventPropGetter = (event, start, end, isSelected) => {
        const backgroundColor = event.color;
        const style = {
            backgroundColor,
            borderRadius: '5px',
            opacity: event.disabled ? 0.5 : 1,
            color: 'black',
            display: 'block',
        };
        return {
            style
        }
    }
    return (
        <div className="mentor-calendar-placeholder">
            <DnDCalendar
                defaultView="week"
                localizer={localizer}
                onEventDrop={onEventDrop}
                onEventResize={onEventResize}
                events={availableBookings.map(event => ({
                    ...event,
                    start: moment(event.start_time).toDate(),
                    end: moment(event.end_time).toDate(),
                }))}
                resizable
                onSelectSlot={onSlotSelect}
                onSelectEvent={onSelectEvent}
                selectable
                eventPropGetter={eventPropGetter}
            />
        </div>
    )
}

function mapToProps(state) {
    return {
        availableBookings: state.bookAppointmentReducer.availableBookings
    }
}

export default connect(mapToProps, {
    fetchAvailableBooking
})(MentorCalendarStudentView);
