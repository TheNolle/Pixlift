import React from 'react'

import '../styles/pages/landing.scss'

// Components
import { Link } from 'react-router-dom'
import * as Fa6 from 'react-icons/fa6'

export default function Landing(): React.ReactElement {
	const contentRef = React.useRef<HTMLDivElement>(null)

	React.useEffect(() => {
		document.title = 'Welcome to Pixlift'
	}, [])

	const scrollDown = () => {
		if (contentRef.current) {
			contentRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
		}
	}

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

				<button className='scroll-down' title='Scroll Down' onClick={scrollDown}>
					<Fa6.FaChevronDown />
				</button>
			</header>

			<main className='content' ref={contentRef}>
				<InformationCard
					categoy='Core Capability'
					image='mojave.jpeg'
					title='Flexible Image & Video Uploading'
					description='Quick, hassle-free uploads with support for various media formats, enabling easy sharing for all users.'
					buttons={{
						large: { label: 'Learn More' },
						small1: { icon: <Fa6.FaMagnifyingGlass /> },
						small2: { icon: <Fa6.FaUpload /> }
					}}
				/>
				<InformationCard
					categoy='Automatic Conversion'
					image='mojave.jpeg'
					title='Automatic Format Conversion'
					description='Convert images and videos into multiple formats effortlessly upon upload, allowing flexibility in sharing.'
					buttons={{
						large: { label: 'Try This Feature' },
						small1: { icon: <Fa6.FaMagnifyingGlass /> },
						small2: { icon: <Fa6.FaUpload /> }
					}}
				/>
				<InformationCard
					categoy='Advanced Options'
					image='mojave.jpeg'
					title='On-the-Fly Resizing'
					description='Adjust dimensions instantly via URL parameters to fit various display needs without altering the original file.'
					buttons={{
						large: { label: 'Start Now' },
						small1: { icon: <Fa6.FaMagnifyingGlass /> },
						small2: { icon: <Fa6.FaUpload /> }
					}}
				/>
				<InformationCard
					categoy='Quality Control'
					image='mojave.jpeg'
					title='Quality Control Adjustments'
					description='Easily adjust fidelity and resolution through URL settings, enabling sharper or more compact images as needed.'
					buttons={{
						large: { label: 'Learn More' },
						small1: { icon: <Fa6.FaMagnifyingGlass /> },
						small2: { icon: <Fa6.FaUpload /> }
					}}
				/>
			</main>
		</div>
	)
}


interface InformationCardProps {
	categoy: string
	image: string
	title: string
	description: string
	buttons?: {
		large: { label: string, callback?: () => void },
		small1?: { icon: React.ReactNode, callback?: () => void },
		small2?: { icon: React.ReactNode, callback?: () => void },
	}
}

function InformationCard(props: InformationCardProps): React.ReactElement {
	return (
		<div className='information-card'>
			<small>{props.categoy}</small>
			<img src={props.image} alt={props.title} />
			<h1>{props.title}</h1>
			<p>{props.description}</p>
			<div className='btns'>
				{props.buttons && <>
					{props.buttons.large && <button onClick={props.buttons.large.callback}>{props.buttons.large.label}</button>}
					{props.buttons.small1 && <button onClick={props.buttons.small1.callback}>{props.buttons.small1.icon}</button>}
					{props.buttons.small2 && <button onClick={props.buttons.small2.callback}>{props.buttons.small2.icon}</button>}
				</>}
			</div>
		</div>
	)
}
