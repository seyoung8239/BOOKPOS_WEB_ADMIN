import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ProtectedRoute({ isLogin, children }) {
    console.log(isLogin);
    const navigate = useNavigate();
    useEffect(() => {
        if (!isLogin) {
            console.log("nav");
            navigate("/signin");
        }
    }, [isLogin, navigate]);

    return children;
}

export default ProtectedRoute;
