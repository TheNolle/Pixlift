import React from 'react'

import '../../styles/pages/legal/legal.scss'

// Components
import { Link } from 'react-router-dom'
import * as Fa6 from 'react-icons/fa6'

export default function Legal(): React.ReactElement {
	return (
		<div className='page legal'>
			<header className='header'>
				<Link to='/' className='back-btn' aria-label='Back to website'><Fa6.FaArrowLeft /> Back to website</Link>
				<h1>Terms of Service</h1>
			</header>

			<main>
				<Link to='/legal/disclaimer' className='legal-card'>
					<h2>Disclaimer</h2>
					<p>Read our disclaimer</p>
					<small>A disclaimer is a statement that denies something, especially responsibility.</small>
				</Link>
				<Link to='/legal/qna' className='legal-card'>
					<h2>Q&A</h2>
					<p>Frequently Asked Questions</p>
					<small>A Q&A is a list of questions and answers relating to a particular subject, especially one giving basic information for users of a website.</small>
				</Link>
				<Link to='/legal/terms-of-service' className='legal-card'>
					<h2>Terms of Service</h2>
					<p>Read our terms of service</p>
					<small>Terms of service are rules which one must agree to abide by in order to use a service.</small>
				</Link>
				<Link to='/legal/privacy-policy' className='legal-card'>
					<h2>Privacy Policy</h2>
					<p>Read our privacy policy</p>
					<small>A privacy policy is a statement or a legal document that discloses some or all of the ways a party gathers, uses, discloses, and manages a customer or client's data.</small>
				</Link>
			</main>
		</div>
	)
}
