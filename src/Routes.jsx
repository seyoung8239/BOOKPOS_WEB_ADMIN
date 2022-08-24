import { Routes as RouteWrapper, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Inquiry from "./pages/Inquiry";
import News from "./pages/News";
import CreateNews from "./pages/CreateNews";
import EditNews from "./pages/EditNews";

function Routes() {
    return (
        <>
            <RouteWrapper>
                <Route path="/" element={<Dashboard />} />
                <Route path="/inquiry" element={<Inquiry />} />
                <Route path="/news" element={<News />} />
                <Route path="/create_news" element={<CreateNews />} />
                <Route path="/edit_news/:id" element={<EditNews />} />
            </RouteWrapper>
        </>
    );
}

export default Routes;
