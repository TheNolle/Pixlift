import React from 'react'

// Components
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// Pages
import Home from './pages/Home'
import LoginRegister from './pages/LoginRegister'
import Error from './pages/Error'

export default function App(): React.ReactElement {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home isLoggedIn={false} />} />
				<Route path='/login' element={<LoginRegister mode='login' />} />
				<Route path='/register' element={<LoginRegister mode='register' />} />
				<Route path='*' element={<Error errorCode={404} errorMessage='Page not found' errorDetails='The page you are looking for does not exist' />} />
			</Routes>
		</BrowserRouter>
	)
}
