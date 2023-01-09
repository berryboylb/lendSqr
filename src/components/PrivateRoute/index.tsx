import React from "react";
import { useAppSelector } from "../../hooks";
import { Navigate } from "react-router-dom";

type Props = {
  children?: React.ReactNode;
};

const PrivateRoute: React.FC<Props> = ({ children }) => {
  const { isAuthenticated, loading } = useAppSelector((state) => state.auth);
  return <>{!isAuthenticated && !loading ? <Navigate to="/" /> : children}</>;
};

export default PrivateRoute;
