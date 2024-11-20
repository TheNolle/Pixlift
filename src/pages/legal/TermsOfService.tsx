import React from 'react'

import '../../styles/pages/legal/terms-of-service.scss'

// Components
import { Link } from 'react-router-dom'
import * as Fa6 from 'react-icons/fa6'

export default function TermsOfService(): React.ReactElement {
	const updatedDate = new Date('2024-11-20').toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })

	React.useEffect(() => {
		document.title = 'Terms of Service | Pixlift'

		document.querySelectorAll('a[href^="#"]').forEach(anchor => {
			anchor.addEventListener('click', function (e) {
				e.preventDefault()

				const href = anchor.getAttribute('href') as string
				const target = document.querySelector(href)
				if (target) target.scrollIntoView({ behavior: 'smooth' })
			})
		})
	}, [])

	return (
		<div className='page terms-of-service'>
			<header className='header'>
				<Link to='/legal' className='back-btn' aria-label='Back to legal'><Fa6.FaArrowLeft /> Back to legal</Link>
				<h1>Terms of Service</h1>
			</header>

			<main>
				<h1>Terms of Service</h1>
				<small>Last updated <b>{updatedDate}</b></small>

				<section>
					<h2>Agreement to our Legal Terms</h2>
					<p>We are Nolly's Cafe ("Company", "we", "us", or "our"), a company registered in France.</p>
					<p>We operate the website <a href='https://pixlift.thenolle.com'>https://pixlift.thenolle.com</a> (the "Site") as well as any other related products and services that refer or link to these legal terms (the "Legal Terms") (collectively, the "Services").</p>
					<p>
						Pixlift is a media hosting and sharing platform designed for creators, developers, and enthusiasts. Our platform allows you to upload, transform, and share images and videos with ease.
						With Pixlift, you can upload media files in a variety of formats, convert between formats, resize images on the fly, and organize your media into albums for easy access. Pixlift is fast, secure, and easy to use, making it the perfect solution for all your media hosting and sharing needs.
						Whether you're a photographer looking to showcase your work, a developer building a website with dynamic media content, or a social media user sharing moments with friends, Pixlift has you covered. Try Pixlift today and experience the power of seamless media hosting and sharing.
					</p>
					<p>You can contact us by email at <a href='mailto:contact@thenolle.com'>contact@thenolle.com</a>.</p>
					<p>
						These Legal Terms constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and the Company, concerning your access to and use of the Services.
						You agree that by accessing the Services, you have read, understood, and agree to be bound by all of these Legal Terms. IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY.
					</p>
					<p>
						Supplemetal terms and conditions or documents that may be posted on the Services from time to time are hereby expressly incorporated herein by reference. We reserve the right, in our sole discretion, to make changes or modifications to these Legal Terms at any time and for any reason.
						We will alert you about any changes by updating the "Last updated" date of these Legal Terms, and you waive any right to receive specific notice of each such change.
						It is your responsibility to periodically review these Legal Terms to stay informed of updates. You will be subject to, and will be deemed to have been made aware of and to have accepted, the changes in any revised Legal Terms by your continued use of the Services after the date such revised Legal Terms are posted.
					</p>
					<p>
						All users who are minors in the jurisdiction in which they reside (generally under the age of 18) must have the permission of, and be directly supervised by, their parent or guardian to use the Services. If you are a minor, you must have your parent or guardian read and agree to these Legal Terms prior to you using the Services.
					</p>
					<p>
						We recommend that you print a copy of these Legal Terms for your records.
					</p>
				</section>

				<section>
					<h2>Table of Contents</h2>
					<ol>
						<li><a href='#our-services'>1. Our Services</a></li>
						<li><a href='#intellectual-property-rights'>2. Intellectual Property Rights</a></li>
						<li><a href='#user-representations'>3. User Representations</a></li>
						<li><a href='#user-registration'>4. User Registration</a></li>
						<li><a href='#prohibited-activities'>5. Prohibited Activities</a></li>
						<li><a href='#user-generated-contributions'>6. User Generated Contributions</a></li>
						<li><a href='#contribution-license'>7. Contribution License</a></li>
						<li><a href='#service-management'>8. Service Management</a></li>
						<li><a href='#privacy-policy'>9. Privacy Policy</a></li>
						<li><a href='#copyright-infringement'>10. Copyright Infringement</a></li>
						<li><a href='#term-and-termination'>11. Term and Termination</a></li>
						<li><a href='#modifications-and-interruptions'>12. Modifications and Interruptions</a></li>
						<li><a href='#governing-law'>13. Governing Law</a></li>
						<li><a href='#dispute-resolution'>14. Dispute Resolution</a></li>
						<li><a href='#corrections'>15. Corrections</a></li>
						<li><a href='#disclaimer'>16. Disclaimer</a></li>
						<li><a href='#limitation-of-liability'>17. Limitation of Liability</a></li>
						<li><a href='#indemnification'>18. Indemnification</a></li>
						<li><a href='#user-data'>19. User Data</a></li>
						<li><a href='#electronic-communications-transactions-signatures'>20. Electronic Communications, Transactions, and Signatures</a></li>
						<li><a href='#california-users-and-residents'>21. California Users and Residents</a></li>
						<li><a href='#miscellaneous'>22. Miscellaneous</a></li>
						<li><a href='#contact-us'>23. Contact Us</a></li>
					</ol>
				</section>

				<section id='our-services'>
					<h2>1. Our Services</h2>
					<p>
						The information provided on the Services is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction or country.
						Accordingly, those persons who choose to access the Services from other locations do so on their own initiative and are solely responsible for compliance with local laws, if and to the extent local laws are applicable.
					</p>
					<p>
						We make no representations or warranties that the Services are appropriate or available for use in other locations. Anyone accessing or using the Services from other locations does so on their own initiative and is responsible for compliance with local law.
					</p>
				</section>

				<section id='intellectual-property-rights'>
					<h2>2. Intellectual Property Rights</h2>
					<div>
						<h3>Our intellectual property</h3>
						<p>We are the owner or the licensee of all intellectual property rights in the Services, including, without limitation, all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Services (the "Content") and the trademarks, service marks, and logos contained therein (the "Marks").</p>
						<p>The Content is protected by copyright and other intellectual property laws (and various other intellectual property rights and unfair competition laws) and treaties in France and around the world.</p>
						<p>Except as expressly provided in these Legal Terms, no part of the Services and no Content may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.</p>
					</div>
					<div>
						<h3>Your use of our Services</h3>
						<p>
							Subject to your compliance with these Legal Terms, we grant you a limited, non-exclusive, non-transferable, non-sublicensable, revocable license to:
							<ul>
								<li>access the Services; and</li>
								<li>download, view, copy, and print the Content to which you have properly gained access,</li>
							</ul>
							solely for your personal, non-commercial use and only as permitted by the features of the Services.
						</p>
						<p>Except as set in this section or elsewhere in these Legal Terms, no part of the Services or Content may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.</p>
						<p>We reserve all rights not expressly granted to you in and to the Services, Content, and Marks.</p>
						<p>Any breach of these Intellectual Property Rights will result in immediate termination of your account and access to the Services.</p>
					</div>
					<div>
						<h3>Your submissions and contributions</h3>
						<p>Please review this section carefully before uploading any content to the Services to understand the (a) rights you give us and (b) obligations you have when you post or upload any content through the Services.</p>
						<p><b>Submissions:</b> By directly sending us any question, comment, suggestion, idea, feedback, or other information about the Services ('Submissions'), you agree to assign to us all intellectual property rights in such Submission. You agree that we shall own this Submission and be entitled to its unrestricted use and dissemination for any lawful purpose, commercial or otherwise, without acknowledgment or compensation to you.</p>
						<p><b>Contributions:</b> The Services may invite you to chat, contribute to, or participate in blogs, message boards, online forums, and other functionality during which you may create, submit, post, display, transmit, publish, distribute, or broadcast content and materials to us or through the Services, including but not limited to text, writings, video, audio, photographs, music, graphics, comments, reviews, rating suggestions, personal information, or other material ('Contributions"). Any Submission that is publicly posted shall also be treated as a Contribution.</p>
						<p>You understand that Contributions may by viewable by other users of the Services and the public, and you represent and warrant that your Contributions are original to you, do not infringe any intellectual property rights, rights of privacy or publicity, and do not violate any laws or regulations. You agree to retain all ownership rights in your Contributions, but you are required to grant us and other users of the Services a limited license to use, display, and reproduce your Contributions in connection with the Services.</p>
						<p><b>When you post Contributions, you grant us a license:</b> By posting any Contributions on or through the Services, you hereby grant us a perpetual, non-exclusive, transferable, worldwide, royalty-free license to use, copy, modify, create derivative works based upon, distribute, publicly display, publicly perform, and distribute your Contributions in connection with operating and providing the Services and Content to you and to other users. We maintain the right to delete any Contribution that we believe violates these Legal Terms or is otherwise inappropriate in our sole discretion.</p>
						<p>This license includes the right for us to make your Contributions available to other users of the Services, who may also use your Contributions subject to these Legal Terms.</p>
						<p>
							<b>You are responsible for what you post or upload:</b> By sending us any Submission or Contribution through any part of the Services or making any Contribution on the Services, you:
							<ul>
								<li>confirm that you have read and agree to these Legal Terms and will not post, send, publish, or transmit through the Services any material that violates or infringes the rights of others or that is threatening, abusive, defamatory, libelous, invasive of privacy or publicity rights, vulgar, obscene, profane, or otherwise objectionable;</li>
								<li>to the extent permitted by law, you waive any moral rights you may have in any Contribution you make on the Services;</li>
								<li>warrant that any Contribution you make on the Services does not violate any applicable law or the rights of any third party; and</li>
								<li>agree to indemnify us for any breach of this section.</li>
							</ul>
							You are solely responsible for your Contributions to the Services and you expressly agree to exonerate us from any and all responsibility and to refrain from any legal action against us regarding your Contributions.
						</p>
						<p><b>We may remove or edit your Content:</b> Although we have no obligation to screen, edit, or monitor Contributions, we may delete or remove Contributions at any time and for any reason without notice. We are not responsible for any failure or delay in removing such Contributions.</p>
					</div>
					<div>
						<h3>Copyright infringement</h3>
						<p>We respect the intellectual property rights of others. If you believe that any material available on or through the Services infringes upon any copyright you own or control, please immediately notify us using the contact information provided below.</p>
					</div>
				</section>

				<section id='user-representations'>
					<h2>3. User Representations</h2>
					<p>
						By using the Services, you represent and warrant that:
						(1) all registration information you submit will be true, accurate, current, and complete;
						(2) you will maintain the accuracy of such information and promptly update such registration information as necessary;
						(3) you have the legal capacity and you agree to comply with these Legal Terms;
						(4) you are not a minor in the jurisdiction in which you reside;
						(5) you will not access the Services through automated or non-human means, whether through a bot, script, or otherwise;
						(6) you will not use the Services for any illegal or unauthorized purpose; and
						(7) your use of the Services will not violate any applicable law or regulation.
					</p>
					<p>If you provide any information that is untrue, inaccurate, not current, or incomplete, we have the right to suspend or terminate your account and refuse any and all current or future use of the Services (or any portion thereof).</p>
				</section>

				<section id='user-registration'>
					<h2>4. User Registration</h2>
					<p>
						You may be required to register with the Services. You agree to keep your password confidential and will be responsible for all use of your account and password. We reserve the right to remove, reclaim, or change a username you select if we determine, in our sole discretion, that such username is inappropriate, obscene, or otherwise objectionable.
					</p>
				</section>

				<section id='prohibited-activities'>
					<h2>5. Prohibited Activities</h2>
					<p>You may not access or use the Services for any purpose other than that for which we make the Services available. The Services may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.</p>
					<p>
						As a user of the Services, you agree not to:
						<ul>
							<li>Systematically retrieve data or other content from the Services to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us;</li>
							<li>Make any unauthorized use of the Services, including collecting usernames and/or email addresses of users by electronic or other means for the purpose of sending unsolicited email, or creating user accounts by automated means or under false pretenses;</li>
							<li>Use the Services to advertise or offer to sell goods and services;</li>
							<li>Circumvent, disable, or otherwise interfere with security-related features of the Services, including features that prevent or restrict the use or copying of any Content or enforce limitations on the use of the Services and/or the Content contained therein;</li>
							<li>Engage in unauthorized framing of or linking to the Services;</li>
							<li>Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords;</li>
							<li>Make improper use of our support services or submit false reports of abuse or misconduct;</li>
							<li>Engage in any automated use of the system, such as using scripts to send comments or messages, or using any data mining, robots, or similar data gathering and extraction tools;</li>
							<li>Interfere with, disrupt, or create an undue burden on the Services or the networks or services connected to the Services;</li>
							<li>Attempt to impersonate another user or person or use the username of another user;</li>
							<li>Sell or otherwise transfer your profile;</li>
							<li>Use any information obtained from the Services in order to harass, abuse, or harm another person;</li>
							<li>Use the Services as part of any effort to compete with us or otherwise use the Services and/or the Content for any revenue-generating endeavor or commercial enterprise;</li>
							<li>Decipher, decompile, disassemble, or reverse engineer any of the software comprising or in any way making up a part of the Services;</li>
							<li>Attempt to bypass any measures of the Services designed to prevent or restrict access to the Services, or any portion of the Services;</li>
							<li>Harass, annoy, intimidate or threaten any of our employees or agents engaged in providing any portion of the Services to you;</li>
							<li>Delete the copyright or other proprietary rights notice from any Content;</li>
							<li>Copy or adapt the Services' software, including but not limited to Flash, PHP, HTML, JavaScript, or other code;</li>
							<li>Upload or transmit (or attempt to upload or to transmit) viruses, Trojan horses, or other material, including excessive use of capital letters and spamming (continuous posting of repetitive text), that interferes with any party's uninterrupted use and enjoyment of the Services or modifies, impairs, disrupts, alters, or interferes with the use, features, functions, operation, or maintenance of the Services;</li>
							<li>Upload or transmit (or attempt to upload or to transmit) any material that acts as a passive or active information collection or transmission mechanism, including without limitation, clear graphics interchange formats ("gifs"), 1x1 pixels, web bugs, cookies, or other similar devices (sometimes referred to as "spyware" or "passive collection mechanisms" or "pcms");</li>
							<li>Except as may be the result of standard search engine or Internet browser usage, use, launch, develop, or distribute any automated system, including without limitation, any spider, robot, cheat utility, scraper, or offline reader that accesses the Services, or using or launching any unauthorized script or other software;</li>
							<li>Disparage, tarnish, or otherwise harm, in our opinion, us and/or the Services;</li>
							<li>Use the Services in a manner inconsistent with any applicable laws or regulations.</li>
						</ul>
					</p>
				</section>

				<section id='user-generated-contributions'>
					<h2>6. User Generated Contributions</h2>
					<p>The Services may invite you to chat, contribute to, or participate in blogs, message boards, online forums, and other functionality and may provide you with the opportunity to create, submit, post, display, transmit, perform, publish, distribute, or broadcast content and materials to us or on the Services, including but not limited to text, writings, video, audio, photographs, graphics, comments, suggestions, or personal information or other material (collectively, "Contributions").</p>
					<p>
						Contributions may be viewable by other users of the Services and through third-party websites. As such, any Contributions you transmit may be treated as non-confidential and non-proprietary. When you create or make available any Contributions, you thereby represent and warrant that:
						<ul>
							<li>The creation, distribution, transmission, public display, or performance, and the accessing, downloading, or copying of your Contributions do not and will not infringe the proprietary rights, including but not limited to the copyright, patent, trademark, trade secret, or moral rights of any third party;</li>
							<li>You are the creator and owner of or have the necessary licenses, rights, consents, releases, and permissions to use and to authorize us, the Services, and other users of the Services to use your Contributions in any manner contemplated by the Services and these Legal Terms;</li>
							<li>Your Contributions are not false, inaccurate, or misleading;</li>
							<li>Your Contributions are not unsolicited or unauthorized advertising, promotional materials, pyramid schemes, chain letters, spam, mass mailings, or other forms of solicitation;</li>
							<li>Your Contributions are not obscene, lewd, lascivious, filthy, violent, harassing, libelous, slanderous, or otherwise objectionable (as determined by us);</li>
							<li>Your Contributions do not ridicule, mock, disparage, intimidate or abuse anyone;</li>
							<li>Your Contributions do not advocate the violent overthrow of any government or incite, encourage or threaten physical harm against another;</li>
							<li>Your Contributions do not violate any applicable law, regulation, or rule;</li>
							<li>Your Contributions do not violate the privacy or publicity rights of any third party;</li>
							<li>Your Contributions do not contain any material that solicits personal information from anyone under the age of 18 or exploits people under the age of 18 in a sexual or violent manner;</li>
							<li>Your Contributions do not violate any federal or state law concerning child pornography, or otherwise intended to protect the health or well-being of minors;</li>
							<li>Your Contributions do not include any offensive comments that are connected race, national origin, gender, sexual preference, or physical handicap.</li>
						</ul>
						Any use of the Services in violation of the foregoing violates these Legal Terms and may result in, among other things, termination or suspension of your rights to use the Services.
					</p>
				</section>

				<section id='contribution-license'>
					<h2>7. Contribution License</h2>
					<p>By posting your Contributions to any part of the Services, you automatically grant, and you represent and warrant that you have the right to grant, to us an unrestricted, unlimited, irrevocable, perpetual, non-exclusive, transferable, royalty-free, fully-paid, worldwide right, and license to host, use, copy, reproduce, disclose, sell, resell, publish, broadcast, retitle, archive, store, cache, publicly perform, publicly display, reformat, translate, transmit, excerpt (in whole or in part), and distribute such Contributions (including, without limitation, your image and voice) for any purpose, commercial, advertising, or otherwise, and to prepare derivative works of, or incorporate into other works, such Contributions, and grant and authorize sublicenses of the foregoing.</p>
					<p>This license includes the right to make your Contributions available to other users of the Services, who may also use your Contributions subject to these Legal Terms.</p>
					<p>We do not assert any ownership over your Contributions. You retain full ownership of all of your Contributions and any intellectual property rights or other proprietary rights associated with your Contributions. We are not liable for any statements or representations in your Contributions provided by you in any area on the Services. You are solely responsible for your Contributions to the Services and you expressly agree to exonerate us from any and all responsibility and to refrain from any legal action against us regarding your Contributions.</p>
					<p>We have the right, in our sole and absolute discretion, to (1) edit, redact, or otherwise change any Contributions; (2) re-categorize any Contributions to place them in more appropriate locations on the Services; and (3) pre-screen or delete any Contributions at any time and for any reason, without notice. We have no obligation to monitor your Contributions.</p>
				</section>

				<section id='service-management'>
					<h2>8. Service Management</h2>
					<p>
						We reserve the right, but not the obligation, to:
						<ul>
							<li>Monitor the Services for violations of these Legal Terms;</li>
							<li>Take appropriate legal action against anyone who, in our sole discretion, violates the law or these Legal Terms, including without limitation, reporting such user to law enforcement authorities;</li>
							<li>In our sole discretion and without limitation, refuse, restrict access to, limit the availability of, or disable (to the extent technologically feasible) any of your Contributions or any portion thereof;</li>
							<li>In our sole discretion and without limitation, notice, or liability, to remove from the Services or otherwise disable all files and content that are excessive in size or are in any way burdensome to our systems;</li>
							<li>Otherwise manage the Services in a manner designed to protect our rights and property and to facilitate the proper functioning of the Services.</li>
						</ul>
					</p>
				</section>

				<section id='privacy-policy'>
					<h2>9. Privacy Policy</h2>
					<p>We care about data privacy and security. Please review our <Link to='/legal/privacy-policy'>Privacy Policy</Link>. By using the Services, you agree to be bound by our Privacy Policy, which is incorporated into these Legal Terms.</p>
				</section>

				<section id='copyright-infringement'>
					<h2>10. Copyright Infringement</h2>
					<p>We respect the intellectual property rights of others. If you believe that any material available on or through the Services infringes upon any copyright you own or control, please immediately notify us using the contact information provided below.</p>
				</section>

				<section id='term-and-termination'>
					<h2>11. Term and Termination</h2>
					<p>These Legal Terms shall remain in full force and effect while you use the Services. WITHOUT LIMITING ANY OTHER PROVISION OF THESE LEGAL TERMS, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SERVICES (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY REASON OR FOR NO REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY REPRESENTATION, WARRANTY, OR COVENANT CONTAINED IN THESE LEGAL TERMS OR OF ANY APPLICABLE LAW OR REGULATION.</p>
					<p>If we determine, in our sole discretion, that your use of the Services is in breach of these Legal Terms, we have the right to terminate your access to the Services immediately without notice.</p>
				</section>

				<section id='modifications-and-interruptions'>
					<h2>12. Modifications and Interruptions</h2>
					<p>We reserve the right to change, modify, or remove the contents of the Services at any time or for any reason at our sole discretion without notice. However, we have no obligation to update any information on our Services. We also reserve the right to modify or discontinue all or part of the Services without notice at any time. We will not be liable to you or any third party for any modification, price change, suspension, or discontinuance of the Services.</p>
					<p>We cannot guarantee the Services will be available at all times. We may experience hardware, software, or other problems or need to perform maintenance related to the Services, resulting in interruptions, delays, or errors. We reserve the right to change, revise, update, suspend, discontinue, or otherwise modify the Services at any time or for any reason without notice to you. You agree that we have no liability whatsoever for any loss, damage, or inconvenience caused by your inability to access or use the Services during any downtime or discontinuance of the Services.</p>
				</section>

				<section id='governing-law'>
					<h2>13. Governing Law</h2>
					<p>These Legal Terms and your use of the Services are governed by and construed in accordance with the laws of France applicable to agreements made and to be entirely performed within France, without regard to its conflict of law principles. Nolly's Cafe and you agree to submit to the exclusive jurisdiction of the courts located within France to resolve any legal matter arising from these Legal Terms.</p>
				</section>

				<section id='dispute-resolution'>
					<h2>14. Dispute Resolution</h2>
					<div>
						<h3>Informal Negotiations</h3>
						<p>To expedite resolution and control the cost of any dispute, controversy, or claim related to these Legal Terms ("Dispute"), you and Nolly's Cafe agree to first attempt to negotiate any Dispute informally for at least thirty (30) days before initiating any arbitration or court proceeding.</p>
					</div>
					<div>
						<h3>Binding Arbitration</h3>
						<p>
							If you and Nolly's Cafe are unable to resolve a Dispute through informal negotiations, all claims arising from these Legal Terms (including the Privacy Policy) will be finally and exclusively resolved by binding arbitration. Any election to arbitrate by one party will be final and binding on the other. YOU UNDERSTAND THAT ABSENT THIS PROVISION, YOU WOULD HAVE THE RIGHT TO SUE IN COURT AND HAVE A JURY TRIAL. The arbitration will
							be commenced and conducted under the Commercial Arbitration Rules of the American Arbitration Association ("AAA") and, where appropriate, the AAA's Supplementary Procedures for Consumer Related Disputes ("AAA Consumer Rules"), both of which are available at the AAA website www.adr.org. Your arbitration fees and your share of arbitrator compensation will be governed by the AAA Rules. The arbitration may be conducted in person, through the submission of documents, by phone, or online. The arbitrator will make a decision in writing, but need not provide a statement of reasons unless requested by a party. The arbitrator must follow applicable law, and any award may be challenged if the arbitrator fails to do so. Except as otherwise provided in these Legal Terms, you and Nolly's Cafe may litigate in court to compel arbitration, stay proceedings pending arbitration, or to confirm, modify, vacate, or enter judgment on the award entered by the arbitrator.
						</p>
					</div>
					<div>
						<h3>Restrictions</h3>
						<p>You and Nolly's Cafe agree that any arbitration will be limited to the Dispute between Nolly's Cafe and you individually. To the full extent permitted by law, (1) no arbitration will be joined with any other proceeding; (2) there is no right or authority for any Dispute to be arbitrated on a class-action basis or to utilize class action procedures; and (3) there is no right or authority for any Dispute to be brought in a purported representative capacity on behalf of the general public or any other persons.</p>
					</div>
					<div>
						<h3>Exceptions to Informal Negotiations and Arbitration</h3>
						<p>Either you or Nolly's Cafe may assert claims, if they qualify, in small claims court in France. Either party may bring a lawsuit solely for injunctive relief to stop unauthorized use or abuse of the Services, or intellectual property infringement (for example, trademark, trade secret, copyright, or patent rights) without first engaging in arbitration or the informal dispute-resolution process described above.</p>
					</div>
					<div>
						<h3>Changes to this Section</h3>
						<p>Nolly's Cafe will provide thirty (30) days' notice of any changes affecting the substance of this section by posting on the Services or sending you an email.</p>
					</div>
				</section>

				<section id='corrections'>
					<h2>15. Corrections</h2>
					<p>There may be information on the Services that contains typographical errors, inaccuracies, or omissions that may relate to the Services, including descriptions, pricing, availability, and various other information. We reserve the right to correct any errors, inaccuracies, or omissions and to change or update the information on the Services at any time, without prior notice.</p>
				</section>

				<section id='disclaimer'>
					<h2>16. Disclaimer</h2>
					<p>Read our <Link to='/legal/disclaimer'>Disclaimer</Link>.</p>
				</section>

				<section id='limitation-of-liability'>
					<h2>17. Limitation of Liability</h2>
					<p>Read our <Link to='/legal/disclaimer'>Disclaimer</Link>.</p>
				</section>

				<section id='indemnification'>
					<h2>18. Indemnification</h2>
					<p>You agree to indemnify and hold Nolly's Cafe harmless from any demands, loss, liability, claims, or expenses (including attorneys' fees), made against them by any third party due to, or arising out of, or in connection with your use of the Services or any of the Services offered on the Services.</p>
				</section>

				<section id='user-data'>
					<h2>19. User Data</h2>
					<p>We will maintain certain data that you transmit to the Services for the purpose of managing the performance of the Services, as well as data relating to your use of the Services. Although we perform regular routine backups of data, you are solely responsible for all data that you transmit or that relates to any activity you have undertaken using the Services.</p>
					<p>You agree that we shall have no liability to you for any loss or corruption of any such data, and you hereby waive any right of action against us arising from any such loss or corruption of such data.</p>
				</section>

				<section id='electronic-communications-transactions-signatures'>
					<h2>20. Electronic Communications, Transactions, and Signatures</h2>
					<p>Visiting the Services, sending us emails, and completing online forms constitute electronic communications. You consent to receive electronic communications, and you agree that all agreements, notices, disclosures, and other communications we provide to you electronically, via email and on the Services, satisfy any legal requirement that such communication be in writing.</p>
					<p>You hereby agree to the use of electronic signatures, contracts, orders, and other records, and to electronic delivery of notices, policies, and records of transactions initiated or completed by us or via the Services. You hereby waive any rights or requirements under any statutes, regulations, rules, ordinances, or other laws in any jurisdiction which require an original signature or delivery or retention of non-electronic records, or to payments or the granting of credits by any means other than electronic means.</p>
				</section>

				<section id='california-users-and-residents'>
					<h2>21. California Users and Residents</h2>
					<p>If any complaint with us is not satisfactorily resolved, you can contact the Complaint Assistance Unit of the Division of Consumer Services of the California Department of Consumer Affairs in writing at 1625 North Market Blvd., Suite N 112, Sacramento, California 95834 or by telephone at (800) 952-5210.</p>
				</section>

				<section id='miscellaneous'>
					<h2>22. Miscellaneous</h2>
					<p>
						These Legal Terms and any policies or operating rules posted by us on the Services or in respect to the Services constitute the entire agreement and understanding between you and us. Our failure to exercise or enforce any right or provision of these Legal Terms shall not operate as a waiver of such right or provision.
						These Legal Terms operate to the fullest extent permissible by law. We may assign any or all of our rights and obligations to others at any time. We shall not be responsible or liable for any loss, damage, delay, or failure to act caused by any cause beyond our reasonable control.
						If any provision or part of a provision of these Legal Terms is determined to be unlawful, void, or unenforceable, that provision or part of the provision is deemed severable from these Legal Terms and does not affect the validity and enforceability of any remaining provisions.
						There is no joint venture, partnership, employment or agency relationship created between you and us as a result of these Legal Terms or use of the Services. You agree that these Legal Terms will not be construed against us by virtue of having drafted them.
						You hereby waive any and all defenses you may have based on the electronic form of these Legal Terms and the lack of signing by the parties hereto to execute these Legal Terms.
					</p>
				</section>

				<section id='contact-us'>
					<h2>23. Contact Us</h2>
					<p>In order to resolve a complaint regarding the Services or to receive further information regarding use of the Services, please contact us at:</p>
					<p>Nolly's Cafe</p>
					<p>Paris, France</p>
					<p>
						<a href='mailto:contact@thenolle.com'>contact@thenolle.com</a>
					</p>
				</section>
			</main>
		</div>
	)
}
