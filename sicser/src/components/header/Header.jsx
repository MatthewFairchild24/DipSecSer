import styles from './Header.module.scss'
import Button from '../button/Button'

export default function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.logoName}>
				<div className={styles.logo}>
					<img src='./image/try2-back.png' alt='' />
				</div>

				<h3>Secret Service</h3>
			</div>
			<ul className={styles.navList}>
				<li className={styles.navItem}>Главная</li>
				<li className={styles.navItem}>О Компании</li>
				<li className={styles.navItem}>Наши услуги</li>
				<li className={styles.navItem}>Наша работа</li>
			</ul>
			<Button>Заказать звонок</Button>
		</header>
	)
}
