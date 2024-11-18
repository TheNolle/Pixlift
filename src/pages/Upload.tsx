import React from 'react'

import '../styles/pages/upload.scss'

// Components
import { Link } from 'react-router-dom'
import * as Fa6 from 'react-icons/fa6'

const generatePassword = (): string => {
	return Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2)
}

const generateRandomName = (): string => {
	const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
	return Array.from({ length: 16 }, () => chars.charAt(Math.floor(Math.random() * chars.length))).join('')
}

const MAX_FILE_SIZE_MB = 50
const MAX_FILES = 5

export default function Upload(): React.ReactElement {
	const [files, setFiles] = React.useState<File[]>([])
	const [privacy, setPrivacy] = React.useState<'public' | 'private' | 'password-protected'>('private')
	const [generatedPassword, setGeneratedPassword] = React.useState<string>(() => generatePassword())
	const [passwordVisible, setPasswordVisible] = React.useState<boolean>(false)
	const [dragActive, setDragActive] = React.useState<boolean>(false)
	const [previewFile, setPreviewFile] = React.useState<File | null>(null)

	React.useEffect(() => {
		document.title = 'Upload Media | Pixlift'

		const handleKeyDown = (event: KeyboardEvent) => event.key === 'Escape' && setPreviewFile(null)
		document.addEventListener('keydown', handleKeyDown)
		return () => document.removeEventListener('keydown', handleKeyDown)
	}, [])

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.files) {
			handleFileProcessing(Array.from(event.target.files))
		}
	}

	const handleFileProcessing = (selectedFiles: File[]) => {
		const validFiles: File[] = []
		const maxFileSizeBytes = MAX_FILE_SIZE_MB * 1024 * 1024

		selectedFiles.forEach(file => {
			if (file.size > maxFileSizeBytes) {
				alert(`File '${file.name}' exceeds the maximum size of ${MAX_FILE_SIZE_MB}MB and was ignored.`)
			} else {
				const renamedFile = new File([file], `${generateRandomName()}.${file.name.split('.').pop()}`, { type: file.type })
				validFiles.push(renamedFile)
			}
		})

		if (validFiles.length > MAX_FILES) {
			alert(`You can upload a maximum of ${MAX_FILES} files at once.`)
			validFiles.splice(MAX_FILES - files.length)
		}

		setFiles(validFiles)
	}

	const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
		event.preventDefault()
		event.stopPropagation()
		setDragActive(true)
	}

	const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
		event.preventDefault()
		event.stopPropagation()
		setDragActive(false)
	}

	const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
		event.preventDefault()
		event.stopPropagation()
		setDragActive(false)
		if (event.dataTransfer.files) {
			const droppedFiles = Array.from(event.dataTransfer.files)
			setFiles(droppedFiles)
		}
	}

	const handleRemoveFile = (index: number) => {
		setFiles((previousFiles) => previousFiles.filter((_, i) => i !== index))
	}

	const handleUpload = () => {
		if (files.length === 0) {
			alert('Please select files to upload.')
			return
		}

		console.log('Uploading files:', files)
		console.log('Privacy:', privacy)
		console.log('Generated Password (if password-protected):', privacy === 'password-protected' ? generatedPassword : null)
	}

	const handleCopyPassword = () => {
		navigator.clipboard.writeText(generatedPassword).then(() => alert('Password copied to clipboard!'))
	}

	const handleZoomToggle = (file: File | null) => {
		setPreviewFile(file)
	}

	return (
		<div className='page upload'>
			<header className='header'>
				<Link to='/' className='back-btn'><Fa6.FaArrowLeft /> Back to website</Link>
				<h1>Upload Your Media</h1>
			</header>

			<main>
				<form>
					<div className={`drop-area ${dragActive ? 'active' : ''}`} onDragOver={handleDragOver} onDragLeave={handleDragLeave} onDrop={handleDrop}>
						<label className='file-upload'>
							<Fa6.FaCloudArrowUp />
							<input type='file' multiple accept='image/*,video/*' onChange={handleFileChange} />
							<div>{files.length > 0 ? `${files.length} file(s) selected` : 'Drag & drop files here or click to select'}</div>
						</label>
					</div>

					{files.length > 1 && (
						<div className='album-info'>
							<small>Multiple files detected. This upload will be an album.</small>
						</div>
					)}

					<div className='file-preview'>
						{files.map((file, index) => (
							<div className='file-card' key={index} title='Click to zoom' onClick={() => handleZoomToggle(file)}>
								{file.type.startsWith('image') ? <img src={URL.createObjectURL(file)} alt='Preview' /> : file.type.startsWith('video') || file.type === 'video/webm' ? <video src={URL.createObjectURL(file)} /> : <div className='file-icon'><Fa6.FaFile /></div>}
								<div className='file-info'>
									<small title={file.name}>{file.name}</small>
									<button type='button' onClick={(e) => { e.stopPropagation(); handleRemoveFile(index) }} title='Remove file'><Fa6.FaTrash /></button>
								</div>
							</div>
						))}
					</div>

					<div className='privacy-settings'>
						<h2>Privacy Settings</h2>
						<div>
							<label><input type='radio' name='privacy' value='public' checked={privacy === 'public'} onChange={() => setPrivacy('public')} /> Public</label>
							<label><input type='radio' name='privacy' value='private' checked={privacy === 'private'} onChange={() => setPrivacy('private')} /> Private</label>
							<label><input type='radio' name='privacy' value='password-protected' checked={privacy === 'password-protected'} onChange={() => setPrivacy('password-protected')} /> Password Protected</label>
						</div>
					</div>

					{privacy === 'password-protected' && (
						<div className='password-settings'>
							<label>
								<span>Password:</span>
								<div className='password-input'>
									<input type={passwordVisible ? 'text' : 'password'} value={generatedPassword} onChange={(e) => setGeneratedPassword(e.target.value)} />
									<button type='button' onClick={() => setPasswordVisible((prev) => !prev)} title={passwordVisible ? 'Hide Password' : 'Show Password'}>{passwordVisible ? <Fa6.FaEyeSlash /> : <Fa6.FaEye />}</button>
									<button type='button' onClick={handleCopyPassword} title='Copy Password'><Fa6.FaCopy /></button>
								</div>
							</label>
						</div>
					)}

					<button type='button' className='upload-btn' onClick={handleUpload}>Upload <Fa6.FaArrowUpFromBracket /></button>
				</form>
			</main>

			{previewFile && (
				<div className='zoom-preview' onClick={() => handleZoomToggle(null)}>
					{previewFile.type.startsWith('image') && <img src={URL.createObjectURL(previewFile)} alt='Full View' />}
					{previewFile.type.startsWith('video') && <video src={URL.createObjectURL(previewFile)} controls />}
				</div>
			)}
		</div>
	)
}
