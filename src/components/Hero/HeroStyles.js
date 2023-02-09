import styled from 'styled-components'
import { primary, light } from '../../data/GlobalData'


export const HeroSection = styled.section`
	height: 100vh;
	background: linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.3)),
		url(${props => props.bgImg});
	background-position: center;
	background-size: cover;
	display: flex;
	padding-bottom: 5.5rem;
	align-items: flex-end;
	object-fit: contain;
`

export const HeroHeading = styled.h1`
    font-size: clamp(2rem, 4vw, 6rem);
	font-weight: 700;
    margin-bottom: 1.5rem;
    color: ${primary};
    width: 100%;
    letter-spacing: 0.75rem;
    text-align: center;
	text-shadow: 1px 1px 1px #000;
`

export const HeroText = styled.p`
	margin-bottom: 35px;
	font-size: clamp(1.2rem, 4vw, 1.6rem);
	line-height: 24px;
	text-align: center;
	letter-spacing: 3px;
	color: ${light};
	text-shadow: 0.5px 0.5px 0.5px #000;


`

export const ButtonWrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	flex-flow: wrap;
	gap: 1rem;
`