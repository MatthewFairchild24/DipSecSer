import styles from './AdminPage.module.scss'

export default function AdminPage() {
	return (
		<>
			<section className={styles.mainSection}>
				<div className={styles.leftMenu}>
					<div className={styles.containerForAvatar}>
						<div className={styles.imgContainer}></div>
						<div className={styles.NameContainer}></div>
					</div>
					<div className={styles.menuContainer}>
						<p>Меню</p>
						<ul className={styles.navList}>
							<li className={styles.navItem}>Услуги</li>
							<li className={styles.navItem}>Проекты</li>
							<li className={styles.navItem}>Обратная связь</li>
						</ul>
					</div>
				</div>
				<div className={styles.containerForContent}></div>
			</section>
		</>
	)
}
