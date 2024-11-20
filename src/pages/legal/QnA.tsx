import React from 'react'

import '../../styles/pages/legal/qna.scss'

// Components
import { Link } from 'react-router-dom'
import * as Fa6 from 'react-icons/fa6'

const data: { question: string, answer: string }[] = [
	{ question: 'What is Pixlift?', answer: 'Pixlift is a media hosting and sharing platform designed for creators, developers, and enthusiasts. Our platform allows you to upload, transform, and share images and videos with ease.' },
	{ question: 'Is Pixlift free to use?', answer: 'Yes, Pixlift is completely free to use. You can upload, transform, and share media without any cost.' },
	{ question: 'What types of media can I upload?', answer: 'You can upload images and videos in various formats. We support most common image formats like PNG, JPEG, and GIF, as well as video formats like MP4, MOV, and AVI.' },
	{ question: 'How is my data secured?', answer: 'We take the security and privacy of your data very seriously. All media uploaded to Pixlift is encrypted and stored securely on our servers. We do not share your data with any third parties without your consent.' },
	{ question: 'Can I delete my media?', answer: 'Yes, you can delete your media at any time. Simply go to your profile and select the media you want to delete. Once deleted, the media will be permanently removed from our servers.' },
	{ question: 'Can I embed media from Pixlift on my website?', answer: 'Yes, you can embed media from Pixlift on your website or blog. Simply copy the embed code provided on the media page and paste it into your website code.' },
	{ question: 'Do you have an API?', answer: 'Not yet, but we are working on it. We plan to release an API in the future that will allow developers to integrate Pixlift into their applications and services.' },
	{ question: 'How can I contact Pixlift?', answer: 'You can contact us via email at contact@thenolle.com. We are always happy to hear from our users and help with any questions or issues.' },
	{ question: 'How can I report abuse or copyright infringement?', answer: 'If you encounter any abuse or copyright infringement on Pixlift, please contact us immediately at contact@thenolle.com. We take all reports seriously and will take appropriate action.' },
	{ question: 'Can I request a feature?', answer: 'Yes, we welcome feedback and feature requests from our users. If you have an idea for a new feature or improvement, please let us know at contact@thenolle.com. We are always looking for ways to improve Pixlift and make it better for our users.' },
]

export default function QnA(): React.ReactElement {
	React.useEffect(() => {
		document.title = 'Q&A | Pixlift'
	}, [])

	return (
		<div className='page qna'>
			<header className='header'>
				<Link to='/legal' className='back-btn' aria-label='Back to legal'><Fa6.FaArrowLeft /> Back to legal</Link>
				<h1>Questions and Answers</h1>
			</header>

			<main>
				{data.map((item, index) => (
					<details key={index} className='qna-item'>
						<summary tabIndex={0} aria-expanded='false' aria-controls={`answer-${index}`}>Q: {item.question}</summary>
						<p id={`answer-${index}`}>A: {item.answer}</p>
					</details>
				))}
			</main>
		</div>
	)
}
