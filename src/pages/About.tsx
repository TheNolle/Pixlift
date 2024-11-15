import React from 'react'

import '../styles/pages/about.scss'

export default function About(): React.ReactElement {
	return (
		<div className='page about'>
			<div className='container'>
				<div className='left'>
					<section>
						<h3>A Look into Navigation in Web Design</h3>
						<small>Sed posuere consectetur est at lobortis. Cum sociis natoque penatibus et magnis.</small>
					</section>
					<section>
						<h3>Rapid UX Research at Google</h3>
						<small>Sed posuere consectetur est at lobortis. Cum sociis natoque.</small>
					</section>
				</div>

				<div className='right'>
					<section>
						<h1>Smile, breathe ang go slowly.</h1>
						<p>Sed posuere consectetur est at lobortis. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</section>
				</div>
			</div>
		</div>
	)
}
