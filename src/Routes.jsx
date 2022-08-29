import { Routes as RouteWrapper, Route } from "react-router-dom";

import ProtectedRoute from "./ProtectedRoute";
import Inquiry from "./pages/Inquiry";
import News from "./pages/News";
import CreateNews from "./pages/CreateNews";
import EditNews from "./pages/EditNews";
import SignIn from "./pages/SignIn";
import useAuth from "./hooks/useAuth";

function Routes() {
    const { isLogin } = useAuth();
    return (
        <>
            <RouteWrapper>
                <Route path="/" element={<SignIn />} />
                <Route path="/signin" element={<SignIn />} />
                <Route
                    path="/inquiry"
                    element={
                        <ProtectedRoute isLogin={isLogin}>
                            <Inquiry />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/news"
                    element={
                        <ProtectedRoute isLogin={isLogin}>
                            <News />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/create_news"
                    element={
                        <ProtectedRoute isLogin={isLogin}>
                            <CreateNews />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/edit_news/:id"
                    element={
                        <ProtectedRoute isLogin={isLogin}>
                            <EditNews />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="*"
                    element={
                        <div
                            style={{
                                fontSize: 60,
                                textAlign: "center",
                                marginTop: "40px",
                            }}
                        >
                            404 Page Not Found
                        </div>
                    }
                />
            </RouteWrapper>
        </>
    );
}

export default Routes;
