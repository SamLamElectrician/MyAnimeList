import React from 'react';
import { Route, Routes } from 'react-router-dom';
//components
import Header from './component/Header';
import Main from './component/Main';
import About from './component/About';
// import Signup from './component/Signup';
// import Login from './component/Login';
import { UserAuthContextProvider } from './context/UserAuthContext';

function App() {
	return (
		<>
			{/* <Header /> */}
			<UserAuthContextProvider>
				<Header />
				<Routes>
					{/* <Route exact path='/' element={<Login />} /> */}
					{/* <Route path='/signup' element={<Signup />} /> */}

					<Route exact path='/' element={<About />}></Route>
					<Route path='/home' element={<Main />}></Route>
				</Routes>
			</UserAuthContextProvider>
		</>
	);
}

export default App;
