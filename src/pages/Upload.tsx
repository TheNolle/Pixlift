import React from 'react'
import axios from 'axios'

import '../styles/pages/upload.scss'

// Components
import { Link } from 'react-router-dom'
import * as Fa6 from 'react-icons/fa6'

const MAX_FILE_SIZE_MB = 50
const MAX_FILES = 10
const MAX_FILE_NAME_LENGTH = 48

const generatePassword = (): string => {
	return Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2)
}

const generateRandomName = (originalName: string): string => {
	const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
	const randomName = Array.from({ length: 24 }, () => chars.charAt(Math.floor(Math.random() * chars.length))).join('')
	return originalName.length > MAX_FILE_NAME_LENGTH || !/^[a-zA-Z0-9`\-_+.]+$/.test(originalName.split('.').slice(0, -1).join('.')) ? `${randomName}.${originalName.split('.').pop()}` : originalName
}

const getFileSize = (file: File): string => {
	let fileSize = file.size
	const units = ['B', 'KB', 'MB', 'GB', 'TB']

	let i = 0
	while (fileSize >= 1024 && i < units.length - 1) {
		fileSize /= 1024
		i++
	}

	return `${fileSize.toFixed(2)} ${units[i]}`
}

const getFileIcon = (file: File): React.ReactNode => {
	const fileType = file.type
	const fileExtension = file.name.split('.').pop()?.toLowerCase()

	const imageAnimatedExtensions = ['apng', 'gif', 'webp']

	if (fileType.startsWith('image')) {
		if (fileExtension && imageAnimatedExtensions.includes(fileExtension)) {
			return <Fa6.FaFileVideo />
		} else {
			return <Fa6.FaImage />
		}
	} else if (fileType.startsWith('video')) {
		return <Fa6.FaVideo />
	} else {
		return <Fa6.FaFile />
	}
}

const isValidURL = async (url: string): Promise<boolean> => {
	try {
		const validURL = new URL(url)
		const validProtocol = /^(http|https):/.test(validURL.protocol)
		if (!validProtocol) return false
		const validHost = /^(localhost|127\.0\.0\.1|(\d{1,3}\.){3}\d{1,3})$/.test(validURL.hostname) || await axios.head(url).then(() => true).catch(() => false)
		if (!validHost) return false
		const headers = await axios.head(url)
		const validContentType = headers.headers['content-type'].startsWith('image/') || headers.headers['content-type'].startsWith('video/')
		if (!validContentType) return false
		const validContentLength = parseInt(headers.headers['content-length']) <= MAX_FILE_SIZE_MB * 1024 * 1024
		if (!validContentLength) return false
		return true
	} catch {
		return false
	}
}

const fetchURLasFile = async (url: string): Promise<File | null> => {
	try {
		const response = await axios.get(url)
		if (response.status < 200 || response.status >= 300) {
			alert(`Could not fetch the file from the URL: ${url}`)
			return null
		}
		const contentType = response.headers['content-type']
		if (!contentType || (!contentType.startsWith('image/') && !contentType.startsWith('video/'))) {
			alert(`The URL does not point to a supported file type: ${url}`)
			return null
		}
		const blob = new Blob([response.data], { type: contentType })
		const fileName = url.split('/').pop()?.trim() || `file_${Date.now()}`
		return new File([blob], generateRandomName(fileName), { type: blob.type })
	} catch (error: any) {
		alert(`An error occurred while fetching the URL: ${error.message}`)
		return null
	}
}

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
		const handlePaste = async (event: ClipboardEvent) => {
			const clipboardText = event.clipboardData?.getData('Text')
			if (clipboardText && await isValidURL(clipboardText)) {
				const file = await fetchURLasFile(clipboardText)
				if (file) handleFileProcessing([file])
			} else {
				const items = event.clipboardData?.items
				if (items) {
					const pastedFiles: File[] = []
					for (const item of items) {
						if (item.kind === 'file') {
							const file = item.getAsFile()
							if (file) pastedFiles.push(file)
						}
					}
					if (pastedFiles.length > 0) {
						handleFileProcessing(pastedFiles)
					}
				}
			}
		}

		document.addEventListener('keydown', handleKeyDown)
		document.addEventListener('paste', handlePaste)
		return () => {
			document.removeEventListener('keydown', handleKeyDown)
			document.removeEventListener('paste', handlePaste)
		}
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
				const renamedFile = new File([file], generateRandomName(file.name), { type: file.type })
				validFiles.push(renamedFile)
			}
		})

		if (validFiles.length > MAX_FILES) {
			alert(`You can upload a maximum of ${MAX_FILES} files at once.`)
			validFiles.splice(MAX_FILES - files.length)
		}

		setFiles((previousFiles) => {
			const newFiles = [...previousFiles, ...validFiles]
			if (newFiles.length > MAX_FILES) {
				alert(`You can upload a maximum of ${MAX_FILES} files. The excess files were ignored.`)
				return newFiles.slice(0, MAX_FILES)
			}
			return newFiles
		})
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
			handleFileProcessing(Array.from(event.dataTransfer.files))
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
								<span className='file-size' title={getFileSize(file)}>{getFileSize(file)}</span>
								<span className='file-type' title={file.type}>{getFileIcon(file)}</span>
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
					</div>

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
