import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const PrivateRoute = () => {
  const {
    state,
    actions: { isTokenExpired },
  } = useAuth();
  const navigate = useNavigate();

  console.log(
    "Public routes",
    state.isAuthenticated,
    "isTokenExpired",
    isTokenExpired(),
  );

  useEffect(() => {
    if (isTokenExpired()) {
      navigate("/login");
    }
  }, [state.isAuthenticated, navigate, isTokenExpired]);

  if (isTokenExpired()) {
    return null;
  }

  return <Outlet />;
};

export default PrivateRoute;
