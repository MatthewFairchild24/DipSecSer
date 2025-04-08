import styles from './AuthPage.module.scss'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/button/Button'

export default function AuthPage() {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const navigate = useNavigate()

	const handleLogin = (e) => {
		e.preventDefault()

		if (username === 'admin' && password === '111') {
			navigate('/admin')
		} else {
			alert('Неверные учетные данные')
		}
	}

	return (
		<>
			<section className={styles.sectionAuth}>
				<div className={styles.authСontainer}>
					<h2>Авторизация</h2>
					<form onSubmit={handleLogin}>
						<div>
							<label> Логин: </label>
							<input
								type='text'
								value={username}
								onChange={(e) => setUsername(e.target.value)}
								required
							/>
						</div>
						<div>
							<label> Пароль: </label>
							<input
								type='password'
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								required
							/>
						</div>
						<Button type='submit'>Войти</Button>
					</form>
				</div>
			</section>
		</>
	)
}
