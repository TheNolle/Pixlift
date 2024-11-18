import React from 'react'

import '../styles/pages/gallery.scss'

// Components
import { Link } from 'react-router-dom'
import * as Fa6 from 'react-icons/fa6'

// Mock Data
const mockMedia = [
	{ id: 1, type: 'image', url: 'https://via.placeholder.com/150', name: 'Sample Image 1' },
	{ id: 2, type: 'video', url: 'https://www.w3schools.com/html/mov_bbb.mp4', name: 'Sample Video 1' },
	{ id: 3, type: 'image', url: 'https://via.placeholder.com/150', name: 'Sample Image 2' },
	{ id: 4, type: 'video', url: 'https://www.w3schools.com/html/mov_bbb.mp4', name: 'Sample Video 2' },
	{ id: 5, type: 'image', url: 'https://via.placeholder.com/150', name: 'Sample Image 3' },
]

export default function Gallery(): React.ReactElement {
	return (
		<div className='page gallery'>
		</div>
	)
}
