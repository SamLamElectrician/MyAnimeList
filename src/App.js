import React from 'react';
import { Route, Routes } from 'react-router-dom';
//components
import Header from './component/Header';
import Main from './component/Main';
import About from './component/About';

function App() {
	return (
		<>
			{/* <Header /> */}

			<Header />
			<Routes>
				{/* <Route exact path='/' element={<Login />} /> */}
				{/* <Route path='/signup' element={<Signup />} /> */}

				<Route exact path='/' element={<About />}></Route>
				<Route path='/home' element={<Main />}></Route>
			</Routes>
		</>
	);
}

export default App;
