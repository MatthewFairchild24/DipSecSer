import styles from '../editUserModal/EditUserModal.module.scss'

import React, { useState, useEffect } from 'react'

export default function EditUserModal({ user, onClose, onSave }) {
	const [editUser, setEditUser] = useState({
		id: 0,
		surname: '',
		name: '',
		patronymic: '',
		login: '',
		password: '',
		phone: '',
		email: '',
		roleId: 2,
	})

	useEffect(() => {
		if (user) {
			setEditUser({
				id: user.id ?? 0,
				surname: user.surname ?? '',
				name: user.name ?? '',
				patronymic: user.patronymic ?? '',
				login: user.login ?? '',
				password: user.password ?? '',
				phone: user.phone ?? '',
				email: user.email ?? '',
				roleId: user.roleId ?? 0,
			})
		}
	}, [user])

	const handleChange = (e) => {
		const { name, value } = e.target
		setEditUser({ ...editUser, [name]: value })
		console.log(name, value, editUser)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		onSave(editUser)
	}

	return (
		<>
			<div className={styles.modal}>
				<div className={styles.modalContent}>
					<span className={styles.close} onClick={onClose}>
						&times;
					</span>
					<h2>Редактировать пользователя</h2>
					<form onSubmit={handleSubmit}>
						<label>
							Id:
							<input
								type='number'
								name='id'
								value={editUser.id}
								onChange={handleChange}
								required
							/>
						</label>

						<label>
							Фамилия:
							<input
								type='text'
								name='surname'
								value={editUser.surname}
								onChange={handleChange}
								required
							/>
						</label>
						<label>
							Имя:
							<input
								type='text'
								name='name'
								value={editUser.name}
								onChange={handleChange}
								required
							/>
						</label>
						<label>
							Отчество:
							<input
								type='text'
								name='patronymic'
								value={editUser.patronymic}
								onChange={handleChange}
							/>
						</label>
						<label>
							Логин:
							<input
								type='text'
								name='login'
								value={editUser.login}
								onChange={handleChange}
								required
							/>
						</label>
						<label>
							Пароль:
							<input
								type='password'
								name='password'
								value={editUser.password}
								onChange={handleChange}
								required
							/>
						</label>
						<label>
							Номер телефона:
							<input
								type='text'
								name='phone'
								value={editUser.phone}
								onChange={handleChange}
								required
							/>
						</label>
						<label>
							E-mail:
							<input
								type='email'
								name='email'
								value={editUser.email}
								onChange={handleChange}
								required
							/>
						</label>
						<label>
							Id роли:
							<input
								type='number'
								name='roleId'
								value={editUser.roleId}
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
