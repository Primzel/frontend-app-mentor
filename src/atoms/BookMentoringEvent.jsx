import {ActionRow, AlertModal, Button} from "@openedx/paragon";
import {CheckCircle} from "@openedx/paragon/icons";

const BookMentoringEvent = ({isOpen, open, close, OK}) => {

    return (<AlertModal
        title="Request Appointment Booking!"
        isOpen={isOpen}
        onClose={close}
        variant="success"
        icon={CheckCircle}
        footerNode={(
            <ActionRow>
                <Button variant="tertiary" onClick={close}>Dismiss</Button>
                <Button variant="success" onClick={OK}>Confirm</Button>
            </ActionRow>
        )}
        isOverflowVisible={false}
    >
        <p>
            You are about to book an appointment with a mentor. Please confirm your booking.
        </p>
    </AlertModal>);
}
export default BookMentoringEvent;
