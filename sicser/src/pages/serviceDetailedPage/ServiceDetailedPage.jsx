import styles from '../serviceDetailedPage/ServiceDetailedPage.module.scss'
import Header from '../../sections/header/Header'
import TopHeader from '../../sections/top-header/TopHeader'
import ServiceDetail from '../../components/serviceDetail/ServiceDetail'
import Footer from '../../sections/footer/Footer'
import Services from '../../sections/services/Services'

export default function ServiceDetailedPage() {
	return (
		<>
			<section className='ServiceDetailedPage'>
				<TopHeader></TopHeader>
				<Header></Header>
				<ServiceDetail></ServiceDetail>
				<Services></Services>
				<Footer></Footer>
			</section>
		</>
	)
}
