import styles from './Header.module.scss'
import Button from '../../components/button/Button'

import { useNavigate, Link, useLocation } from 'react-router-dom'

export default function Header() {
	const navigate = useNavigate()
	const location = useLocation()

	const handleSubmit = () => {
		navigate('/auth')
	}

	return (
		<header className={styles.header}>
			<div className={styles.logoName}>
				<div className={styles.logo}>
					<img src='../image/static/try2-back.png' alt='' />
				</div>

				<h2>Secret Service</h2>
			</div>
			<ul className={styles.navList}>
				<li className={styles.navItem}>
					{location.pathname === '/' ? (
						<a href='#MainSection'>На главную</a>
					) : (
						<Link to='/#MainSection'>На главную</Link>
					)}
				</li>

				<li className={styles.navItem}>
					{location.pathname === '/' ? (
						<a href='#Services'>Наши услуги</a>
					) : (
						<Link to='/#Services'>Наши услуги</Link>
					)}
				</li>
				<li className={styles.navItem}>
					{location.pathname === '/' ? (
						<a href='#OurProjects'>Наши проекты</a>
					) : (
						<Link to='/#OurProjects'>Наши проекты</Link>
					)}
				</li>
				<li className={styles.navItem}>
					{location.pathname === '/' ? (
						<a href='#Contacts'>Обратная связь</a>
					) : (
						<Link to='/#Contacts'>Обратная свзязь</Link>
					)}
				</li>
			</ul>
			<Button onClick={handleSubmit}>Перейти в админ панель</Button>
		</header>
	)
}
