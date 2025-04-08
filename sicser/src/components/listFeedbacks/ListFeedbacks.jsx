import styles from '../listFeedbacks/listFeedbacks.module.scss'

import { useState, useEffect } from 'react'
import useApiUrl from '../../hooks/useApiUrl'

export default function ListFeedback() {
	const [feedbacks, setFeedbacks] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)
	const { getApiUrl } = useApiUrl()

	useEffect(() => {
		const fetchServices = async () => {
			try {
				const response = await fetch(getApiUrl('Feedbacks'))
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
				await fetch(getApiUrl(`Feedbacks/${id}`), {
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
