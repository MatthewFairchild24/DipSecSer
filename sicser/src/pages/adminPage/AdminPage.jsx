import styles from './AdminPage.module.scss'

import { useState } from 'react'

import LeftMenu from '../../components/leftMenu/LeftMenu'
import ListServices from '../../components/listServices/ListServices'
import ListProjects from '../../components/listProjects/ListProjects'
import ListFeedbacks from '../../components/listFeedbacks/ListFeedbacks'
import ListGalleries from '../../components/listGalleries/ListGalleries'
import ListUsers from '../../components/listUsers/ListUsers'

export default function AdminPage() {
	const [activeComponent, setActiveComponent] = useState('services')

	const renderComponent = () => {
		switch (activeComponent) {
			case 'services':
				return <ListServices />
			case 'projects':
				return <ListProjects />
			case 'feedbacks':
				return <ListFeedbacks />
			case 'galleries':
				return <ListGalleries />
			case 'users':
				return <ListUsers />
			default:
				return <ListServices />
		}
	}

	return (
		<>
			<section className={styles.mainSection}>
				<LeftMenu setActiveComponent={setActiveComponent} />
				<div className={styles.containerForContent}>{renderComponent()}</div>
			</section>
		</>
	)
}
