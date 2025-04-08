import { useState, useEffect } from 'react'

import styles from '../listServices/ListServices.module.scss'
import EditServiceModal from '../../modals/editServiceModal/EditServiceModal'
import AddServiceModal from '../../modals/addServiceModal/AddServiceModal'
import useApiUrl from '../../hooks/useApiUrl'

export default function ListServices() {
	const [services, setServices] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [isAddModalOpen, setIsAddModalOpen] = useState(false)
	const [currentService, setCurrentService] = useState(null)
	const { getApiUrl } = useApiUrl()

	useEffect(() => {
		const fetchServices = async () => {
			try {
				const response = await fetch(getApiUrl('Services')) //
				if (!response.ok) {
					throw new Error('Network response was not ok')
				}
				const data = await response.json()
				setServices(data)
			} catch (error) {
				setError(error.message)
			} finally {
				setLoading(false)
			}
		}

		fetchServices()
	}, [])

	const HandleDelete = async (id) => {
		if (window.confirm('Вы уверены, что хотите удалить этот сервис?'))
			try {
				await fetch(getApiUrl(`Services/${id}`), {
					method: 'DELETE',
				})
				setServices(services.filter((service) => service.id != id))
			} catch (error) {
				setError(error.message)
			}
	}

	const HandleEdit = (service) => {
		setCurrentService(service)
		setIsModalOpen(true)
	}

	const handleSave = async (editedService) => {
		try {
			const response = await fetch(getApiUrl(`Services/${editedService.id}`), {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(editedService),
			})
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

	const handleAdd = async (newService) => {
		try {
			const response = await fetch(getApiUrl('Services/uploadService'), {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(newService),
			})
			if (!response.ok) {
				throw new Error('Ошибка при добавлении услуги')
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
			<div className={styles.listService}>
				<h2>Список услуг</h2>
				<button onClick={() => setIsAddModalOpen(true)}>Добавить</button>
				<div className={styles.tableContainer}>
					<table>
						<thead>
							<tr>
								<th>ID</th>
								<th>Название</th>
								<th>Описание</th>
								<th>Id картинки</th>
							</tr>
						</thead>
						<tbody>
							{services.map((service) => (
								<tr key={service.id}>
									<td>{service.id}</td>
									<td>{service.name}</td>
									<td>{service.description}</td>
									<td>{service.galleryId}</td>
									<td>
										<button onClick={() => HandleEdit(service.id)}>
											Редактировать
										</button>
									</td>
									<td>
										<button onClick={() => HandleDelete(service.id)}>
											Удалить
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
			{isModalOpen && (
				<EditServiceModal
					service={currentService}
					onClose={() => {
						setIsModalOpen(false)
					}}
					onSave={handleSave}
				/>
			)}
			{isAddModalOpen && (
				<AddServiceModal
					onClose={() => {
						setIsAddModalOpen(false)
					}}
					onAdd={handleAdd}
				/>
			)}
		</>
	)
}
