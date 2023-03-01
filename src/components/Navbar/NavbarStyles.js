import styled from 'styled-components'
import { Container } from '../../globalStyles'
import { Link } from 'react-router-dom'
import { Link as LinkScroll } from 'react-scroll'
import { light, dark, primary } from '../../data/GlobalData'

export const Nav = styled.nav`
	background: ${({ hide }) => (hide ? 'transparent' : dark)};
	margin-top: -80px;
	height: 80px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1.2rem;
	position: sticky;
	top: 0;
	z-index: 50;
	width: 100%;
`

export const NavbarContainer = styled(Container)`
	display: flex;
	justify-content: start;
	height: 100%;
`

export const NavLeft = styled(Link)`
	color: ${light};
	justify-self: flex-start;
	text-decoration: none;
	font-size: 2rem;
	display: flex;
	white-space: nowrap;
	font-weight: 600;
	align-items: center;
	z-index: 50;
	text-shadow: 1px 1px 1px #000;
	&:hover {
		color: ${primary};
		cursor: pointer;
		transition: all 0.3s ease;
	}
	@media screen and (max-width: 960px) {
		font-weight: 500;
		font-size: 1.75rem;
		margin-top: 30px;

	}
`

export const NavLogo = styled.img`
	color: ${primary};
	margin-right: 1.5rem;
	@media screen and (max-width: 768px) {
		margin-right: 0.5rem;
	}
`

export const MobileIcon = styled.div`
	display: none;
	z-index: 50;
	@media screen and (max-width: 960px) {
		display: block;
		position: absolute;
		top: 0;
		right: 0;
		transform: translate(-100%, 70%);
		font-size: 1.8rem;
		cursor: alias;
	}
	
`

export const NavMenu = styled.ul`
	display: flex;
	align-items: center;
	list-style: none;
	text-align: center;
	width: 100%;
	@media screen and (max-width: 960px) {
		flex-direction: column;
		width: 100%;
		height: 40vh;
		position: fixed;
		padding-top: 20%;
		padding-bottom: 20%;
		top: 0;
		left: 0;
		opacity: ${({ show }) => (show ? 1 : 0)};
		visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
		transform: translateY(${({ show }) => (show ? '0' : '-10px')});
		transition: opacity 0.5s ease;
		background-color: ${dark};
	}
	> li:first-child {
		margin-left: auto;
	}
`

export const NavItem = styled.li`
	height: 100%;
	cursor: alias;
	@media screen and (max-width: 960px) {
		width: 100%;
		&:hover {
			border: none;
		}
	}
`

export const NavLinks = styled(LinkScroll)`
	color: ${light};
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0.5rem 1rem;
	height: 100%;
	font-weight: 600;
	&.active {
		@media screen and (min-width: 960px) {
			border-bottom: 3px solid ${primary};
			border-radius: 2px;
			height: 67%;

		}
	}
	&:hover {
		color: ${primary};
		transition: all 0.3s ease;
	}
	@media screen and (max-width: 960px) {
		text-align: center;
		padding: 2rem;
		width: 100%;
		display: table;
		&:hover {
			color: ${primary};
			transition: all 0.3s ease;
		}
	}
`
export const ContactButton = styled.button`
	background-color: ${dark};
	border: none;
	font-size: 1.25rem;
	font-weight: 600;
	color: ${primary};
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0.5rem 1rem;
	height: 100%;
	cursor: alias;
	&:hover {
		color: ${light};
		transition: all 0.3s ease;
	}
	@media screen and (max-width: 960px) {
		text-align: center;
		padding: 2rem;
		width: 100%;
		display: table;
		
	}
`