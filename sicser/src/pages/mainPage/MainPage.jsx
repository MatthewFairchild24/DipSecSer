import './MainPage.scss'

import Header from '../../sections/header/Header'
import TopHeader from '../../sections/top-header/TopHeader'
import MainSection from '../../sections/main-section/MainSection'
import BinCon from '../../components/binCon/BinCon'
import Services from '../../sections/services/Services'
import OurProjects from '../../sections/ourProjects/OurProjects'
import Feedback from '../../sections/feedback/Feedback'
import AboutCompany from '../../sections/aboutCompany/AboutCompany'
import Footer from '../../sections/footer/Footer'

export default function MainPage() {
	return (
		<>
			<TopHeader></TopHeader>
			<Header></Header>
			<MainSection></MainSection>
			<BinCon></BinCon>
			<AboutCompany></AboutCompany>
			<Services></Services>

			<OurProjects></OurProjects>
			<BinCon></BinCon>
			<Feedback></Feedback>
			<Footer></Footer>
		</>
	)
}
