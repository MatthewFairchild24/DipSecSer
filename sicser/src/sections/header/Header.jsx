import styles from './Header.module.scss'
import Button from '../../components/button/Button'

import { useNavigate } from 'react-router-dom'

export default function Header() {
	const navigate = useNavigate()

	const handleSubmit = () => {
		navigate('/auth')
	}

	return (
		<header className={styles.header}>
			<div className={styles.logoName}>
				<div className={styles.logo}>
					<img src='./image/static/try2-back.png' alt='' />
				</div>

				<h3>Secret Service</h3>
			</div>
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
			<Button onClick={handleSubmit}>Перейти в админ панель</Button>
		</header>
	)
}
