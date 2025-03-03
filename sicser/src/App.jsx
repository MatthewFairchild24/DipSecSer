import './App.css'

import Header from './sections/header/Header'
import TopHeader from './sections/top-header/TopHeader'
import MainSection from './sections/main-section/MainSection'
import AboutCompany from './sections/aboutCompany/AboutCompany'
import BinCon from './components/binCon/BinCon'
import Services from './sections/services/Services'
import OurProjects from './sections/ourProjects/OurProjects'
import Contacts from './sections/contacts/Contacts'

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
			<BinCon></BinCon>
			<Contacts></Contacts>
		</>
	)
}

export default App
