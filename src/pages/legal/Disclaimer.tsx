import React from 'react'

import '../../styles/pages/legal/disclaimer.scss'

// Components
import { Link } from 'react-router-dom'
import * as Fa6 from 'react-icons/fa6'

export default function Disclaimer(): React.ReactElement {
	const updatedDate = new Date('2024-11-20').toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })

	React.useEffect(() => {
		document.title = 'Disclaimer | Pixlift'
	}, [])

	return (
		<div className='page disclaimer'>
			<header className='header'>
				<Link to='/legal' className='back-btn' aria-label='Back to legal'><Fa6.FaArrowLeft /> Back to legal</Link>
				<h1>Disclaimer</h1>
			</header>

			<main>
				<h1>Disclaimer</h1>
				<small>Last updated <b>{updatedDate}</b></small>

				<h2>Website Disclaimer</h2>
				<p>
					The information provided by <b>Pixlift</b> ("we", "us", "our") on <a href='https://pixlift.thenolle.com'>https://pixlift.thenolle.com</a> (the "Site") is for general informational purposes only.
					All information on the Site is provided in good faith, is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site.
					UNDER NO CIRCOMSTANCES SHALL WE HAVE ANY LIABILITY TO YOU FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF THE SITE OR RELIANCE ON ANY INFORMATION PROVIDED ON THE SITE.
					YOUR USE OF THE SITE AND YOUR RELIANCE ON ANY INFORMATION ON THE SITE IS SOLELY AT YOUR OWN RISK.
				</p>
			</main>
		</div>
	)
}
