import {StandardModal} from "@openedx/paragon";
import {connect} from "react-redux";
import {createEvent, openCreateEventModal} from "../pages/mentor-schedule/data/thunks";
import CreateAppointmentForm from "./CreateAppointmentForm";
import {AppContext} from "@edx/frontend-platform/react";
import {useContext} from "react";

const CreateEventSlotModal = (props) => {
    const {
        courseId,
        createEvent,
        createEventModalState,
        mode,
        openCreateEventModal,
        title,
    } = props;

    const {authenticatedUser} = useContext(AppContext);

    const close = () => {
        openCreateEventModal(false)
    }

    const onSubmit = (slot) => {
        slot.user=authenticatedUser.userId;
        createEvent(slot).then(() => {
            close();
        }).catch((error) => {
            console.log(error)
        })
    }

    return (<StandardModal
        title={title}
        isOpen={createEventModalState.open}
        onClose={close}
    >
        <CreateAppointmentForm
            selectedSlot={createEventModalState}
            mode={mode}
            courseId={courseId}
            onCancel={close}
            onSubmit={onSubmit}
        />
    </StandardModal>)
}

const mapStateToProps = (state) => {
    const {
        mentorScheduleReducer
    } = state;
    return {
        events: mentorScheduleReducer.events, createEventModalState: mentorScheduleReducer.createEventModalState,
    };
};

export default connect(mapStateToProps, {
    openCreateEventModal,
    createEvent
})(CreateEventSlotModal);
