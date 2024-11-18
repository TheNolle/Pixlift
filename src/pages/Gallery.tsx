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
	const [previewMedia, setPreviewMedia] = React.useState<{ type: string; url: string } | null>(null)
	const [isSearchOpen, setIsSearchOpen] = React.useState<boolean>(false)
	const [searchQuery, setSearchQuery] = React.useState<string>('')
	const [mediaFilter, setMediaFilter] = React.useState<'all' | 'images' | 'videos'>('all')
	const [filteredMedia, setFilteredMedia] = React.useState<typeof mockMedia>(mockMedia)

	const searchInputRef = React.useRef<HTMLInputElement>(null)

	React.useEffect(() => {
		document.title = 'Gallery | Pixlift'

		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				setPreviewMedia(null)
				setIsSearchOpen(false)
			} else if ((event.ctrlKey && event.key === 'k') || event.key === '/') {
				event.preventDefault()
				setIsSearchOpen(true)
				setTimeout(() => searchInputRef.current?.focus(), 100)
			}
		}
		document.addEventListener('keydown', handleKeyDown)
		return () => document.removeEventListener('keydown', handleKeyDown)
	}, [])

	React.useEffect(() => {
		const query = searchQuery.toLowerCase()
		const filteredBySearch = mockMedia.filter((media) => media.name.toLowerCase().includes(query))
		const filteredByType = mediaFilter === 'all' ? filteredBySearch : filteredBySearch.filter((media) => mediaFilter === 'images' ? media.type === 'image' : media.type === 'video')
		setFilteredMedia(filteredByType)
	}, [searchQuery, mediaFilter])

	const handleZoomToggle = (media: { type: string; url: string } | null) => {
		setPreviewMedia(media)
	}

	React.useEffect(() => {
		if (previewMedia) {
			document.body.style.overflow = 'hidden'
			document.title = previewMedia.type === 'image' ? '(Image Preview) Gallery | Pixlift' : '(Video Preview) Gallery | Pixlift'
		} else {
			document.body.style.overflow = 'auto'
			document.title = 'Gallery | Pixlift'
		}
	}, [previewMedia])

	const closeSearch = () => {
		setFilteredMedia(mockMedia)
		setIsSearchOpen(false)
		setSearchQuery('')
	}

	const searchEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === 'Enter' && filteredMedia.length === 1) {
			setPreviewMedia({ type: filteredMedia[0].type, url: filteredMedia[0].url })
			closeSearch()
			setSearchQuery('')
		}
	}

	React.useEffect(() => {
		if (isSearchOpen) {
			document.body.style.overflow = 'hidden'
			document.title = '(Search) Gallery | Pixlift'
		} else {
			document.body.style.overflow = 'auto'
			document.title = 'Gallery | Pixlift'
		}
	}, [isSearchOpen])

	return (
		<div className='page gallery'>
			<header className='header'>
				<Link to='/' className='back-btn'><Fa6.FaArrowLeft /> Back to website</Link>
				<h1>Gallery</h1>
				<button className='search-btn' onClick={() => { setIsSearchOpen(true); setTimeout(() => searchInputRef.current?.focus(), 100) }} title='CTRL + K or /'><Fa6.FaMagnifyingGlass /> Search</button>
			</header>

			<div className='filters'>
				<button className={`filter-btn ${mediaFilter === 'all' ? 'active' : ''}`} onClick={() => setMediaFilter('all')}>All</button>
				<button className={`filter-btn ${mediaFilter === 'images' ? 'active' : ''}`} onClick={() => setMediaFilter('images')}>Images</button>
				<button className={`filter-btn ${mediaFilter === 'videos' ? 'active' : ''}`} onClick={() => setMediaFilter('videos')}>Videos</button>
			</div>

			<main>
				<div className='media-grid'>
					{filteredMedia.map((media) => (
						<div className='media-card' key={media.id} onClick={() => handleZoomToggle({ type: media.type, url: media.url })} title='Click to zoom'>
							{media.type === 'image' ? <img src={media.url} alt={media.name} /> : <video src={media.url} />}
							<div className='media-info'><small>{media.name}</small></div>
						</div>
					))}
				</div>
			</main>

			{previewMedia && (
				<div className='zoom-preview' onClick={() => handleZoomToggle(null)}>
					{previewMedia.type === 'image' && <img src={previewMedia.url} alt='Full View' />}
					{previewMedia.type === 'video' && <video src={previewMedia.url} controls />}
				</div>
			)}

			{isSearchOpen && (
				<div className='powerbar'>
					<div className='overlay' onClick={closeSearch} />
					<div className='powerbar-content'>
						<input type='text' placeholder='Search media...' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} onKeyDown={searchEnter} ref={searchInputRef} />
						<ul>
							{filteredMedia.length > 0 ? (
								filteredMedia.slice(0, 15).map((media) => (
									<li key={media.id} onClick={() => { handleZoomToggle({ type: media.type, url: media.url }); closeSearch() }}>
										{media.type === 'image' ? <Fa6.FaImage /> : <Fa6.FaVideo />}
										<span>{media.name}</span>
									</li>
								))
							) : (
								<li className='no-results'>No results found</li>
							)}
						</ul>
					</div>
				</div>
			)}
		</div>
	)
}
