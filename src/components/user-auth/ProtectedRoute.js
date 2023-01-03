import { Navigate } from "react-router-dom";
import useAuth from "./useAuth";

export default function ProtectedRoute({children}) {
    const { token } = useAuth();

    if (!token.isLoggedIn) {
        return <Navigate to="/" replace />;
    }

    return children;
}