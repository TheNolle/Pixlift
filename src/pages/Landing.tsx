import React from 'react'

import '../styles/pages/landing.scss'

// Components
import { Link } from 'react-router-dom'
import * as Fa6 from 'react-icons/fa6'
import Modal from '../components/Modal'

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
					image='yosemite.jpg'
					title='Flexible Media Uploading'
					description='Quick and hassle-free uploads with support for diverse media formats.'
					buttons={{
						large: { label: 'Learn More', openModal: true }
					}}
					modalContent={<>
						<h2>Flexible Media Uploading</h2>
						<p>Upload images and videos seamlessly, with support for multiple file types like JPEG, PNG, GIF, MP4, and more.</p>
						<p>Our intuitive interface ensures your media is uploaded and ready for sharing or transformation in seconds.</p>
						<p>Whether you're a creator or developer, Pixlift provides a smooth, flexible uploading experience.</p>
					</>}
				/>
				<InformationCard
					categoy='Automatic Conversion'
					image='sierra.jpg'
					title='Automatic Format Conversion'
					description='Convert media into multiple formats instantly upon upload.'
					buttons={{
						large: { label: 'Try This Feature', openModal: true }
					}}
					modalContent={<>
						<h2>Automatic Format Conversion</h2>
						<p>Transform your images and videos into different formats without any hassle.</p>
						<p>With Pixlift, all format changes are handled automatically, enabling effortless sharing across platforms.</p>
						<p>Supported conversions include common formats like PNG, JPG, WebP, GIF, MP4, and more.</p>
					</>}
				/>
				<InformationCard
					categoy='Advanced Options'
					image='mojave.jpeg'
					title='On-the-Fly Resizing'
					description='Resize images dynamically via URL parameters.'
					buttons={{
						large: { label: 'Start Now', openModal: true }
					}}
					modalContent={<>
						<h2>On-the-Fly Resizing</h2>
						<p>Adjust dimensions instantly without affecting the original file.</p>
						<p>Simply append size parameters to the URL for responsive image transformations.</p>
						<p>Example: <code>https://pixlift.com/media/&#x7b;id&#x7d;?size=800x600</code></p>
					</>}
				/>
				<InformationCard
					categoy='Quality Control'
					image='yosemite.jpg'
					title='Quality Control Adjustments'
					description='Easily fine-tune fidelity and resolution for optimized media.'
					buttons={{
						large: { label: 'Learn More', openModal: true }
					}}
					modalContent={<>
						<h2>Quality Control Adjustments</h2>
						<p>Optimize your media’s fidelity and resolution using simple URL parameters.</p>
						<p>Choose between high fidelity for crisp visuals or lower fidelity for quicker load times.</p>
						<p>Example: <code>https://pixlift.com/media/&#x7b;id&#x7d;?fidelity=low&maxwidth=1200</code></p>
					</>}
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
	modalContent?: React.ReactNode
	buttons?: {
		large: { label: string, callback?: () => void, openModal?: boolean },
		small1?: { icon: React.ReactNode, callback?: () => void, openModal?: boolean },
		small2?: { icon: React.ReactNode, callback?: () => void, openModal?: boolean }
	}
}

function InformationCard(props: InformationCardProps): React.ReactElement {
	const [modalShow, setModalShow] = React.useState<boolean>(false)

	return <>
		<div className='information-card'>
			<small>{props.categoy}</small>
			<img src={props.image} alt={props.title} />
			<h1>{props.title}</h1>
			<p>{props.description}</p>
			<div className='btns'>
				{props.buttons && <>
					{props.buttons.large && <button onClick={props.buttons.large.openModal && props.modalContent ? () => setModalShow(true) : props.buttons.large.callback}>{props.buttons.large.label}</button>}
					{props.buttons.small1 && <button onClick={props.buttons.small1.openModal && props.modalContent ? () => setModalShow(true) : props.buttons.small1.callback}>{props.buttons.small1.icon}</button>}
					{props.buttons.small2 && <button onClick={props.buttons.small2.openModal && props.modalContent ? () => setModalShow(true) : props.buttons.small2.callback}>{props.buttons.small2.icon}</button>}
				</>}
			</div>
		</div>


		<Modal title='Quality Control Adjustments' show={modalShow} onClose={() => setModalShow(false)}>
			{props.modalContent}
		</Modal>
	</>
}
