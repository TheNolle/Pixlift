import React from 'react'

import '../styles/components/modal.scss'

// Components
import * as Fa6 from 'react-icons/fa6'

interface ModalProps {
	title: string
	children: React.ReactNode
	show: boolean
	onClose: () => void
}

export default function Modal(props: ModalProps): React.ReactElement {
	const modal = React.useRef<HTMLDivElement>(null)

	const handleClickOutside = (event: React.MouseEvent<HTMLDivElement>) => {
		if (modal.current && !modal.current.contains(event.target as Node)) {
			props.onClose()
		}
	}

	if (!props.show) return <></>
	return (
		<div className={`modal ${props.show ? 'show' : ''}`} onClick={handleClickOutside}>
			<div className='modal-content' ref={modal} onClick={(e) => e.stopPropagation()}>
				<div className='modal-header'>
					<h2>{props.title}</h2>
					<button onClick={props.onClose}><Fa6.FaXmark /></button>
				</div>
				<div className='modal-body'>{props.children}</div>
			</div>
		</div>
	)
}
