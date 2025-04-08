import styles from '../listUsers/ListUsers.module.scss'
import EditUserModal from '../../modals/editUserModal/EditUserModal'
import AddUserModal from '../../modals/addUserModal/AddUserModal'

import { useState, useEffect } from 'react'
import useApiUrl from '../../hooks/useApiUrl'

export default function ListUsers() {
	const [users, setUsers] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [isAddModalOpen, setIsAddModalOpen] = useState(false)
	const [currentUser, setCurrentUser] = useState(null)
	const { getApiUrl } = useApiUrl()

	useEffect(() => {
		const fetchServices = async () => {
			try {
				const response = await fetch(getApiUrl('Users'))
				if (!response.ok) {
					throw new Error('Network response was not ok')
				}
				const data = await response.json()
				setUsers(data)
			} catch (error) {
				setError(error.message)
			} finally {
				setLoading(false)
			}
		}

		fetchServices()
	}, [])

	const HandleDelete = async (id) => {
		if (window.confirm('Вы уверены, что хотите удалить этого пользователя?'))
			try {
				await fetch(getApiUrl(`Users/${id}`), {
					method: 'DELETE',
				})
				setFeedbacks(users.filter((f) => users.id != id))
			} catch (error) {
				setError(error.message)
			}
	}

	const HandleEdit = (user) => {
		setCurrentUser(user)
		setIsModalOpen(true)
	}

	const handleSave = async (editedUser) => {
		try {
			const response = await fetch(getApiUrl(`Users/${editedUser.id}`), {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(editedUser),
			})
			if (!response.ok) {
				throw new Error('Ошибка при обновлении пользователя')
			}

			const message = await response.text()
			console.log(message)

			// const updatedUser = await response.json()
			// setUsers(
			// 	users.map((user) => (user.id === updatedUser.id ? updatedUser : user))
			// )
			setIsModalOpen(false)
		} catch (error) {
			setError(error.message)
		} finally {
			setIsModalOpen(false)
		}
	}

	const handleAdd = async (newUser) => {
		try {
			const response = await fetch(getApiUrl('Users/register'), {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(newUser),
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
			<div className={styles.listUser}>
				<h2>Список пользователей</h2>
				<button onClick={() => setIsAddModalOpen(true)}>Добавить</button>
				<table>
					<thead>
						<tr>
							<th>ID</th>
							<th>Фамилия</th>
							<th>Имя</th>
							<th>Отчество</th>
							<th>Логин</th>
							<th>Пароль</th>
							<th>Номер телефона</th>
							<th>E-mail</th>
							<th>Id роли</th>
						</tr>
					</thead>
					<tbody>
						{users.map((user) => (
							<tr key={user.id}>
								<td>{user.id}</td>
								<td>{user.surname}</td>
								<td>{user.name}</td>
								<td>{user.patronymic}</td>
								<td>{user.login}</td>
								<td>{user.password}</td>
								<td>{user.phone}</td>
								<td>{user.email}</td>
								<td>{user.roleId}</td>

								<td>
									<button onClick={() => HandleEdit(user.id)}>
										Редактировать
									</button>
								</td>
								<td>
									<button onClick={() => HandleDelete(user.id)}>Удалить</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
			{isModalOpen && (
				<EditUserModal
					user={currentUser}
					onClose={() => setIsModalOpen(false)}
					onSave={handleSave}
				/>
			)}
			{isAddModalOpen && (
				<AddUserModal
					onClose={() => {
						setIsAddModalOpen(false)
					}}
					onAdd={handleAdd}
				/>
			)}
		</>
	)
}
