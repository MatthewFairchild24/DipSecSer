import styles from './Contacts.module.scss'

export default function Contacts() {
	return (
		<>
			<section className={styles.Contacts}>
				<div className={styles.titleContacts}>
					<h3>Contacts</h3>
					<p>Напишите нам "КУКУ" и мы сдадим вас в дурку</p>
				</div>
				<div className={styles.containerAllContacts}>
					<div className={styles.containerPhoneAddressMail}>
						<div className={styles.containerPhone}></div>
						<div className={styles.containerAddress}></div>
						<div className={styles.containerMail}></div>
					</div>
					<div className={styles.containerFeedback}></div>
				</div>
			</section>
		</>
	)
}
