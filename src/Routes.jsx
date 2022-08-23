import { Routes as RouteWrapper, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Inquiry from "./pages/Inquiry";
import News from "./pages/News";

function Routes() {
    return (
        <>
            <RouteWrapper>
                <Route path="/" element={<Dashboard />} />
                <Route path="/inquiry" element={<Inquiry />} />
                <Route path="/news" element={<News />} />
            </RouteWrapper>
        </>
    );
}

export default Routes;
