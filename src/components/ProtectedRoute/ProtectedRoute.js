import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRouteElement = ({ isLoggedIn, element }) => {
  return isLoggedIn ? element : <Navigate to="/" replace />;
};

export default ProtectedRouteElement;
