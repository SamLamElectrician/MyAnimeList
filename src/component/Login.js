import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Alert } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import GoogleButton from 'react-google-button';
import { useUserAuth } from '../context/UserAuthContext';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const { logIn, googleSignIn } = useUserAuth();
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError('');
		try {
			await logIn(email, password);
			navigate('/home');
		} catch (err) {
			setError(err.message);
		}
	};

	const handleGoogleSignIn = async (e) => {
		e.preventDefault();
		try {
			await googleSignIn();
			navigate('/home');
		} catch (error) {
			console.log(error.message);
		}
	};
	// Log in as Anonymous

	return (
		<>
			<div className='bodyLogin'>
				<div className='p-4 box'>
					<h2 className='mb-3'>Sam's Anime List Login</h2>
					{error && <Alert>{error}</Alert>}
					<Form onSubmit={handleSubmit}>
						<Form.Group className='formInput' controlId='formBasicEmail'>
							<Form.Control
								type='email'
								placeholder='Email address'
								onChange={(e) => setEmail(e.target.value)}
							/>
						</Form.Group>
						<Form.Group className='formInput' controlId='formBasicPassword'>
							<Form.Control
								type='password'
								placeholder='Password'
								onChange={(e) => setPassword(e.target.value)}
							/>
						</Form.Group>
						<div className='loginButton'>
							<Button type='Submit'>Log In</Button>
						</div>
					</Form>
					<hr />
					<div>
						<GoogleButton
							className='g-btn'
							type='dark'
							onClick={handleGoogleSignIn}
						/>
					</div>
				</div>
				<div className='p-4 box mt-3 text-center'>
					<p>
						Don't have an account? <Link to='/signup'>Sign up</Link>
					</p>
					<p>
						Don't have an account? <Link to='/home2'>Home</Link>
					</p>
				</div>
			</div>
		</>
	);
};

export default Login;
