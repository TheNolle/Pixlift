import React from 'react'

import '../styles/pages/gallery.scss'

// Components
import { Link } from 'react-router-dom'
import * as Fa6 from 'react-icons/fa6'

interface Media {
	id: number
	type: string
	url: string
	name: string
}

// Mock Data
const mockMedia: Media[] = [
	{ id: 1, type: 'image', url: 'https://via.placeholder.com/150', name: 'Sample Image 1' },
	{ id: 2, type: 'video', url: 'https://www.w3schools.com/html/mov_bbb.mp4', name: 'Sample Video 1' },
	{ id: 3, type: 'image', url: 'https://via.placeholder.com/150', name: 'Sample Image 2' },
	{ id: 4, type: 'video', url: 'https://www.w3schools.com/html/mov_bbb.mp4', name: 'Sample Video 2' },
	{ id: 5, type: 'image', url: 'https://via.placeholder.com/150', name: 'Sample Image 3' },
	{ id: 6, type: 'video', url: 'https://www.w3schools.com/html/mov_bbb.mp4', name: 'Sample Video 3' },
	{ id: 7, type: 'image', url: 'https://via.placeholder.com/150', name: 'Sample Image 4' },
	{ id: 8, type: 'video', url: 'https://www.w3schools.com/html/mov_bbb.mp4', name: 'Sample Video 4' },
	{ id: 9, type: 'image', url: 'https://via.placeholder.com/150', name: 'Sample Image 5' },
	{ id: 10, type: 'video', url: 'https://www.w3schools.com/html/mov_bbb.mp4', name: 'Sample Video 5' },
	{ id: 11, type: 'image', url: 'https://via.placeholder.com/150', name: 'Sample Image 6' },
	{ id: 12, type: 'video', url: 'https://www.w3schools.com/html/mov_bbb.mp4', name: 'Sample Video 6' },
	{ id: 13, type: 'image', url: 'https://via.placeholder.com/150', name: 'Sample Image 7' },
	{ id: 14, type: 'video', url: 'https://www.w3schools.com/html/mov_bbb.mp4', name: 'Sample Video 7' },
	{ id: 15, type: 'image', url: 'https://via.placeholder.com/150', name: 'Sample Image 8' },
	{ id: 16, type: 'video', url: 'https://www.w3schools.com/html/mov_bbb.mp4', name: 'Sample Video 8' },
	{ id: 17, type: 'image', url: 'https://via.placeholder.com/150', name: 'Sample Image 9' },
	{ id: 18, type: 'video', url: 'https://www.w3schools.com/html/mov_bbb.mp4', name: 'Sample Video 9' },
	{ id: 19, type: 'image', url: 'https://via.placeholder.com/150', name: 'Sample Image 10' },
	{ id: 20, type: 'video', url: 'https://www.w3schools.com/html/mov_bbb.mp4', name: 'Sample Video 10' },
	{ id: 21, type: 'image', url: 'https://via.placeholder.com/150', name: 'Sample Image 11' },
	{ id: 22, type: 'video', url: 'https://www.w3schools.com/html/mov_bbb.mp4', name: 'Sample Video 11' },
	{ id: 23, type: 'image', url: 'https://via.placeholder.com/150', name: 'Sample Image 12' },
	{ id: 24, type: 'video', url: 'https://www.w3schools.com/html/mov_bbb.mp4', name: 'Sample Video 12' },
	{ id: 25, type: 'image', url: 'https://via.placeholder.com/150', name: 'Sample Image 13' },
	{ id: 26, type: 'video', url: 'https://www.w3schools.com/html/mov_bbb.mp4', name: 'Sample Video 13' },
	{ id: 27, type: 'image', url: 'https://via.placeholder.com/150', name: 'Sample Image 14' },
	{ id: 28, type: 'video', url: 'https://www.w3schools.com/html/mov_bbb.mp4', name: 'Sample Video 14' },
	{ id: 29, type: 'image', url: 'https://via.placeholder.com/150', name: 'Sample Image 15' },
	{ id: 30, type: 'video', url: 'https://www.w3schools.com/html/mov_bbb.mp4', name: 'Sample Video 15' },
	{ id: 31, type: 'image', url: 'https://via.placeholder.com/150', name: 'Sample Image 16' },
	{ id: 32, type: 'video', url: 'https://www.w3schools.com/html/mov_bbb.mp4', name: 'Sample Video 16' },
	{ id: 33, type: 'image', url: 'https://via.placeholder.com/150', name: 'Sample Image 17' },
	{ id: 34, type: 'video', url: 'https://www.w3schools.com/html/mov_bbb.mp4', name: 'Sample Video 17' },
	{ id: 35, type: 'image', url: 'https://via.placeholder.com/150', name: 'Sample Image 18' },
	{ id: 36, type: 'video', url: 'https://www.w3schools.com/html/mov_bbb.mp4', name: 'Sample Video 18' },
	{ id: 37, type: 'image', url: 'https://via.placeholder.com/150', name: 'Sample Image 19' },
	{ id: 38, type: 'video', url: 'https://www.w3schools.com/html/mov_bbb.mp4', name: 'Sample Video 19' },
	{ id: 39, type: 'image', url: 'https://via.placeholder.com/150', name: 'Sample Image 20' },
	{ id: 40, type: 'video', url: 'https://www.w3schools.com/html/mov_bbb.mp4', name: 'Sample Video 20' },
	{ id: 41, type: 'image', url: 'https://via.placeholder.com/150', name: 'Sample Image 21' },
	{ id: 42, type: 'video', url: 'https://www.w3schools.com/html/mov_bbb.mp4', name: 'Sample Video 21' },
	{ id: 43, type: 'image', url: 'https://via.placeholder.com/150', name: 'Sample Image 22' },
	{ id: 44, type: 'video', url: 'https://www.w3schools.com/html/mov_bbb.mp4', name: 'Sample Video 22' },
	{ id: 45, type: 'image', url: 'https://via.placeholder.com/150', name: 'Sample Image 23' },
	{ id: 46, type: 'video', url: 'https://www.w3schools.com/html/mov_bbb.mp4', name: 'Sample Video 23' },
	{ id: 47, type: 'image', url: 'https://via.placeholder.com/150', name: 'Sample Image 24' },
	{ id: 48, type: 'video', url: 'https://www.w3schools.com/html/mov_bbb.mp4', name: 'Sample Video 24' },
	{ id: 49, type: 'image', url: 'https://via.placeholder.com/150', name: 'Sample Image 25' },
	{ id: 50, type: 'video', url: 'https://www.w3schools.com/html/mov_bbb.mp4', name: 'Sample Video 25' },
	{ id: 51, type: 'image', url: 'https://via.placeholder.com/150', name: 'Sample Image 26' },
	{ id: 52, type: 'video', url: 'https://www.w3schools.com/html/mov_bbb.mp4', name: 'Sample Video 26' },
	{ id: 53, type: 'image', url: 'https://via.placeholder.com/150', name: 'Sample Image 27' },
	{ id: 54, type: 'video', url: 'https://www.w3schools.com/html/mov_bbb.mp4', name: 'Sample Video 27' },
	{ id: 55, type: 'image', url: 'https://via.placeholder.com/150', name: 'Sample Image 28' },
	{ id: 56, type: 'video', url: 'https://www.w3schools.com/html/mov_bbb.mp4', name: 'Sample Video 28' },
	{ id: 57, type: 'image', url: 'https://via.placeholder.com/150', name: 'Sample Image 29' },
	{ id: 58, type: 'video', url: 'https://www.w3schools.com/html/mov_bbb.mp4', name: 'Sample Video 29' },
	{ id: 59, type: 'image', url: 'https://via.placeholder.com/150', name: 'Sample Image 30' },
	{ id: 60, type: 'video', url: 'https://www.w3schools.com/html/mov_bbb.mp4', name: 'Sample Video 30' },
	{ id: 61, type: 'image', url: 'https://via.placeholder.com/150', name: 'Sample Image 31' },
	{ id: 62, type: 'video', url: 'https://www.w3schools.com/html/mov_bbb.mp4', name: 'Sample Video 31' },
	{ id: 63, type: 'image', url: 'https://via.placeholder.com/150', name: 'Sample Image 32' },
	{ id: 64, type: 'video', url: 'https://www.w3schools.com/html/mov_bbb.mp4', name: 'Sample Video 32' }
]

