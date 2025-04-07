import React, { useState } from 'react'
import axios from 'axios'
import NumberFormat from 'react-number-format'
import styles from './Feedback.module.scss'

export default function Feedback() {
	const [name, SetName] = useState('')
	const [description, SetDescription] = useState('')
	const [phone, SetPhone] = useState('')

	const handleSubmit = async (e) => {
		e.preventDefault()
		const feedback = { name, description, phone }

		try {
			const response = await axios.post(
				'https://localhost:7263/api/Feedbacks',
				feedback
			)
			console.log(response.data)
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

	const HandlePhoneChange = (e) => {
		const value = e.target.value
		const regex = /^[0-9+\-\(\)\s]*$/
		if (regex.test(value) && value.length <= 20) {
			SetPhone(value)
		}
	}

	return (
		<>
			<section id='Contacts' className={styles.Contacts}>
				<div className={styles.titleContacts}>
					<h3>Contacts</h3>
					<p>Напишите нам "Привет!" и мы обязательно с вами свяжимся</p>
				</div>
				<div className={styles.containerAllContacts}>
					<div className={styles.containerPhoneAddressMail}>
						<div className={styles.containerContent} style={stylePhone}>
							<p>Телефон</p>
							<p>PhoneNumber</p>
							<a href=''>Позвонить нам</a>
						</div>
						<div className={styles.containerContent}>
							<p>Адрес</p>
							<p>Address</p>
							<a href=''>Открыть карту</a>
						</div>
						<div className={styles.containerContent} style={styleMail}>
							<p>E-mail</p>
							<p>email@gmail.com</p>
							<a href=''>Написать нам</a>
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
								onChange={(e) => SetName(e.target.value)}
								required
							/>
						</div>
						<div className={styles.inputGroup}>
							<label htmlFor='phone'>Телефон:</label>
							<NumberFormat
								format='+7 (###) ###-##-##'
								mask='-'
								id='phone'
								value={phone}
								placeholder='Ввудите ваш номер телефона'
								onValueChange={({ value }) => SetPhone(value)}
								required
							/>
						</div>
						<div className={styles.inputGroup}>
							<label htmlFor='message'>Сообщение:</label>
							<textarea
								id='message'
								value={description}
								placeholder='Введите ваше сообщение'
								onChange={(e) => SetDescription(e.target.value)}
								required
							></textarea>
						</div>
						<button type='submit'>Отправить сообщение</button>
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
