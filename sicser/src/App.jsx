import './App.css'

import Header from './sections/header/Header'
import TopHeader from './sections/top-header/TopHeader'
import MainSection from './sections/main-section/MainSection'
import AboutCompany from './sections/aboutCompany/AboutCompany'
import BinCon from './components/binCon/BinCon'
import Services from './sections/services/Services'
import OurProjects from './sections/OurProjects/OurProjects'

function App() {
	return (
		<>
			<TopHeader></TopHeader>
			<Header></Header>
			<MainSection></MainSection>
			<BinCon></BinCon>
			<AboutCompany></AboutCompany>
			<Services></Services>
			<BinCon></BinCon>
			<OurProjects></OurProjects>
			{/* <Test></Test> */}
			
		</>
	)
}

export default App
