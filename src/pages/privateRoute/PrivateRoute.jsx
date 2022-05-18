import { useAuth } from "context/authContext";
import { Navigate, useLocation, Outlet } from "react-router-dom";

function PrivateRoute() {
  const {
    authState: { encodedToken },
  } = useAuth();
  const location = useLocation();

  return encodedToken ? (
    <Outlet />
  ) : (
    <Navigate to="/signin" state={{ from: location.pathname }} />
  );
}

export { PrivateRoute };
