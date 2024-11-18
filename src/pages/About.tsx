import React from 'react'

import '../styles/pages/about.scss'

// Components
import { Link } from 'react-router-dom'
import * as Fa6 from 'react-icons/fa6'

export default function About(): React.ReactElement {
	return (
		<div className='page about'>
			<Link to='/' className='back-btn'><Fa6.FaArrowLeft /> Back to website</Link>

			<div className='container'>
				<div className='left'>
					<Section
						sectionTitle='Features'
						sectionContent={<ul>
							<li><b>Flexible Uploading:</b> Easily upload images and videos.</li>
							<li><b>Automatic Format Conversion:</b> Convert between popular formats (e.g., JPG, PNG, GIF, MP4).</li>
							<li><b>On-the-Fly Resizing:</b> Adjust image dimensions dynamically using URL parameters.</li>
							<li><b>Quality Controls:</b> Fine-tune fidelity and resolution as needed.</li>
							<li><b>Organized Albums:</b> Manage media in sharable albums for better accessibility.</li>
							<li><b>Database Storage:</b> Media is stored directly in the database for simplicity and security.</li>
						</ul>}
						collapsible
					/>
					<Section
						sectionTitle='Legal Information'
						sectionContent={<>
							<Section
								sectionTitle='Privacy Policy'
								sectionContent="Pixlift is committed to protecting your privacy. We collect and store only the information necessary to provide our services. We do not share your personal information with third parties without your consent. By using Pixlift, you agree to our use of cookies and data collection practices."
								collapsible
							/>
							<Section
								sectionTitle='Terms of Service'
								sectionContent={<>
									<p>By using Pixlift, you agree to the following terms:</p>
									<ul>
										<li>You will not upload any illegal or inappropriate content.</li>
										<li>You will not use Pixlift for any malicious or harmful purposes.</li>
										<li>You will not attempt to hack, abuse, or exploit our services.</li>
										<li>You will not redistribute or sell any media hosted on Pixlift.</li>
										<li>You will not hold Pixlift liable for any damages or losses.</li>
										<li>You will not use Pixlift to violate any laws or regulations.</li>
										<li>You will not use Pixlift to infringe on any copyrights.</li>
										<li>You will not use Pixlift to harass, bully, or intimidate others.</li>
									</ul>
								</>}
								collapsible
							/>
							<Section
								sectionTitle='Copyright and Owndership'
								sectionContent="All media uploaded to Pixlift remains the property of the original creator. Pixlift claims no ownership over any media uploaded by users. By uploading media to Pixlift, you grant Pixlift the right to store, process, and share your media files as needed to provide our services. You also grant other users the right to view and share your media files as permitted by Pixlift's privacy settings."
								collapsible
							/>
							<Section
								sectionTitle='DMCA Policy'
								sectionContent={<p>
									Pixlift respects the rights of copyright holders. If you believe that your work has been
									copied in a way that constitutes copyright infringement, please contact us at <a
										href='mailto:contact@thenolle.com?subject=%5BPixlift%5D%20DMCA%20Takedown%20Request&body=Hello%20Pixlift%20Team%2C%0D%0A%0D%0AI%20am%20writing%20to%20submit%20a%20DMCA%20takedown%20request%20for%20the%20following%20content%20hosted%20on%20Pixlift%3A%0D%0A%0D%0A-%20%5BURL%20of%20the%20content%20to%20be%20removed%5D%0D%0A%0D%0AThe%20content%20in%20question%20violates%20my%20rights%20as%20the%20owner%20of%20the%20following%20work%3A%0D%0A%0D%0A-%20%5BDescription%20of%20your%20work%20and%20how%20it%20is%20being%20used%20without%20permission%5D%0D%0A%0D%0AThe%20infringing%20content%20should%20be%20removed%20as%20soon%20as%20possible%20to%20avoid%20further%20violations%20of%20my%20rights.%20Please%20let%20me%20know%20if%20you%20require%20any%20additional%20information%20from%20me%20to%20process%20this%20request.%0D%0A%0D%0AThank%20you%20for%20your%20prompt%20attention%20to%20this%20matter.%0D%0A%0D%0ABest%20regards%2C%0D%0A%5BYour%20Full%20Name%5D%0D%0A%5BYour%20Position%2C%20if%20applicable%5D%0D%0A%5BYour%20Company%2FOrganization%2C%20if%20applicable%5D%0D%0A%5BContact%20Information%5D'
										target='_blank'
										rel='noopener noreferrer'
										children='contact@thenolle.com'
									/>. We will respond to all legitimate requests within 24 hours and take appropriate action to remove infringing content as needed.
								</p>}
								collapsible
							/>
							<Section
								sectionTitle='Disclaimer'
								sectionContent="Pixlift is provided 'as is' without any warranties of any kind, either express or implied. Pixlift is not responsible for any damages or losses resulting from the use of our services. Pixlift reserves the right to modify, suspend, or discontinue our services at any time without notice. Pixlift also reserves the right to deny access to our services to any user at our discretion."
								collapsible
							/>
						</>}
						collapsible
					/>
					<Section
						sectionTitle='How It Works'
						sectionContent={<ul>
							<li><b>Upload Media:</b> Drag and drop your files or use the upload button.</li>
							<li><b>URL Transformations:</b> Modify your media directly through URL parameters (e.g., resizing, converting formats).</li>
							<li><b>Secure Sharing:</b> Share links to specific files or albums with privacy controls.</li>
							<li><b>Real-Time Processing:</b> All media transformations happen instantly using high-performance tools.</li>
						</ul>}
						collapsible
					/>
					<Section
						sectionTitle='FAQ (Frequently Asked Questions)'
						sectionContent={<>
							<Section
								sectionTitle='Q: What is Pixlift?'
								sectionContent="A: Pixlift is a media hosting and sharing platform designed for creators, developers, and enthusiasts. Our platform allows you to upload, transform, and share images and videos with ease."
							/>
							<Section
								sectionTitle='Q: How do I upload media to Pixlift?'
								sectionContent="A: You can upload media to Pixlift by dragging and dropping files onto the upload area or by clicking the upload button and selecting files from your device."
							/>
							<Section
								sectionTitle='Q: Is Pixlift free to use?'
								sectionContent="A: Yes, Pixlift is completely free to use. You can upload, transform, and share media without any cost."
							/>
							<Section
								sectionTitle='Q: What types of media can I upload to Pixlift?'
								sectionContent="A: You can upload images (e.g., JPG, PNG, GIF) and videos (e.g., MP4) to Pixlift. We support a wide range of formats and file types."
							/>
							<Section
								sectionTitle='Q: How is my data secured?'
								sectionContent="A: Pixlift takes security seriously. We use encryption, firewalls, and other security measures to protect your data. We also do not share your personal information with third parties."
							/>
							<Section
								sectionTitle='Q: What happens to my media after I upload it?'
								sectionContent="A: Your media is stored securely in our database. You can access, transform, and share your media as needed. You retain ownership of your media at all times."
							/>
						</>}
						collapsible
					/>
					<Section
						sectionTitle='Privacy Settings'
						sectionContent={<>
							<p>Privacy is important to us. Pixlift offers the following privacy settings:</p>
							<ul>
								<li><b>Public Media:</b> Uploaded content is visible to everyone in the public gallery.</li>
								<li><b>Private Media:</b> Uploaded content is only accessible via direct link.</li>
								<li><b>Password-Protected Media:</b> Uploaded content requires a password to view.</li>
							</ul>
						</>}
						collapsible
					/>
					<Section
						sectionTitle='Contact Us'
						sectionContent={<p>
							For any questions, concerns, or feedback, please contact us at <a
								href='mailto:contact@thenolle.com?subject=%5BPixlift%5D%20Inquiry%20about%20Media%20Hosting%20%26%20Sharing%20Features&body=Hello%20Pixlift%20Team%2C%0D%0A%0D%0AI%20am%20reaching%20out%20to%20learn%20more%20about%20Pixlift%20and%20how%20it%20might%20support%20my%20media%20hosting%20and%20sharing%20needs.%20Specifically%2C%20I%20am%20interested%20in%20understanding%20more%20about%20the%20following%20features%3A%0D%0A%0D%0A-%20%5BList%20any%20specific%20features%20here%2C%20e.g.%2C%20automatic%20format%20conversion%2C%20on-the-fly%20resizing%2C%20organized%20media%20albums%2C%20etc.%5D%0D%0A%0D%0AAdditionally%2C%20I%E2%80%99d%20love%20to%20know%20more%20about%20any%20customization%20options%20available%20for%20media%20transformations%20or%20any%20potential%20integrations%20with%20third-party%20services.%0D%0A%0D%0AThank%20you%20for%20creating%20such%20a%20robust%20platform.%20I%20look%20forward%20to%20your%20response.%0D%0A%0D%0ABest%20regards%2C%0D%0A%5BYour%20Full%20Name%5D%0D%0A%5BYour%20Position%2C%20if%20applicable%5D%0D%0A%5BYour%20Company%2FOrganization%2C%20if%20applicable%5D%0D%0A%5BContact%20Information%5D'
								title='Contact'
								target='_blank'
								rel='noopener noreferrer'
								children='contact@thenolle.com'
							/>. For business inquiries, please email us at <a
								href='mailto:business-contact@thenolle.com?subject=%5BPixlift%5D%20Business%20Inquiry%20for%20Media%20Hosting%20%26%20Sharing%20Platform&body=Hello%20Pixlift%20Team%2C%0D%0A%0D%0AI%20am%20reaching%20out%20to%20discuss%20potential%20business%20opportunities%20with%20Pixlift%2C%20including%20partnerships%2C%20sponsorships%2C%20and%20collaborations.%20I%20believe%20that%20Pixlift%20and%20my%20organization%20could%20benefit%20from%20working%20together%20to%20achieve%20mutual%20goals.%0D%0A%0D%0AI%20look%20forward%20to%20discussing%20this%20further%20with%20you.%0D%0A%0D%0ABest%20regards%2C%0D%0A%5BYour%20Full%20Name%5D%0D%0A%5BYour%20Position%2C%20if%20applicable%5D%0D%0A%5BYour%20Company%2FOrganization%2C%20if%20applicable%5D%0D%0A%5BContact%20Information%5D'
								title='Business Inquiry'
								target='_blank'
								rel='noopener noreferrer'
								children='business-contact@thenolle.com'
							/>.
						</p>}
						collapsible
					/>
					<Section
						sectionTitle='Team'
						sectionContent={<>
							<p><b>Project Lead:</b> Nolly Berrebi</p>
							<p><b>Lead Developer:</b> Nolly Berrebi</p>
							<p><b>Designer:</b> Nolly Berrebi</p>
						</>}
						collapsible
					/>
				</div>

				<div className='right'>
					<Section
						sectionTitle='About Pixlift'
						sectionContent={<>
							<p>Pixlift is a media hosting and sharing platform designed for creators, developers, and enthusiasts. Our platform allows you to upload, transform, and share images and videos with ease.</p>
							<p>With Pixlift, you can upload media files in a variety of formats, convert between formats, resize images on the fly, and organize your media into albums for easy access. Pixlift is fast, secure, and easy to use, making it the perfect solution for all your media hosting and sharing needs.</p>
							<p>Whether you're a photographer looking to showcase your work, a developer building a website with dynamic media content, or a social media user sharing moments with friends, Pixlift has you covered. Try Pixlift today and experience the power of seamless media hosting and sharing.</p>
						</>}
					/>
				</div>
			</div>
		</div>
	)
}

interface SectionProps {
	sectionTitle: string
	sectionContent: React.ReactNode
	collapsible?: boolean
}

function Section(props: SectionProps): React.ReactElement {
	return props.collapsible ? (
		<details>
			<summary>{props.sectionTitle}</summary>
			{props.sectionContent}
		</details>
	) : (
		<section>
			<h1>{props.sectionTitle}</h1>
			{props.sectionContent}
		</section>
	)
}
