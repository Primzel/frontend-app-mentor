import {Calendar, momentLocalizer} from 'react-big-calendar'
import moment from 'moment'
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";


import './mentor-calendar.scss'
import {useState} from "react";

const localizer = momentLocalizer(moment)
const DnDCalendar = withDragAndDrop(Calendar);


const MentorCalendar = () => {
    const [state, setData] = useState({
        events: [
            {
                start: moment().toDate(),
                end: moment().toDate(),
                title: "Qasim/Sajnay Call",
            }
        ],
    });
    const onEventDrop = (data) => {
        const {start, end} = data;
        state.events[0].start = start;
        state.events[0].end = end;
        setData({ events: [...state.events] });
        console.log(start,end)
    };
    const onEventResize = (data) => {
        const {start, end} = data;
        state.events[0].start = start;
        state.events[0].end = end;
        setData({ events: [...state.events] });
    };
    return (
        <div className="mentor-calendar-placeholder">
            <DnDCalendar
                defaltView="weeks"
                localizer={localizer}
                onEventDrop={onEventDrop}
                onEventResize={onEventResize}
                events={state.events}
                resizable
            />
        </div>
    );
}

export default MentorCalendar;
