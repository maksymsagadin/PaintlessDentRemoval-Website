import React from 'react'
import GlobalStyle from './globalStyles'
import { useSiteData } from './services/useSiteData'
import HomePage from './pages/HomePage'
import { VscTerminalPowershell } from 'react-icons/vsc'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
	const { error, data, loading } = useSiteData()
	
	if (loading) return <div><VscTerminalPowershell /></div>
	if( error) return <div>Error : {error.message}</div>

	return (
    	<Router>
			<GlobalStyle />
			<Routes>
				<Route path="/" element={<HomePage heroSection={data.heroSection} aboutSection={data.aboutSection} servicesSection={data.servicesSection} gallerySection={data.gallerySection} />} />
			</Routes>
		</Router>
  	)
}

export default App