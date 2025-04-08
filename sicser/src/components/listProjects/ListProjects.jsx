import EditProjectModal from '../../modals/editProjectModal/EditProjectModal'
import AddProjectModal from '../../modals/addProjectModal/AddProjectModal'

import styles from '../listProjects/listProjects.module.scss'
import { useState, useEffect } from 'react'
import useApiUrl from '../../hooks/useApiUrl'

export default function ListProjects() {
	const [projects, setProjects] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [isAddModalOpen, setIsAddModalOpen] = useState(false)
	const [currentProject, setCurrentProject] = useState(null)
	const { getApiUrl } = useApiUrl()

	useEffect(() => {
		const fetchServices = async () => {
			try {
				const response = await fetch(getApiUrl('Projects')) //
				if (!response.ok) {
					throw new Error('Network response was not ok')
				}
				const data = await response.json()
				setProjects(data)
			} catch (error) {
				setError(error.message)
			} finally {
				setLoading(false)
			}
		}

		fetchServices()
	}, [])

	const HandleDelete = async (id) => {
		if (window.confirm('Вы уверены, что хотите удалить этот проект?'))
			try {
				await fetch(getApiUrl(`Projects/${id}`), {
					method: 'DELETE',
				})
				setProjects(projects.filter((project) => project.id != id))
			} catch (error) {
				setError(error.message)
			}
	}

	const HandleEdit = (project) => {
		setCurrentProject(project)
		setIsModalOpen(true)
	}

	const handleSave = async (editedProject) => {
		try {
			const response = await fetch(getApiUrl(`Projects/${editedProject.id}`), {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(editedProject),
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

	const handleAdd = async (newProject) => {
		try {
			const response = await fetch(getApiUrl('Projects/uploadProject'), {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(newProject),
			})
			if (!response.ok) {
				throw new Error('Ошибка при добавлении проекта')
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
			<div className={styles.listProjects}>
				<h2>Список проектов</h2>
				<button onClick={() => setIsAddModalOpen(true)}>Добавить</button>
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
						{projects.map((project) => (
							<tr key={project.id}>
								<td>{project.id}</td>
								<td>{project.name}</td>
								<td>{project.description}</td>
								<td>{project.galleryId}</td>
								<td>
									<button onClick={() => HandleEdit(project.id)}>
										Редактировать
									</button>
								</td>
								<td>
									<button onClick={() => HandleDelete(project.id)}>
										Удалить
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
			{isModalOpen && (
				<EditProjectModal
					project={currentProject}
					onClose={() => setIsModalOpen(false)}
					onSave={handleSave}
				/>
			)}
			{isAddModalOpen && (
				<AddProjectModal
					onClose={() => {
						setIsAddModalOpen(false)
					}}
					onAdd={handleAdd}
				/>
			)}
		</>
	)
}
