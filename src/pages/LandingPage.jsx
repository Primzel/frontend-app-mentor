import {Tab, Tabs} from "@openedx/paragon";
import './landing-page.scss'
import MentorSchedule from "./mentor-schedule/MentorSchedule";
import ManageMentor from "./manage-mentor/ManageMentor";

const LandingPage = () => {
    return <div className="mentor-app-landing-page">
        <Tabs
            variant="tabs"
            defaultActiveKey="mentor-magement"
            id="uncontrolled-tab-example"
        >
            <Tab eventKey="mentor-schedule" title="Schedule" className="mentor-schedule">
                <MentorSchedule/>
            </Tab>

            <Tab eventKey="mentor-magement" title="Manage Mentors" className="mentor-management">
                <ManageMentor/>
            </Tab>

        </Tabs>
    </div>
}

export default LandingPage;
