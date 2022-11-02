import React from 'react';
import { Navigate } from 'react-router-dom';
import { useUserAuth } from '../context/UserAuthContext';

// takes in as argument whatever children component is passed in
function ProtectedRoute({ children }) {
	let { user } = useUserAuth();
	//if user isnt logged it, will return to the page of login
	if (!user) {
		return <Navigate to='/login' />;
	} else {
		//would return to homepage
		return children;
	}
}

export default ProtectedRoute;
