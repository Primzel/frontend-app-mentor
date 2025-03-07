import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'

import './mentor-calendar.scss'

const localizer = momentLocalizer(moment)

const MentorCalendar = () => {
    return (
        <div className="mentor-calendar-placeholder">
            <Calendar
                localizer={localizer}
                startAccessor="start"
                endAccessor="end"
            />
        </div>
    );
}

export default MentorCalendar;
