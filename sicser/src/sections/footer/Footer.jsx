import styles from '../footer/Footer.module.scss'
import { useState, useEffect } from 'react'
import useApiUrl from '../../hooks/useApiUrl'
import axios from 'axios'

export default function Footer() {
	const [data, setData] = useState([])
	const { getApiUrl } = useApiUrl()

	useEffect(() => {
		const fetchData = async () => {
			try {
				const url = getApiUrl('Contacts')
				const response = await axios.get(url)
				setData(response.data)
			} catch (error) {
				console.log(error)
			}
		}
		fetchData()
	}, [])

	return (
		<>
			<section className={styles.Footer}>
				<div className={styles.containerForIcon}>
					<div className={styles.logo}>
						<img src='./image/static/try2-back.png' alt='Waiting...' />
						<h3>Secret Service</h3>
					</div>
					<p>ИП Хомутов Дмитрий Юрьевич</p>
					<p>ИНН 4629029690</p>
					<p>&#9432; Все права защищены.</p>
				</div>
				<div className={styles.containerForNavigate}>
					<h3>Навигация по сайту</h3>
					<ul className={styles.navList}>
						<li className={styles.navItem}>
							<a href='#MainSection'>Главная</a>
						</li>

						<li className={styles.navItem}>
							<a href='#Services'>Наши услуги</a>
						</li>
						<li className={styles.navItem}>
							<a href='#OurProjects'>Наши проекты</a>
						</li>
						<li className={styles.navItem}>
							<a href='#Contacts'>Обратная связь</a>
						</li>
					</ul>
				</div>
				<div className={styles.containerForContacts}>
					<h3>Контакты</h3>
					<p>г.Курск, ул.Радищева д.24</p>
					<div className={styles.contactPhone}>
						{data.map((contact) => (
							<div key={contact.id}>
								<p>{contact.phone}</p>
							</div>
						))}
					</div>
					<div className={styles.contactEmail}>
						{data.map((contact) => (
							<div key={contact.id}>
								<p>{contact.email}</p>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	)
}
