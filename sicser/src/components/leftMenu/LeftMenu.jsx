import styles from '../leftMenu/LeftMenu.module.scss'
import Button from '../../components/button/Button'
import { useNavigate } from 'react-router-dom'

export default function LeftMenu({ setActiveComponent }) {
	const styleButton = {
		backgroundColor: '#d9d9d9', 
		padding: '4px 8px', 
		margin: '0', 
		border: 'none', 
		borderRadius: '4px', 
		cursor: 'pointer',
		fontSize: '12px', 
		opacity: 0.7, 
		transition: 'opacity 0.3s', 
	}

	const navigate = useNavigate()

	const HandleSubmit = () => {
		navigate('/')
	}

	return (
		<>
			<div className={styles.leftMenu}>
				<div className={styles.buttonBack}>
					<Button style={styleButton} onClick={HandleSubmit}>
						&#11207;
					</Button>
				</div>
				<div className={styles.containerForAvatar}>
					<div className={styles.imgContainer}>
						<img src='../../../public/image/static/def.jpg' alt='' />
					</div>
					<div className={styles.NameContainer}>test testovich</div>
				</div>
				<div className={styles.menuContainer}>
					<p>Меню</p>
					<ul className={styles.navList}>
						<li
							className={styles.navItem}
							onClick={() => setActiveComponent('services')}
						>
							Услуги
						</li>
						<li
							className={styles.navItem}
							onClick={() => setActiveComponent('projects')}
						>
							Проекты
						</li>
						<li
							className={styles.navItem}
							onClick={() => setActiveComponent('feedbacks')}
						>
							Обратная связь
						</li>
						<li
							className={styles.navItem}
							onClick={() => setActiveComponent('galleries')}
						>
							Галлерея
						</li>
						<li
							className={styles.navItem}
							onClick={() => setActiveComponent('users')}
						>
							Пользователи
						</li>
					</ul>
				</div>
			</div>
		</>
	)
}
