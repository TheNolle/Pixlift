import React from 'react'

import '../styles/pages/error.scss'

// Components
import { Link } from 'react-router-dom'

interface ErrorProps {
	errorCode: number
	errorMessage: string
	errorDetails?: string
}

export default function Error(props: ErrorProps): React.ReactElement {
	return (
		<div className='page error'>
			<div className='error-content'>
				<h1>{props.errorCode}</h1>
				<span>{props.errorMessage}</span>
				{props.errorDetails && <small>{props.errorDetails}</small>}
				<Link to='/'>Back to Home</Link>
			</div>
		</div>
	)
}
