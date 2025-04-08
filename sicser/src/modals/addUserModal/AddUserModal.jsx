import styles from '../addUserModal/AddUserModal.module.scss'
import { useState } from 'react'

export default function AddUserModal({ onClose, onAdd }) {
	const [newUser, setNewUser] = useState({
		surname: '',
		name: '',
		patronymic: '',
		login: '',
		password: '',
		phone: '',
		email: '',
		roleId: 1,
	})

	const handleChange = (e) => {
		const { name, value } = e.target
		setNewUser({ ...newUser, [name]: value })
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		await onAdd(newUser)
	}

	return (
		<div className={styles.modal}>
			<div className={styles.modalContent}>
				<span className={styles.close} onClick={onClose}>
					&times;
				</span>
				<h2>Добавить нового пользователя</h2>
				<form onSubmit={handleSubmit}>

					<label>
						Фамилия:
						<input
							type='text'
							name='surname'
							value={newUser.surname}
							onChange={handleChange}
							required
						/>
					</label>
					<label>
						Имя:
						<input
							type='text'
							name='name'
							value={newUser.name}
							onChange={handleChange}
							required
						/>
					</label>
					<label>
						Отчество:
						<input
							type='text'
							name='patronymic'
							value={newUser.patronymic}
							onChange={handleChange}
						/>
					</label>
					<label>
						Логин:
						<input
							type='text'
							name='login'
							value={newUser.login}
							onChange={handleChange}
							required
						/>
					</label>
					<label>
						Пароль:
						<input
							type='password'
							name='password'
							value={newUser.password}
							onChange={handleChange}
							required
						/>
					</label>
					<label>
						Номер телефона:
						<input
							type='text'
							name='phone'
							value={newUser.phone}
							onChange={handleChange}
							required
						/>
					</label>
					<label>
						E-mail:
						<input
							type='email'
							name='email'
							value={newUser.email}
							onChange={handleChange}
							required
						/>
					</label>
					<label>
						Id роли:
						<input
							type='number'
							name='roleId'
							value={newUser.roleId}
							onChange={handleChange}
							required
						/>
					</label>
					<button type='submit'>Добавить</button>
				</form>
			</div>
		</div>
	)
}
