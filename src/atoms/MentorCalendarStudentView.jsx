import {Calendar, momentLocalizer} from 'react-big-calendar'
import moment from 'moment'
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import './mentor-calendar.scss'

const localizer = momentLocalizer(moment)
const DnDCalendar = withDragAndDrop(Calendar);

const MentorCalendarStudentView = () => {
    const slots = []
    const onEventDrop = (data) => {
        console.log(data)
    };
    const onEventResize = (data) => {
        console.log(data)
    };

    const onSlotSelect = (slotInfo) => {
        console.log(slotInfo);
    }

    const onSelectEvent = (slotInfo) => {
        console.log(slotInfo);
    }
    return (
        <div className="mentor-calendar-placeholder">
            <DnDCalendar
                defaultView="week"
                localizer={localizer}
                onEventDrop={onEventDrop}
                onEventResize={onEventResize}
                events={slots.map(event => ({
                    ...event,
                    start: moment(event.start_time).toDate(),
                    end: moment(event.end_time).toDate(),
                }))}
                resizable
                onSelectSlot={onSlotSelect}
                onSelectEvent={onSelectEvent}
                selectable
            />
        </div>
    )
}

export default MentorCalendarStudentView