const ITEMS_PER_PAGE = 48

export default function Gallery(): React.ReactElement {
	const [previewMedia, setPreviewMedia] = React.useState<{ type: string; url: string } | null>(null)
	const [isSearchOpen, setIsSearchOpen] = React.useState<boolean>(false)
	const [searchQuery, setSearchQuery] = React.useState<string>('')
	const [mediaFilter, setMediaFilter] = React.useState<'all' | 'images' | 'videos'>('all')
	const [filteredMedia, setFilteredMedia] = React.useState<Media[]>(mockMedia)
	const [currentPage, setCurrentPage] = React.useState<number>(1)
	const [selectedMediaIndex, setSelectedMediaIndex] = React.useState<number | null>(null)
	const [isLoading, setIsLoading] = React.useState<boolean>(false)
	const [useInfiniteScroll, setUseInfiniteScroll] = React.useState<boolean>(false)

	const searchInputRef = React.useRef<HTMLInputElement>(null)
	const observer = React.useRef<IntersectionObserver | null>(null)

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
			} else if (!isSearchOpen) {
				handleArrowNavigation(event)
			}
		}
		document.addEventListener('keydown', handleKeyDown)
		return () => document.removeEventListener('keydown', handleKeyDown)
	}, [previewMedia, isSearchOpen, filteredMedia, selectedMediaIndex, currentPage])

	React.useEffect(() => {
		const query = searchQuery.toLowerCase()
		const filteredBySearch = mockMedia.filter((media) => media.name.toLowerCase().includes(query))
		const filteredByType = mediaFilter === 'all' ? filteredBySearch : filteredBySearch.filter((media) => mediaFilter === 'images' ? media.type === 'image' : media.type === 'video')
		setIsLoading(true)
		setTimeout(() => {
			setFilteredMedia(filteredByType)
			setCurrentPage(1)
			setSelectedMediaIndex(null)
			setIsLoading(false)
		}, 500)
	}, [searchQuery, mediaFilter])

	const handleArrowNavigation = (event: KeyboardEvent) => {
		if (filteredMedia.length === 0) return

		let newIndex = selectedMediaIndex ?? -1

		if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
			newIndex++
			if (newIndex >= paginatedMedia.length) {
				if (currentPage < totalPages) {
					setCurrentPage((prev) => prev + 1)
					newIndex = 0
				} else {
					newIndex = paginatedMedia.length - 1
				}
			}
		} else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
			newIndex--
			if (newIndex < 0) {
				if (currentPage > 1) {
					setCurrentPage((prev) => prev - 1)
					newIndex = ITEMS_PER_PAGE - 1
				} else {
					newIndex = 0
				}
			}
		} else if (event.key === 'Enter' && selectedMediaIndex !== null) {
			setPreviewMedia({ type: paginatedMedia[selectedMediaIndex].type, url: paginatedMedia[selectedMediaIndex].url })
		}

		setSelectedMediaIndex(newIndex)
	}

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

	const totalPages = Math.ceil(filteredMedia.length / ITEMS_PER_PAGE)

	React.useEffect(() => {
		if (useInfiniteScroll) {
			const lastElement = document.querySelector('.media-grid > .media-card:last-child')
			if (lastElement) {
				observer.current = new IntersectionObserver(
					(entries) => {
						if (entries[0].isIntersecting && currentPage < totalPages && !isLoading) {
							setCurrentPage((previous) => previous + 1)
						}
					}, { rootMargin: '100px' }
				)
				observer.current.observe(lastElement)
			}
		}
		return () => observer.current?.disconnect()
	}, [useInfiniteScroll, currentPage, totalPages, isLoading])

	const paginatedMedia = useInfiniteScroll
		? filteredMedia.slice(0, currentPage * ITEMS_PER_PAGE)
		: filteredMedia.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE)

	return (
		<div className='page gallery' role='main' aria-labelledby='gallery-title'>
			<header className='header' role='banner'>
				<div className='controls'>
					<Link to='/' className='back-btn' aria-label='Go back to website'><Fa6.FaArrowLeft /> Back to website</Link>
					<h1 id='gallery-title'>Gallery</h1>
					<button
						className='search-btn'
						onClick={() => { setIsSearchOpen(true); setTimeout(() => searchInputRef.current?.focus(), 100) }}
						title='CTRL + K or /'
						aria-label='Open search bar'
					>
						<Fa6.FaMagnifyingGlass /> Search
					</button>
				</div>
				<div className='infinite-scroll-toggle'>
					<label htmlFor='infinite-scroll'>
						Infinite Scrolling
					</label>
					<input
						type='checkbox'
						id='infinite-scroll'
						checked={useInfiniteScroll}
						onChange={() => setUseInfiniteScroll((prev) => !prev)}
						aria-label='Toggle Infinite Scrolling'
					/>
				</div>
			</header>

			<nav className='filters' aria-label='Media type filters'>
				<button
					className={`filter-btn ${mediaFilter === 'all' ? 'active' : ''}`}
					onClick={() => setMediaFilter('all')}
					aria-pressed={mediaFilter === 'all'}
					tabIndex={0}
				>
					All
				</button>
				<button
					className={`filter-btn ${mediaFilter === 'images' ? 'active' : ''}`}
					onClick={() => setMediaFilter('images')}
					aria-pressed={mediaFilter === 'images'}
					tabIndex={0}
				>
					Images
				</button>
				<button
					className={`filter-btn ${mediaFilter === 'videos' ? 'active' : ''}`}
					onClick={() => setMediaFilter('videos')}
					aria-pressed={mediaFilter === 'videos'}
					tabIndex={0}
				>
					Videos
				</button>
			</nav>

			<main>
				{isLoading ? (
					<div className='loading-indicator' aria-live='polite'>
						<Fa6.FaSpinner className='spinner' />
						<p>Loading media...</p>
					</div>
				) : (
					<>
						{filteredMedia.length === 0 ? (
							<div className='empty-state'>
								<Fa6.FaImage className='empty-icon' />
								<p>No media found. Try adjusting your filters or search query.</p>
							</div>
						) : (
							<>
								<div className='media-grid' role='grid' aria-label='Media grid with images and videos'>
									{paginatedMedia.map((media, index) => (
										<div
											className={`media-card ${index === selectedMediaIndex ? 'selected' : ''}`}
											key={media.id}
											role='button'
											aria-label={`${media.type === 'image' ? 'Image' : 'Video'}: ${media.name}`}
											tabIndex={0}
											onClick={() => handleZoomToggle({ type: media.type, url: media.url })}
											onKeyDown={(event) => event.key === 'Enter' && handleZoomToggle({ type: media.type, url: media.url })}
											title='Click to zoom or press Enter'
										>
											{media.type === 'image' ? <img src={media.url} alt={media.name} /> : <video src={media.url} aria-label={media.name} />}
											<div className='media-info'>
												<small>{media.name}</small>
												{media.type === 'video' && <Fa6.FaPlay className='play-icon' />}
											</div>
										</div>
									))}
								</div>

								{!useInfiniteScroll && (
									<div className='pagination' role='navigation' aria-label='Pagination'>
										<button
											disabled={currentPage === 1}
											onClick={() => setCurrentPage((prev) => prev - 1)}
											className='pagination-btn'
											tabIndex={0}
											aria-label='Go to previous page'
										>
											<Fa6.FaArrowLeft /> Prev
										</button>
										<span aria-live='polite'>Page {currentPage} of {totalPages}</span>
										<button
											disabled={currentPage === totalPages}
											onClick={() => setCurrentPage((prev) => prev + 1)}
											className='pagination-btn'
											tabIndex={0}
											aria-label='Go to next page'
										>
											Next <Fa6.FaArrowRight />
										</button>
									</div>
								)}
							</>
						)}
					</>
				)}
			</main>

			{previewMedia && (
				<div className='zoom-preview' role='dialog' aria-labelledby='zoom-title' aria-describedby='zoom-content' onClick={() => handleZoomToggle(null)}>
					<h2 id='zoom-title' className='sr-only'>Zoomed Media Preview</h2>
					<div id='zoom-content'>
						{previewMedia.type === 'image' && <img src={previewMedia.url} alt='Full View' />}
						{previewMedia.type === 'video' && <video src={previewMedia.url} aria-label='Full View' controls autoPlay />}
					</div>
				</div>
			)}

			{isSearchOpen && (
				<div className='powerbar' role='search' aria-labelledby='search-title' aria-describedby='search-content'>
					<h2 id='search-title' className='sr-only'>Search Media</h2>
					<div className='overlay' onClick={closeSearch} />
					<div className='powerbar-content' id='search-content'>
						<input type='text' placeholder='Search media...' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} onKeyDown={searchEnter} ref={searchInputRef} aria-label='Search media' />
						<ul>
							{filteredMedia.length > 0 ? (
								filteredMedia.slice(0, 15).map((media) => (
									<li
										key={media.id}
										onClick={() => { handleZoomToggle({ type: media.type, url: media.url }); closeSearch() }}
										tabIndex={0}
										role='option'
										aria-label={media.name}
									>
										{media.type === 'image' ? <Fa6.FaImage /> : <Fa6.FaVideo />}
										<span>{media.name}</span>
									</li>
								))
							) : (
								<li className='no-results' aria-live='polite'>No results found</li>
							)}
						</ul>
					</div>
				</div>
			)}
		</div>
	)
}
