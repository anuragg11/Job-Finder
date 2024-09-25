// ProtectedRoute.js
import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { auth } from '../Firebase/firebase.config'; // Make sure this path is correct

const ProtectedRoute = ({ element }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null); // Use null to indicate loading

  useEffect(() => {
    // Listen for authentication state changes
    const unsubscribe = auth.onAuthStateChanged(user => {
      setIsAuthenticated(!!user); // Convert user to boolean (true if user exists)
    });

    // Clean up the subscription on component unmount
    return () => unsubscribe();
  }, []);

  if (isAuthenticated === null) {
    // Show loading indicator while checking authentication
    return <div>Loading...</div>;
  }

  // Render the element if authenticated, otherwise redirect to login
  return isAuthenticated ? element : <Navigate to="/login" state={{ message: "Please log in to access this page." }}/>;
};

export default ProtectedRoute;
