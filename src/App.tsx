import React from 'react'

// Components
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// Pages
import Error from './pages/Error'
import Landing from './pages/Landing'
import LoginRegister from './pages/LoginRegister'
import About from './pages/About'
import Upload from './pages/Upload'
import Gallery from './pages/Gallery'
import Legal from './pages/legal/Legal'
import PrivacyPolicy from './pages/legal/PrivacyPolicy'
import TermsOfService from './pages/legal/TermsOfService'
import Disclaimer from './pages/legal/Disclaimer'
import QnA from './pages/legal/QnA'

export default function App(): React.ReactElement {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Landing />} />
				<Route path='/login' element={<LoginRegister mode='login' />} />
				<Route path='/register' element={<LoginRegister mode='register' />} />
				<Route path='/about' element={<About />} />
				<Route path='/upload' element={<Upload />} />
				<Route path='/gallery' element={<Gallery />} />
				<Route path='/legal' element={<Legal />} />
				<Route path='/legal/privacy-policy' element={<PrivacyPolicy />} />
				<Route path='/legal/terms-of-service' element={<TermsOfService />} />
				<Route path='/legal/disclaimer' element={<Disclaimer />} />
				<Route path='/legal/qna' element={<QnA />} />
				<Route path='*' element={<Error errorCode={404} errorMessage='Page not found' errorDetails='The page you are looking for does not exist' />} />
			</Routes>
		</BrowserRouter>
	)
}
