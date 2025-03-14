import React, { useState } from 'react'

import axios from 'axios'

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

	return (
		<>
			<section className={styles.Contacts}>
				<div className={styles.titleContacts}>
					<h3>Contacts</h3>
					<p>Напишите нам "КУКУ" и мы сдадим вас в дурку</p>
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
							<input
								type='tel'
								id='phone'
								value={phone}
								placeholder='Введите ваш телефон'
								onChange={(e) => SetPhone(e.target.value)}
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
