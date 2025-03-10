import {ActionRow, Button, Form} from "@openedx/paragon";
import {Col} from "react-bootstrap";
import moment from "moment";

const CreateAppointmentForm = (props) => {
    const {
        selectedSlot,
        mode,
        onCancel,
        onSubmit,
        onDelete
    } = props;
    const {slotInfo} = selectedSlot;

    return (
        <Form onSubmit={function (e) {
            e.preventDefault();

            const formData = new FormData(e.target)

            if (onSubmit)
                onSubmit({
                    start_time: moment(formData.get("start_time")).format(),
                    end_time: moment(formData.get("end_time")).format(),
                    meeting_length: formData.get("meeting_length"),
                    action: slotInfo ? "update" : "create",
                    id: slotInfo?.id || null
                });
            return false;
        }}
        >
            {mode !== "staff" && (<>
                <Form.Row>
                    <Form.Control
                        type="text"
                        floatingLabel="Title"
                        maxLength={254}
                    />
                    <Form.Text>
                        This is the title of your meeting.
                    </Form.Text>
                </Form.Row>
                <Form.Row className={"mb-3"}>
                    <Form.Control
                        type="text"
                        floatingLabel="Description"
                        as="textarea"
                    />
                    <Form.Text>
                        Please describe the agenda of your meeting.
                    </Form.Text>
                </Form.Row>
            </>)}
            <Form.Row className={"mb-1"}>
                <Form.Group as={Col} controlId="formEventStart">
                    <Form.Control
                        floatingLabel="Start"
                        type="datetime-local"
                        name="start_time"
                        defaultValue={moment(selectedSlot?.start).format("YYYY-MM-DDTHH:mm")}
                    />
                </Form.Group>

                <Form.Group as={Col} controlId="formEventEnd">
                    <Form.Control
                        floatingLabel="End"
                        type="datetime-local"
                        name="end_time"
                        defaultValue={moment(selectedSlot?.end).format("YYYY-MM-DDTHH:mm")}
                    />
                </Form.Group>

                <Form.Group as={Col} controlId="formEventEnd">
                    <Form.Control
                        floatingLabel="Meeting Length (Minutes)"
                        type="integer"
                        name="meeting_length"
                        defaultValue={slotInfo?.meeting_length || 60}
                    />
                </Form.Group>
            </Form.Row>
            <ActionRow>
                <ActionRow.Spacer/>
                <Button variant="tertiary" onClick={onCancel}>Cancel</Button>
                {slotInfo && <Button variant="danger" onClick={onDelete}>Delete</Button>}
                <Button type={"submit"}>{slotInfo ? "Update" : "Create"}</Button>
            </ActionRow>
        </Form>
    )
}

export default CreateAppointmentForm;
