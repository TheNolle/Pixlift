import React from 'react'
import { useLocation } from 'react-router-dom'

import '../styles/pages/login-register.scss'

// Components
import { Link } from 'react-router-dom'
import * as Fa6 from 'react-icons/fa6'

interface LoginRegisterProps {
	mode: 'login' | 'register'
}

export default function LoginRegister(props: LoginRegisterProps): React.ReactElement {
	const location = useLocation()

	React.useEffect(() => {
		document.title = props.mode === 'login' ? 'Login | Pixlift' : 'Register | Pixlift'
	}, [location.pathname])

	return (
		<div className='page login-register'>
			<div className='left'>
				<Link to='/'>Back to website <Fa6.FaArrowRight /></Link>

				<div className='content'>
					<h1>Welcome to Pixlift</h1>
					<p>
						{props.mode === 'login'
							? 'Log in to your account to access your photos and settings.'
							: 'Create an account to start uploading your photos and share them with the world.'
						}
					</p>
				</div>
			</div>

			<div className='right'>
				<h1>{props.mode === 'login' ? 'Log In' : 'Create an account'}</h1>
				{props.mode === 'login'
					? <span>Don't have an account? <Link to='/register'>Sign up</Link></span>
					: <span>Already have an account? <Link to='/login'>Log in</Link></span>
				}
				<form>
					<input type='text' placeholder='Username' required />
					<input type='password' placeholder='Enter your password' required />
					{props.mode === 'register' && <input type='password' placeholder='Confirm your password' required />}
					<button type='submit'>{props.mode === 'login' ? 'Log In' : 'Create account'} <Fa6.FaArrowRightFromBracket /></button>
				</form>
			</div>
		</div>
	)
}
