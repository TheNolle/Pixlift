import React from 'react'

import '../../styles/pages/legal/legal.scss'

// Components
import { Link } from 'react-router-dom'

export default function Legal(): React.ReactElement {
	return (
		<div className='page legal'>
			<h1>Legal</h1>
			<Link to='/legal/privacy-policy'>Privacy Policy</Link>
			<Link to='/legal/terms-of-service'>Terms of Service</Link>
			<Link to='/legal/disclaimer'>Disclaimer</Link>
			<Link to='/legal/qna'>QnA</Link>
		</div>
	)
}
