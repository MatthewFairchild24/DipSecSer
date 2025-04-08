import styles from '../editGalleryModal/EditGalleryModal.module.scss'

import  { useState, useEffect } from 'react'

export default function EditGalleryModal({ gallery, onClose, onSave }) {
	const [editGallery, setEditGallery] = useState({
		id: 0,
		name: '',
		description: '',
		imagePath: '',
	})

	useEffect(() => {
		if (gallery) {
			setEditGallery({
				id: gallery.id ?? 0,
				name: gallery.name ?? '',
				description: gallery.description ?? '',
				imagePath: gallery.imagePath ?? '',
			})
		}
	}, [gallery])

	const handleChange = (e) => {
		const { name, value } = e.target
		setEditGallery({ ...editGallery, [name]: value })
		console.log(name, value, editGallery)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		onSave(editGallery)
	}
	return (
		<>
			<div className={styles.modal}>
				<div className={styles.modalContent}>
					<span className={styles.close} onClick={onClose}>
						&times;
					</span>
					<h2>Редактировать картинку</h2>
					<form onSubmit={handleSubmit}>
						<label>
							Id:
							<input
								type='number'
								name='id'
								value={editGallery.id}
								onChange={handleChange}
								required
							/>
						</label>

						<label>
							Название:
							<input
								type='text'
								name='name'
								value={editGallery.name}
								onChange={handleChange}
								required
							/>
						</label>
						<label>
							Описание:
							<input
								type='text'
								name='desciption'
								value={editGallery.description}
								onChange={handleChange}
							/>
						</label>

						<label>
							Путь к картинке:
							<input
								type='text'
								name='imagePath'
								value={editGallery.imagePath}
								onChange={handleChange}
								required
							/>
						</label>
						<button type='submit'>Сохранить</button>
					</form>
				</div>
			</div>
		</>
	)
}
