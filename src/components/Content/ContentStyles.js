import styled from 'styled-components'
import { motion } from 'framer-motion'
import { dark, primary } from '../../data/GlobalData'


export const ContentSec = styled.div`
	padding: 60px 0;
	background: ${props => props.color};
`

export const ContentRow = styled.div`
	display: flex;
	margin: 0 -15px -15px -15px;
	flex-wrap: wrap;
	align-items: center;
	flex-direction: ${props => props.row};
	justify-content: space-around;
	@media screen and (max-width: 768px) {
		flex-direction: column-reverse;
	}
`

export const ContentColumn = styled(motion.div)`
	margin-bottom: 15px;
	padding-right: 15px;
	padding-left: 15px;
	flex: 1;
	z-index: 10;
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: ${({ row }) => (row ? 'left' : 'right')};

	@media screen and (max-width: 768px) {
		max-width: 100% !important;
		flex-basis: 100%;
		justify-content: center;
		align-items: center;
	}
`
export const ContentHeading = styled(motion.h2)`
	margin: 1rem 0.75rem 0.5rem;
	font-size: clamp(1.3rem, 7vw, 2.75rem);
	line-height: 1.2;
	letter-spacing: 3px;
	font-weight: 700;
	color: ${ props => props.color };
	@media screen and (max-width: 768px) {
		text-align: center;
	}
`
export const Subtitle = styled(motion.p)`
	max-width: 650px;
	margin-top: 1rem;
	margin-bottom: 2rem;
	margin-left: 0.75rem;
	margin-right: 0.75rem;
	line-height: 1.1;
	letter-spacing: 1px;
	color: ${ props => props.color };
	font-size: clamp(0.8rem, 2vw, 1rem);
	font-weight: 500;
`

export const TextWrapper = styled.div`
	max-width: 540px;
	padding-top: 0;
	@media screen and (max-width: 768px) {
		padding-bottom: 65px;
		> h1,
		p {
			text-align: center;
		}
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	> img {
		width: 300px;
		margin-left: -3px;
	}
`

export const ContentButton = styled(motion.button)`
	height: 3rem;
	margin-left: 0.75rem;
	margin-right: 0.75rem;
	font-weight: 700;
	font-size: 0.8rem;
	line-height: 18px;
	letter-spacing: 1.55px;
	background: none;
	color: ${ props => props.color };
	border-radius: 4px;
	white-space: nowrap;
	padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
	font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
	outline: none;
	border: 2px solid ${primary};
	position: relative;
	overflow: hidden;
	text-shadow: 0.5px 0.5px 0.5px #000;
	&:before {
		background: ${primary};
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: -1;
		transition: all 0.6s ease;
		width: 101%;
		height: 0%;
	}
	&:hover:before {
		height: 102%;
	}
	&:hover {
		cursor: alias;
		color: ${dark};
	}
`

export const ImgWrapper = styled(motion.div)`
	display: flex;
	justify-content: flex-start;
	max-height: 600px;
	border-radius: 4px;
	justify-content: center;
	position: relative;
	background-color: ${primary};
	padding: 0;
`

export const Img = styled(motion.img)`
	padding-right: 0;
	border: 0;
	border-radius: 4px;
	max-width: 100%;
	vertical-align: middle;
	display: inline-block;
	object-fit: cover;
	max-height: 500px;
	z-index: 1;
`



