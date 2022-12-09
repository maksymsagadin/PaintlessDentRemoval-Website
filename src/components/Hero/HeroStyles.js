import styled from 'styled-components'
import { primary, light } from '../../data/GlobalData'


export const HeroSection = styled.section`
	height: 100vh;
	background: linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.5)),
		url('./assets/hero_image0.jpg');
	background-position: center;
	background-size: cover;
	display: flex;
	padding-top: 5rem;
	object-fit: contain;
`

export const HeroHeading = styled.h1`
    font-size: clamp(3.5rem, 5vw, 6rem);
    margin-bottom: 1.5rem;
    color: ${primary};
    width: 100%;
    letter-spacing: 7px;
    text-align: center;
	text-shadow: 1px 1px 1px #000;
`

export const HeroText = styled.p`
	margin-bottom: 35px;
	font-size: clamp(1.3rem, 1.5vw, 1.7rem);
	line-height: 24px;
	text-align: center;
	letter-spacing: 2px;
	color: ${light};
	text-shadow: 0.5px 0.5px 0.5px #000;


`

export const ButtonWrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	flex-flow: wrap;
	gap: 0.5rem;
`