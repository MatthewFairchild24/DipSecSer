import styles from '../editServiceModal/EditServiceModal.module.scss'

import React, { useState, useEffect } from 'react'

export default function EditServiceModal({ service, onClose, onSave }) {
	const [editService, setEditService] = useState({
		id: 0,
		name: '',
		description: '',
		galleryId: '',
	})

	useEffect(() => {
		if (service) {
			setEditService({
				id: service.id ?? 0,
				name: service.name ?? '',
				description: service.description ?? '',
				galleryId: service.galleryId ?? '',
			})
		}
	}, [service])

	const handleChange = (e) => {
		const { name, value } = e.target
		setEditService({ ...editService, [name]: value })
		console.log(name, value, editService)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		onSave(editService)
	}
	return (
		<>
			<div className={styles.modal}>
				<div className={styles.modalContent}>
					<span className={styles.close} onClick={onClose}>
						&times;
					</span>
					<h2>Редактировать услугу</h2>
					<form onSubmit={handleSubmit}>
						<label>
							Id:
							<input
								type='number'
								name='id'
								value={editService.id}
								onChange={handleChange}
								required
							/>
						</label>

						<label>
							Название:
							<input
								type='text'
								name='name'
								value={editService.name}
								onChange={handleChange}
								required
							/>
						</label>
						<label>
							Описание:
							<input
								type='text'
								name='desciption'
								value={editService.description}
								onChange={handleChange}
							/>
						</label>

						<label>
							Id картинки:
							<input
								type='number'
								name='galleryId'
								value={editService.galleryId}
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
