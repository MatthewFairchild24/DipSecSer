import Header from './sections/header/Header'
import TopHeader from './sections/top-header/TopHeader'
import MainSection from './sections/main-section/MainSection'
import AboutCompany from './sections/aboutCompany/AboutCompany'
import BinCon from './components/BinCon/BinCon'
import './App.css'

function App() {
	return (
		<>
			<TopHeader></TopHeader>
			<Header></Header>
			<MainSection></MainSection>
			<BinCon></BinCon>
			<AboutCompany></AboutCompany>
		</>
	)
}

export default App
