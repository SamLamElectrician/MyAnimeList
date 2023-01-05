import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Alert } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import GoogleButton from 'react-google-button';
import { useUserAuth } from '../context/UserAuthContext';

const Login = () => {
	//sets states for login
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const { logIn, googleSignIn } = useUserAuth();
	const navigate = useNavigate();

	//gets data for email and password
	const handleSubmit = async (e) => {
		e.preventDefault();
		setError('');
		try {
			//uses email and pass to try auth
			await logIn(email, password);
		} catch (err) {
			//sets an error message
			setError(err.message);
		} finally {
			//navigate home if works
			navigate('/home');
		}
	};
	//google docs for code
	const handleGoogleSignIn = async (e) => {
		e.preventDefault();
		try {
			//waits for the google window to close
			await googleSignIn();
			//navigate home if google log in works
			navigate('/home');
		} catch (error) {
			console.log(error.message);
		}
	};

	return (
		<>
			<div className='body'>
				<div className='p-4 box'>
					<h2 className='mb-3'>Sam's Anime List Login</h2>
					{error && <Alert>{error}</Alert>}
					<Form onSubmit={handleSubmit}>
						<Form.Group className='mb-3' controlId='formBasicEmail'>
							<Form.Control
								type='email'
								placeholder='Email address'
								onChange={(e) => setEmail(e.target.value)}
							/>
						</Form.Group>
						<Form.Group className='mb-3' controlId='formBasicPassword'>
							<Form.Control
								type='password'
								placeholder='Password'
								onChange={(e) => setPassword(e.target.value)}
							/>
						</Form.Group>
						<div className='ld-grid gap-2'>
							<Button type='Submit' variant='primary'>
								Log In
							</Button>
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
				</div>
				<div className='p-4 box mt-3 text-center'>
					<p>
						Use Anonymously or if you're a Marker <Link to='/home2'>Home</Link>
					</p>
				</div>
			</div>
		</>
	);
};

export default Login;
