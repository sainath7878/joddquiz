import { useAuth } from "context/index";
import { Navigate, Outlet, useLocation } from "react-router-dom";

function RestrictAuth() {
  const {
    authState: { encodedToken },
  } = useAuth();
  const location = useLocation();
  const from = location?.state?.from || "/";

  return encodedToken ? <Navigate to={from} replace={true} /> : <Outlet />;
}

export { RestrictAuth };
