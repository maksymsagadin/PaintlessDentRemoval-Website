import React, { useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import { GiInkSwirl } from 'react-icons/gi'
import { CgMenuRight } from 'react-icons/cg'
import { IconContext } from 'react-icons'
import {
	Nav,
	NavbarContainer,
	NavLogo,
	ContactButton,
	NavIcon,
	MobileIcon,
	NavMenu,
	NavLinks,
	NavItem,
} from './NavbarStyles'
import { animateScroll as scroll } from 'react-scroll'
import { websiteName } from '../../data/GlobalData'
import { navbarData } from '../../data/NavbarData'

const Navbar = ({ hide, setShowModal }) => {
    const [show, setShow] = useState(false);
    return (
        <Nav hide={hide}>
			<NavbarContainer>
				<NavLogo to="/" onClick={scroll.scrollToTop}>
					<NavIcon src="./assets/" alt="" >
						<GiInkSwirl size='2.5rem' />
					</NavIcon>
					{websiteName}
				</NavLogo>

				{!hide && (
					<>
						<IconContext.Provider value={{ color: 'white' }}>
							<MobileIcon onClick={() => setShow(!show)}>
								{show ? <FaTimes /> : <CgMenuRight />}
							</MobileIcon>
						</IconContext.Provider>
						<NavMenu hide={hide} show={show}>
							{navbarData.map((el, index) => (
								<NavItem key={index}>
									<NavLinks
										spy={el.spy}
										duration={el.duration}
										smooth={el.smooth}
										exact={el.exact}
										offset={el.offset}
										onClick={() => setShow(false)}
										to={el.to}
									>
										{el.text}
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