import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ProtectedRoute({ isLogin, children }) {
    const navigate = useNavigate();
    useEffect(() => {
        if (isLogin === null) {
            navigate("/admin/signin");
        }
    }, [isLogin, navigate]);

    return children;
}

export default ProtectedRoute;
