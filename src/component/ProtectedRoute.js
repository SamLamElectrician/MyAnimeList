import React from 'react';
import { Navigate } from 'react-router-dom';
import { useUserAuth } from '../context/UserAuthContext';

// takes in as argument whatever children component is passed in
function ProtectedRoute({ children }) {
	let { user } = useUserAuth();

	if (!user) {
		return <Navigate to='/login' />;
	} else {
		return children;
	}
}

export default ProtectedRoute;
