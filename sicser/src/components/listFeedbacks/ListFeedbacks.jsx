import styles from '../listFeedbacks/listFeedbacks.module.scss'

import React, { useState, useEffect } from 'react'

export default function ListFeedback() {
	const [feedbacks, setFeedbacks] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)

	useEffect(() => {
		const fetchServices = async () => {
			try {
				const response = await fetch('https://localhost:7263/api/Feedbacks') //
				if (!response.ok) {
					throw new Error('Network response was not ok')
				}
				const data = await response.json()
				setFeedbacks(data)
			} catch (error) {
				setError(error.message)
			} finally {
				setLoading(false)
			}
		}

		fetchServices()
	}, [])

	const HandleDelete = async (id) => {
		if (window.confirm('Вы уверены, что хотите удалить этот отклик?'))
			try {
				await fetch(`https://localhost:7263/api/Feedback/${id}`, {
					method: 'DELETE',
				})
				setFeedbacks(feedbacks.filter((f) => feedbacks.id != id))
			} catch (error) {
				setError(error.message)
			}
	}

	const HandleEdit = (id) => {}

	if (loading) return <p>Загрузка...</p>
	if (error) return <p>Ошибка: {error}</p>

	return (
		<>
			<div className={styles.listFeedback}>
				<h2>Список откликов</h2>
				<table>
					<thead>
						<tr>
							<th>ID</th>
							<th>ФИО</th>
							<th>Описание</th>
							<th>Дата</th>
							<th>Телефон</th>
						</tr>
					</thead>
					<tbody>
						{feedbacks.map((feedback) => (
							<tr key={feedback.id}>
								<td>{feedback.id}</td>
								<td>{feedback.name}</td>
								<td>{feedback.description}</td>
								<td>{feedback.data}</td>
								<td>{feedback.phone}</td>
								<td>
									<button onClick={() => HandleDelete(feedback.id)}>
										Удалить
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</>
	)
}
