import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Alert } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { useUserAuth } from '../context/UserAuthContext';

const Signup = () => {
	//sets stateful variables
	const [email, setEmail] = useState('');
	const [error, setError] = useState('');
	const [password, setPassword] = useState('');
	const { signUp, logIn } = useUserAuth();
	let navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError('');
		try {
			//uses email and password to try to set up login from firebase
			await signUp(email, password);
			navigate('/home');
		} catch (err) {
			setError(err.message);
		} finally {
			await logIn(email, password);
			navigate('/home');
		}
	};

	return (
		<>
			<div className='body'>
				<div className='p-4 box'>
					<h2 className='mb-3'>Sam's Anime List Sign Up</h2>
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
						<div className='signUpButton'>
							<Button type='Submit'>Sign up</Button>
						</div>
					</Form>
				</div>
				<div className='p-4 box mt-3 text-center'>
					Already have an account? <Link to='/'>Log In</Link>
				</div>
			</div>
		</>
	);
};

export default Signup;
