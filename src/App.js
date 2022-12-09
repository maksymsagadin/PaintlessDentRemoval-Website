import React from 'react'
import GlobalStyle from './globalStyles'
import HomePage from './pages/HomePage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
	return (
    	<Router>
			<GlobalStyle />
			<Routes>
				<Route path="/" element={<HomePage />} />
			</Routes>
		</Router>
  )
}

export default App