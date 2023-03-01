import React, { useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import { CgMenuRight } from 'react-icons/cg'
import { IconContext } from 'react-icons'
import {
	Nav,
	NavbarContainer,
	NavLeft,
	ContactButton,
	NavLogo,
	MobileIcon,
	NavMenu,
	NavLinks,
	NavItem,
} from './NavbarStyles'
import { animateScroll as scroll } from 'react-scroll'
import { websiteName } from '../../data/GlobalData'
import { navbarData } from '../../data/NavbarData'

const Navbar = ({ logo, hide, setShowModal }) => {
    const [show, setShow] = useState(false)
    return (
        <Nav hide={hide}>
			<NavbarContainer>
				<NavLeft to="/" onClick={scroll.scrollToTop}>
					<NavLogo src={logo.url} alt={websiteName} height={100} width={100}/>
				</NavLeft>

				{!hide && (
					<>
						<IconContext.Provider value={{ color: 'white' }}>
							<MobileIcon onClick={() => setShow(!show)}>
								{show ? <FaTimes /> : <CgMenuRight />}
							</MobileIcon>
						</IconContext.Provider>
						<NavMenu hide={hide} show={show}>
							{navbarData.map((item, index) => (
								<NavItem key={index}>
									<NavLinks
										spy={item.spy}
										duration={item.duration}
										smooth={item.smooth}
										exact={item.exact}
										offset={item.offset}
										onClick={() => setShow(false)}
										to={item.to}
									>
										{item.text}
									</NavLinks>
								</NavItem>
							))}
							<NavItem>
								<ContactButton onClick={() => {setShowModal(true)}}>
									Contact
								</ContactButton>
							</NavItem>
						</NavMenu>
					</>
				)}
			</NavbarContainer>
		</Nav>
    )
}

export default Navbar