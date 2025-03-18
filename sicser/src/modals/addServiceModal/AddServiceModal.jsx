import styles from '../addServiceModal/AddServiceModal.module.scss'
import React, { useState } from 'react'

export default function AddServiceModal({ onClose, onAdd }) {
	const [newService, setNewService] = useState({
		name: '',
		description: '',
		galleryId: 2,
	})

	const handleChange = (e) => {
		const { name, value } = e.target
		setNewService({ ...newService, [name]: value })
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		await onAdd(newService)
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
							value={newService.name}
							onChange={handleChange}
							required
						/>
					</label>
					<label>
						Описание:
						<input
							type='text'
							name='description'
							value={newService.description}
							onChange={handleChange}
							required
						/>
					</label>
					<label>
						Id картинки:
						<input
							type='number'
							name='galleryId'
							value={newService.galleryId}
							onChange={handleChange}
						/>
					</label>
					<button type='submit'>Добавить</button>
				</form>
			</div>
		</div>
	)
}
