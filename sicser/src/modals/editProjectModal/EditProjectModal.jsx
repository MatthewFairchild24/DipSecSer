import styles from '../editProjectModal/EditProjectModal.module.scss'

import React, { useState, useEffect } from 'react'

export default function EditProjectModal({ project, onClose, onSave }) {
	const [editProject, setEditProject] = useState({
		id: 0,
		name: '',
		description: '',
		galleryId: '',
	})

	useEffect(() => {
		if (project) {
			setEditProject({
				id: project.id ?? 0,
				name: project.name ?? '',
				description: project.description ?? '',
				galleryId: project.galleryId ?? '',
			})
		}
	}, [project])

	const handleChange = (e) => {
		const { name, value } = e.target
		setEditProject({ ...editProject, [name]: value })
		console.log(name, value, editProject)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		onSave(editProject)
	}
	return (
		<>
			<div className={styles.modal}>
				<div className={styles.modalContent}>
					<span className={styles.close} onClick={onClose}>
						&times;
					</span>
					<h2>Редактировать проект</h2>
					<form onSubmit={handleSubmit}>
						<label>
							Id:
							<input
								type='number'
								name='id'
								value={editProject.id}
								onChange={handleChange}
								required
							/>
						</label>

						<label>
							Название:
							<input
								type='text'
								name='name'
								value={editProject.name}
								onChange={handleChange}
								required
							/>
						</label>
						<label>
							Описание:
							<input
								type='text'
								name='desciption'
								value={editProject.description}
								onChange={handleChange}
							/>
						</label>

						<label>
							Id картинки:
							<input
								type='number'
								name='galleryId'
								value={editProject.galleryId}
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
