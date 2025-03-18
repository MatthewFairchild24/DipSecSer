import styles from '../leftMenu/LeftMenu.module.scss'

export default function LeftMenu({ setActiveComponent }) {
	return (
		<>
			<div className={styles.leftMenu}>
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
						>Галлерея</li>
						<li
							className={styles.navItem}
							onClick={() => setActiveComponent('users')}
						>Пользователи</li>
					</ul>
				</div>
			</div>
		</>
	)
}
