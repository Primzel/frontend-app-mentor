import {Tab, Tabs} from "@openedx/paragon";
import './landing-page.scss'
import MentorSchedule from "./mentor-schedule/MentorSchedule";
import ManageMentor from "./manage-mentor/ManageMentor";
import {connect} from "react-redux";
import {fetchMyRoles, fetchMentorList} from "../common/data/thunks";
import {useEffect} from "react";
import {useParams} from "react-router";
import {usePermission} from "../common/context/PermissionContext";

const LandingPage = (props) => {
    // Add actions to props here
    const {
        fetchMyRoles,
        fetchMentorList
    } = props;
    const {courseId: courseIdFromUrl} = useParams();


    useEffect(() => {
        fetchMyRoles(courseIdFromUrl);
    }, []);

    const {
        hasAppPermission,
    } = usePermission();

    useEffect(() => {
        if (hasAppPermission()) {
            fetchMentorList(courseIdFromUrl);
        }
    }, [hasAppPermission]);

    return <div className="mentor-app-landing-page">
        {hasAppPermission() && <Tabs
            variant="tabs"
            defaultActiveKey="mentor-magement"
            id="uncontrolled-tab-example"
        >
            <Tab eventKey="mentor-magement" title="Manage Mentors" className="mentor-management">
                <ManageMentor/>
            </Tab>

            <Tab eventKey="mentor-schedule" title="Schedule" className="mentor-schedule">
                <MentorSchedule/>
            </Tab>
        </Tabs>}
    </div>
}

function mapStateToProps(state) {
    return {
        myRolesInfo: state.commonReducer.myRolesInfo,
    }
}

export default connect(
    mapStateToProps, {
        // Add any actions you want to map to props here
        fetchMyRoles,
        fetchMentorList,
    }
)(LandingPage);
