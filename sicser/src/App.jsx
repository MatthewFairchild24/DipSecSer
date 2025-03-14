import './App.css'

import AdminPage from './pages/adminPage/AdminPage'
import MainPage from './pages/mainPage/MainPage'
import AuthPage from './pages/authPage/AuthPage'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path='/' element={<MainPage />} />
					<Route path='/auth' element={<AuthPage />} />
					<Route path='/admin' element={<AdminPage />} />
				</Routes>
			</Router>
		</>
	)
}

export default App
