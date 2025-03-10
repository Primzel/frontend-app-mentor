import 'core-js/stable';
import 'regenerator-runtime/runtime';

import {
    APP_INIT_ERROR, APP_READY, subscribe, initialize,
} from '@edx/frontend-platform';
import {AppProvider, ErrorPage} from '@edx/frontend-platform/react';
import ReactDOM from 'react-dom';

import Header from '@edx/frontend-component-header';
import FooterSlot from '@openedx/frontend-slot-footer';
import messages from './i18n';
import LandingPage from './pages/LandingPage';

import './index.scss';
import {store} from "./store";
import {Routes,Route} from "react-router";

subscribe(APP_READY, () => {
    ReactDOM.render(
        <AppProvider store={store}>
            <Routes>
                <Route path={"/course/:courseId/appointments"} element={<>
                    <Header/>
                    <LandingPage/>
                    <FooterSlot/>
                </>}></Route>
            </Routes>
        </AppProvider>,
        document.getElementById('root'),
    );
});

subscribe(APP_INIT_ERROR, (error) => {
    ReactDOM.render(<ErrorPage message={error.message}/>, document.getElementById('root'));
});

initialize({
    messages,
});
