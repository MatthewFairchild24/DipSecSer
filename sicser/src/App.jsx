import Header from './components/header/Header'
import TopHeader from './components/top-header/TopHeader'
import MainSection from './components/main-section/MainSection'
import AboutCompany from './components/aboutCompany/AboutCompany'
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
