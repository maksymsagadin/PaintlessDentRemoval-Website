import styled from 'styled-components';

export const HeroSection = styled.section`
	height: 100vh;
	background: linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)),
		url('./assets/hero_image0.jpg');
	background-position: center;
	background-size: cover;
	display: flex;
	align-items: center;
	object-fit: contain;
`

export const HeroText = styled.p`
	margin-bottom: 35px;
	font-size: clamp(0.9rem, 1.5vw, 1.3rem);
	line-height: 24px;
	text-align: center;
	letter-spacing: 2px;
	color: white;
`

export const ButtonWrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	flex-flow: wrap;
	gap: 0.5rem;
`