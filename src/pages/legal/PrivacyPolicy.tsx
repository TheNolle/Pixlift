import React from 'react'

import '../../styles/pages/legal/privacy-policy.scss'

// Components
import { Link } from 'react-router-dom'
import * as Fa6 from 'react-icons/fa6'

export default function PrivacyPolicy(): React.ReactElement {
	const updatedDate = new Date('2024-11-20').toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })

	React.useEffect(() => {
		document.title = 'Privacy Policy | Pixlift'

		document.querySelectorAll('a[href^="#"]').forEach(anchor => {
			anchor.addEventListener('click', function(e) {
				e.preventDefault()

				const href = anchor.getAttribute('href') as string
				const target = document.querySelector(href)
				if (target) target.scrollIntoView({ behavior: 'smooth' })
			})
		})
	}, [])

	return (
		<div className='page privacy-policy'>
			<header className='header'>
				<Link to='/legal' className='back-btn' aria-label='Back to legal'><Fa6.FaArrowLeft /> Back to legal</Link>
				<h1>Privacy Policy</h1>
			</header>

			<main>
				<h1>Privacy Policy</h1>
				<small>Last updated <b>{updatedDate}</b></small>

				<div>
					<p>This Privacy Policy for <b>Pixlift</b> ("we", "us", "our") describes how and why we might access, collect, store, use and/or share ("process") your personal information when you use our services ("Services"), including when you: visit our website or interact with us in any other way.</p>
					<p><b>Questions or concerns?</b> Reading this Privacy Policy will help you understand your privacy rights and choices. We are responsible for making decisions about how your personal information is processed. If you do not agree with our policies and practices, please do not use our Services.</p>
				</div>

				<section>
					<h2>Summary of Key Points</h2>
					<p className='bold'>This summary provices key points from our Privacy Policy, but you can find out more details about any of these topics by clicking the link following each key point or by using our <a href='#table-of-contents'>table of contents</a> below to find the section you are looking for.</p>
					<p><b>What personal information do we process?</b> We process personal information that you provide to us, such as your name, email address, and any other information you provide to us. Learn more about <a href='#information-collection'>what information we collect</a>.</p>
					<p><b>Do we process any sensitive personal information?</b> We do not process any sensitive personal information. Learn more about <a href='#information-collection'>what information we collect</a>.</p>
					<p><b>Do we collect any information from third parties?</b> We do not collect any information from third parties.</p>
					<p><b>How do we process your information?</b> We process your information for the purposes of responding to your inquiries and providing customer support. Learn more about <a href='#information-processing'>how we process your information</a>.</p>
					<p><b>Do we share your information with third parties?</b> We do not share your information with third parties. Learn more about <a href='#information-sharing'>when and when do we share your information</a>.</p>
					<p><b>What are your rights?</b> You have the right to access, correct, delete, and restrict the processing of your personal information. Learn more about <a href='#privacy-rights'>what are your privacy rights</a>.</p>
					<p><b>How do you exercise your rights?</b> You can exercise your rights by contacting us. Learn more about <a href='#contact-us'>how you can contact us about our Privacy Policy</a>.</p>
					<p>Want to learn more about our Privacy Policy? <a href='#table-of-contents'>Click here to jump to the table of contents</a>.</p>
				</section>

				<section id='table-of-contents'>
					<h2>Table of Contents</h2>
					<ul>
						<li><a href='#information-collection'>1. What Information Do We Collect?</a></li>
						<li><a href='#information-processing'>2. How Do We Process Your Information?</a></li>
						<li><a href='#information-sharing'>3. When and When Do We Share Your Information?</a></li>
						<li><a href='#cookies-and-tracking'>4. Do We Use Cookies and Other Tracking Technologies?</a></li>
						<li><a href='#information-transfers'>5. Do We Transfer Your Information Internationally?</a></li>
						<li><a href='#data-retention'>6. How Long Do We Retain Your Information?</a></li>
						<li><a href='#privacy-rights'>7. What Are Your Privacy Rights?</a></li>
						<li><a href='#policy-updates'>8. Do We Update Our Privacy Policy?</a></li>
						<li><a href='#contact-us'>9. How Can You Contact Us About Our Privacy Policy?</a></li>
						<li><a href='#your-privacy-rights'>10. Your Privacy Rights</a></li>
					</ul>
				</section>

				<section id='information-collection'>
					<h2>1. What Information Do We Collect?</h2>
					<div>
						<h3>Personal inormation you disclose to us</h3>
						<i><b>In Short:</b> We collect personal information that you provide to us.</i>
						<p>We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.</p>
						<p>The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect can include the following:</p>
						<ul>
							<li><b>Personal Information Provided by You.</b> We collect names; phone numbers; email addresses; and other similar information.</li>
						</ul>
					</div>
					<div>
						<h3>Information automatically collected</h3>
						<i><b>In Short:</b> Some information - such as IP address and/or browser and device characteristics - is collected automatically when you visit our Services.</i>
						<p>We automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Services, and other technical information.</p>
						<p>This information is primarily needed to maintain the security and operation of our Services, and for our internal analytics and reporting purposes.</p>
					</div>
				</section>

				<section id='information-processing'>
					<h2>2. How Do We Process Your Information?</h2>
					<div>
						<i><b>In Short:</b> We process your information for purposes based on legitimate business interests, the fulfillment of our contract with you, compliance with our legal obligations, and/or your consent.</i>
						<p>We use personal information collected via our Services for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.</p>
						<p>We indicate the specific processing grounds we rely on next to each purpose listed below.</p>
					</div>
				</section>

				<section id='information-sharing'>
					<h2>3. When and When Do We Share Your Information?</h2>
					<div>
						<i><b>In Short:</b> We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.</i>
						<p>We only share and disclose your information in the following situations:</p>
						<ul>
							<li><b>Compliance with Laws.</b> We may disclose your information where we are legally required to do so in order to comply with applicable law, governmental requests, a judicial proceeding, court order, or legal process, such as in response to a court order or a subpoena (including in response to public authorities to meet national security or law enforcement requirements).</li>
							<li><b>Vital Interests and Legal Rights.</b> We may disclose your information where we believe it is necessary to investigate, prevent, or take action regarding potential violations of our policies, suspected fraud, situations involving potential threats to the safety of any person and illegal activities, or as evidence in litigation in which we are involved.</li>
							<li><b>With your Consent.</b> We may process your data if you have given us specific consent to use your personal information in a specific purpose.</li>
						</ul>
					</div>
				</section>

				<section id='cookies-and-tracking'>
					<h2>4. Do We Use Cookies and Other Tracking Technologies?</h2>
					<div>
						<i><b>In Short:</b> We do not use cookies or other tracking technologies.</i>
						<p>We do not use cookies or other tracking technologies to collect and store your information.</p>
					</div>
				</section>

				<section id='information-transfers'>
					<h2>5. Do We Transfer Your Information Internationally?</h2>
					<div>
						<i><b>In Short:</b> We do not transfer, store, or process your information outside your country.</i>
						<p>We do not transfer, store, or process your information outside your country.</p>
					</div>
				</section>

				<section id='data-retention'>
					<h2>6. How Long Do We Retain Your Information?</h2>
					<div>
						<i><b>In Short:</b> We keep your information for as long as necessary to fulfill the purposes outlined in this Privacy Policy unless otherwise required by law.</i>
						<p>We will only keep your personal information for as long as it is necessary for the purposes set out in this Privacy Policy, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements).</p>
					</div>
				</section>

				<section id='privacy-rights'>
					<h2>7. What Are Your Privacy Rights?</h2>
					<div>
						<i><b>In Short:</b> You may review, change, or terminate your account at any time.</i>
						<p>If you are resident in the European Economic Area and you believe we are unlawfully processing your personal information, you also have the right to complain to your local data protection supervisory authority. You can find their contact details <a href='https://ec.europa.eu/newsroom/article29/items/612080'>here</a>.</p>
					</div>
				</section>

				<section id='policy-updates'>
					<h2>8. Do We Update Our Privacy Policy?</h2>
					<div>
						<i><b>In Short:</b> Yes, we will update our Privacy Policy as necessary to stay compliant with relevant laws.</i>
						<p>We may update this Privacy Policy from time to time. The updated version will be indicated by an updated "Revised" date and the updated version will be effective as soon as it is accessible. If we make material changes to this Privacy Policy, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification.</p>
					</div>
				</section>

				<section id='contact-us'>
					<h2>9. How Can You Contact Us About Our Privacy Policy?</h2>
					<div>
						<p>If you have questions or comments about this Privacy Policy, you may email us at <a href='mailto:contact@thenolle.com?subject=%5BPixlift%5D%20Inquiry%20about%20Privacy%20Policy&body=Hello%20Pixlift%20Team%2C%0D%0A%0D%0AI%20am%20reaching%20out%20to%20learn%20more%20about%20Pixlift%20and%20how%20it%20might%20support%20my%20privacy%20rights.%20Specifically%2C%20I%20am%20interested%20in%20understanding%20more%20about%20the%20following%20topics%3A%0D%0A%0D%0A-%20%5BList%20any%20specific%20topics%20here%2C%20e.g.%2C%20information%20collection%2C%20information%20processing%2C%20information%20sharing%2C%20etc.%5D%0D%0A%0D%0AThank%20you%20for%20creating%20such%20a%20robust%20platform.%20I%20look%20forward%20to%20your%20response.%0D%0A%0D%0ABest%20regards%2C%0D%0A%5BYour%20Full%20Name%5D%0D%0A%5BYour%20Position%2C%20if%20applicable%5D%0D%0A%5BYour%20Company%2FOrganization%2C%20if%20applicable%5D%0D%0A%5BContact%20Information%5D' title='Contact' target='_blank' rel='noopener noreferrer'>contact@thenolle.com</a>.</p>
					</div>
				</section>

				<section id='your-privacy-rights'>
					<h2>10. Your Privacy Rights</h2>
					<div>
						<p>You have the following privacy rights:</p>
						<ul>
							<li><b>Access.</b> You have the right to access and receive a copy of your personal information.</li>
							<li><b>Correction.</b> You have the right to request correction of your personal information if it is incorrect, incomplete, or outdated.</li>
							<li><b>Erasure.</b> You have the right to request that we erase your personal information.</li>
							<li><b>Restrict.</b> You have the right to restrict the processing of your personal information.</li>
							<li><b>Object.</b> You have the right to object to our processing of your personal information.</li>
							<li><b>Portability.</b> You have the right to be provided with a copy of the information we have on you in a structured, machine-readable, and commonly used format.</li>
							<li><b>Withdraw Consent.</b> You have the right to withdraw your consent at any time where we rely on your consent to process your personal information.</li>
						</ul>
					</div>
				</section>
			</main>
		</div>
	)
}
