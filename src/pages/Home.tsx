import React from 'react'

import '../styles/pages/home.scss'

// Components
import { Link } from 'react-router-dom'

interface HomeProps {
	isLoggedIn: boolean
}

export default function Home(props: HomeProps): React.ReactElement {
	React.useEffect(() => {
		document.title = 'Pixlift'
	}, [])

	return (
		<div className='page home'>
			<h1>Welcome to Pixlift</h1>
			{props.isLoggedIn ? (
				<p>Explore the latest uploads and share your own creations!</p>
			) : (
				<p>Please <Link to='/login'>log in</Link> or <Link to='/register'>register</Link> to share your media.</p>
			)}
		</div>
	)
}
