import styles from '../addGalleryModal/AddGalleryModal.module.scss' // Исправлено на .module.scss
import  { useState } from 'react'

export default function AddGalleryModal({ onClose, onAdd }) {
	const [newGallery, setNewGallery] = useState({
		name: '',
		description: '',
	})
	const [imageFile, setImageFile] = useState(null) 

	const handleChange = (e) => {
		const { name, value } = e.target
		setNewGallery({ ...newGallery, [name]: value })
	}

	const handleFileChange = (e) => {
		setImageFile(e.target.files[0]) 
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		await onAdd(newGallery, imageFile) 
	}

	return (
		<div className={styles.modal}>
			<div className={styles.modalContent}>
				<span className={styles.close} onClick={onClose}>
					&times;
				</span>
				<h2>Добавить новую услугу</h2>
				<form onSubmit={handleSubmit}>
					<label>
						Название:
						<input
							type='text'
							name='name'
							value={newGallery.name}
							onChange={handleChange}
							required
						/>
					</label>
					<label>
						Описание:
						<input
							type='text'
							name='description'
							value={newGallery.description}
							onChange={handleChange}
							required
						/>
					</label>
					<label>
						Выберите изображение:
						<input
							type='file'
							name='image'
							onChange={handleFileChange} 
							required
						/>
					</label>
					<button type='submit'>Добавить</button>
				</form>
			</div>
		</div>
	)
}
