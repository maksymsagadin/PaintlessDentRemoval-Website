import React from 'react'
import GlobalStyle from './globalStyles'
import HomePage from './pages/HomePage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <Router>
			<GlobalStyle />
			<Routes>
				<Route path="/" element={<HomePage />} />
			</Routes>
			{/* <Footer /> */}
		</Router>
  )
}

export default App