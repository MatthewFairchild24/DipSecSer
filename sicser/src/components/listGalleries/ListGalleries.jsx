import React, { useState, useEffect } from 'react'

import styles from '../listGalleries/ListGalleries.module.scss'
import EditGalleryModal from '../../modals/editGalleryModal/EditGalleryModal'
import AddGalleryModal from '../../modals/addGalleryModal/AddGalleryModal'

export default function ListGalleries() {
	const [galleries, setGalleries] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [isAddModalOpen, setIsAddModalOpen] = useState(false)
	const [currentGallery, setCurrentGallery] = useState(null)

	useEffect(() => {
		const fetchServices = async () => {
			try {
				const response = await fetch('https://localhost:7263/api/Galleries') //
				if (!response.ok) {
					throw new Error('Network response was not ok')
				}
				const data = await response.json()
				setGalleries(data)
			} catch (error) {
				setError(error.message)
			} finally {
				setLoading(false)
			}
		}

		fetchServices()
	}, [])

	const HandleDelete = async (id) => {
		if (window.confirm('Вы уверены, что хотите удалить эту фотографию?'))
			try {
				await fetch(`https://localhost:7263/api/Feedback/${id}`, {
					method: 'DELETE',
				})
				setGalleries(galleries.filter((g) => galleries.id != id))
			} catch (error) {
				setError(error.message)
			}
	}

	const HandleEdit = (gallery) => {
		setCurrentGallery(gallery)
		setIsModalOpen(true)
	}

	const handleSave = async (editedGallery) => {
		try {
			const response = await fetch(
				`https://localhost:7263/api/Galleries/${editedGallery.id}`,
				{
					method: 'PUT',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(editedGallery),
				}
			)
			if (!response.ok) {
				throw new Error('Ошибка при обновлении услуги')
			}

			const message = await response.text()
			console.log(message)

			setIsModalOpen(false)
		} catch (error) {
			setError(error.message)
		} finally {
			setIsModalOpen(false)
		}
	}

	const handleAdd = async (newGallery, imageFile) => {
		try {
			const formData = new FormData()
			formData.append('name', newGallery.name)
			formData.append('description', newGallery.description)
			formData.append('image', imageFile)

			const response = await fetch(
				'https://localhost:7263/api/Galleries/upload',
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: formData,
				}
			)
			if (!response.ok) {
				throw new Error('Ошибка при добавлении картинки')
			}

			setIsAddModalOpen(false)
		} catch (error) {
			setError(error.message)
		} finally {
			setIsAddModalOpen(false)
		}
	}

	if (loading) return <p>Загрузка...</p>
	if (error) return <p>Ошибка: {error}</p>

	return (
		<>
			<div className={styles.listGalleries}>
				<h2>Список фотографий</h2>
				<button onClick={() => setIsAddModalOpen(true)}>Добавить</button>
				<table>
					<thead>
						<tr>
							<th>ID</th>
							<th>Название</th>
							<th>Описание</th>
							<th>Относительный путь</th>
						</tr>
					</thead>
					<tbody>
						{galleries.map((gallery) => (
							<tr key={gallery.id}>
								<td>{gallery.id}</td>
								<td>{gallery.name}</td>
								<td>{gallery.description}</td>
								<td>{gallery.imagePath}</td>
								<td>
									<button onClick={() => HandleEdit(gallery.id)}>
										Редактировать
									</button>
								</td>
								<td>
									<button onClick={() => HandleDelete(gallery.id)}>
										Удалить
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
			{isModalOpen && (
				<EditGalleryModal
					gallery={currentGallery}
					onClose={() => {
						setIsModalOpen(false)
					}}
					onSave={handleSave}
				/>
			)}
			{isAddModalOpen && (
				<AddGalleryModal
					onClose={() => {
						setIsAddModalOpen(false)
					}}
					onAdd={handleAdd}
				/>
			)}
		</>
	)
}
