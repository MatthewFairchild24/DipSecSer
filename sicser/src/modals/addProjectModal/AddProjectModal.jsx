import styles from '../addProjectModal/AddProjectModal.module.scss'
import React, { useState } from 'react'

export default function AddProjectModal({ onClose, onAdd }) {
	const [newProject, setNewProject] = useState({
		name: '',
		description: '',
		galleryId: 2,
	})

	const handleChange = (e) => {
		const { name, value } = e.target
		setNewProject({ ...newProject, [name]: value })
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		await onAdd(newProject)
	}

	return (
		<div className={styles.modal}>
			<div className={styles.modalContent}>
				<span className={styles.close} onClick={onClose}>
					&times;
				</span>
				<h2>Добавить новый проект</h2>
				<form onSubmit={handleSubmit}>
					<label>
						Название:
						<input
							type='text'
							name='name'
							value={newProject.name}
							onChange={handleChange}
							required
						/>
					</label>
					<label>
						Описание:
						<input
							type='text'
							name='description'
							value={newProject.description}
							onChange={handleChange}
							required
						/>
					</label>
					<label>
						Id картинки:
						<input
							type='number'
							name='galleryId'
							value={newProject.galleryId}
							onChange={handleChange}
						/>
					</label>
					<button type='submit'>Добавить</button>
				</form>
			</div>
		</div>
	)
}
