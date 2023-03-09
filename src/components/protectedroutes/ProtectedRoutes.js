import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../customUtils/Config";

const ProtectedRoutes = () => {
//   const useAuth = () => {
//     const token = localStorage.getItem("accessToken");
//     return token && token.length > 0;
//   };
  return useAuth() ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
