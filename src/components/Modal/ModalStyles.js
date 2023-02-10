import styled from 'styled-components'
import { VscChromeClose } from 'react-icons/vsc'
import { motion } from 'framer-motion'
import { light, dark } from '../../data/GlobalData'


export const Background = styled(motion.div)`
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.5);
	top: 0;
	left: 0;
	position: fixed;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 99;
`

export const ModalWrapper = styled(motion.div)`
	padding: 0;
	background: ${light};
	color: ${dark};
	display: flex;
	position: relative;
	align-items: center;
	flex-direction: column;
	text-align: center;
	border-radius: 6px;
	
`

export const CloseModalButton = styled(VscChromeClose)`
	cursor: alias;
	color: ${ ({color}) => (color ? light : dark )};
	background-color: ${ ({color}) => (color ? dark : light )};
	opacity: 75%;
	position: absolute;
	top: 8px;
	right: 8px;
	width: 32px;
	height: 32px;
	padding: 3px;
	border-radius: 50%;
	z-index: 10;
	@media screen and (max-width: 768px) {
		top: 5px;
		right: 5px;
	}
`