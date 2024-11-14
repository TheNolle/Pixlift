import React from 'react'

import '../styles/pages/landing.scss'

// Components
import { Link } from 'react-router-dom'
import * as Fa6 from 'react-icons/fa6'

export default function Landing(): React.ReactElement {
	React.useEffect(() => {
		document.title = 'Welcome to Pixlift'
	}, [])

	return (
		<div className='page landing'>
			<header className='header'>
				<div className='header-content'>
					<h1>Pixlift</h1>
					<h2>Where your images come to life</h2>

					<p>Experience seamless media hosting and sharing with Pixlift. Upload, transform, and share your images and videos effortlessly. Fast, flexible, and user-friendly.</p>

					<div className='cta'>
						<Link to='/upload' className='btn'><Fa6.FaUpload />Upload</Link>
						<i />
						<Link to='/gallery' className='btn'><Fa6.FaImages />Gallery</Link>
					</div>
				</div>

				<div className='btns'>
					<Link to='/login' title='Login'><Fa6.FaArrowRightToBracket /></Link>
					<Link to='/about' title='About'><Fa6.FaCircleInfo /></Link>
					<a href='mailto:contact@thenolle.com?subject=%5BPixlift%5D%20Inquiry%20about%20Media%20Hosting%20%26%20Sharing%20Features&body=Hello%20Pixlift%20Team%2C%0D%0A%0D%0AI%20am%20reaching%20out%20to%20learn%20more%20about%20Pixlift%20and%20how%20it%20might%20support%20my%20media%20hosting%20and%20sharing%20needs.%20Specifically%2C%20I%20am%20interested%20in%20understanding%20more%20about%20the%20following%20features%3A%0D%0A%0D%0A-%20%5BList%20any%20specific%20features%20here%2C%20e.g.%2C%20automatic%20format%20conversion%2C%20on-the-fly%20resizing%2C%20organized%20media%20albums%2C%20etc.%5D%0D%0A%0D%0AAdditionally%2C%20I%E2%80%99d%20love%20to%20know%20more%20about%20any%20customization%20options%20available%20for%20media%20transformations%20or%20any%20potential%20integrations%20with%20third-party%20services.%0D%0A%0D%0AThank%20you%20for%20creating%20such%20a%20robust%20platform.%20I%20look%20forward%20to%20your%20response.%0D%0A%0D%0ABest%20regards%2C%0D%0A%5BYour%20Full%20Name%5D%0D%0A%5BYour%20Position%2C%20if%20applicable%5D%0D%0A%5BYour%20Company%2FOrganization%2C%20if%20applicable%5D%0D%0A%5BContact%20Information%5D' title='Contact' target='_blank' rel='noopener noreferrer'><Fa6.FaEnvelope /></a>
				</div>
			</header>

			<main className='content'>
			</main>
		</div>
	)
}
