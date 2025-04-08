import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styles from './Feedback.module.scss'
import useApiUrl from '../../hooks/useApiUrl'

export default function Feedback() {
	const [name, setName] = useState('')
	const [description, setDescription] = useState('')
	const [phone, setPhone] = useState('')
	const [dataContacts, setDataContacts] = useState([])

	const { getApiUrl } = useApiUrl()

	useEffect(() => {
		const fetchData = async () => {
			try {
				const url = getApiUrl('Contacts/1')
				const response = await axios.get(url)
				setDataContacts(response.data)
			} catch (error) {
				console.log(error)
			}
		}
		fetchData()
	}, [])

	const handleSubmit = async (e) => {
		e.preventDefault()
		const feedback = { name, description, phone }

		try {
			const url = getApiUrl('Feedbacks')
			const response = await axios.post(url, feedback)
			console.log(response.data)

			// Очистка полей после успешной отправки
			setName('')
			setDescription('')
			setPhone('')
		} catch (error) {
			console.error('Ошибка при отправке данных: ', error)
		}
	}

	const stylePhone = {
		borderTopLeftRadius: '50px',
	}

	const styleMail = {
		borderBottomLeftRadius: '50px',
	}

	const handlePhoneChange = (e) => {
		const input = e.target.value

		let cleaned = input.replace(/\D/g, '')

		let formatted = ''

		if (cleaned.length > 0) {
			if (cleaned[0] === '8' || cleaned[0] === '7') {
				formatted += '+7 '
				cleaned = cleaned.substring(1)
			} else {
				formatted += '+7 '
			}
		}
		if (cleaned.length > 0) {
			formatted += '(' + cleaned.substring(0, 3)
		}
		if (cleaned.length >= 3) {
			formatted += ') ' + cleaned.substring(3, 6)
		}
		if (cleaned.length >= 6) {
			formatted += '-' + cleaned.substring(6, 8)
		}
		if (cleaned.length >= 8) {
			formatted += '-' + cleaned.substring(8, 10)
		}

		setPhone(formatted)
	}

	const isFormValid =
		name.trim() !== '' && phone.trim() !== '' && description.trim() !== ''

	return (
		<>
			<section id='Contacts' className={styles.Contacts}>
				<div className={styles.titleContacts}>
					<h3>Обратная связь</h3>
					<p>Напишите нам вашу проблему и мы обязательно с вами свяжемся</p>
				</div>
				<div className={styles.containerAllContacts}>
					<div className={styles.containerPhoneAddressMail}>
						<div className={styles.containerContent} style={stylePhone}>
							<p>Телефон</p>
							<p>{dataContacts.phone}</p>
						</div>
						<div className={styles.containerContent}>
							<p>Адрес</p>
							<p>г.Курск ул.Радищева 24</p>
						</div>
						<div className={styles.containerContent} style={styleMail}>
							<p>E-mail</p>
							<p>{dataContacts.email}</p>
						</div>
					</div>
					<form className={styles.containerFeedback} onSubmit={handleSubmit}>
						<div className={styles.inputGroup}>
							<label htmlFor='name'>Имя:</label>
							<input
								type='text'
								id='name'
								value={name}
								placeholder='Введите ваше имя'
								onChange={(e) => setName(e.target.value)}
								required
							/>
						</div>
						<div className={styles.inputGroup}>
							<label htmlFor='phone'>Телефон:</label>
							<input
								type='text'
								id='phone'
								value={phone}
								placeholder='Введите ваш номер телефона'
								onChange={handlePhoneChange}
								required
							/>
						</div>
						<div className={styles.inputGroup}>
							<label htmlFor='message'>Сообщение:</label>
							<textarea
								id='message'
								value={description}
								placeholder='Введите ваше сообщение'
								onChange={(e) => setDescription(e.target.value)}
								required
							></textarea>
						</div>
						<button type='submit' disabled={!isFormValid}>
							Отправить сообщение
						</button>
						<div className={styles.attention}>
							&#9432; Нажимая на кнопку вы выражаете согласие с политикой
							конфиденциальности и правилами обработки персональных данных
						</div>
					</form>
				</div>
			</section>
		</>
	)
}
