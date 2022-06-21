import styled from 'styled-components'
import { Section } from '../../globalStyles'
import { light, dark, primary } from '../../data/GlobalData'


export const InfoSection = styled(Section)`
	padding: 24px 0 0;
	@media screen and (max-width: 940px) {
		padding: 90px 20px;
	}
`

export const InfoRow = styled.div`
	display: grid;
	width: 100%;
	grid-template-columns: repeat(2, 1fr);
	margin-top: 5rem;
	grid-auto-columns: 2rem;
	@media screen and (max-width: 940px) {
		grid-template-columns: repeat(1, 1fr);
		> div:first-child {
			display: none;
		}
	}
`

export const InfoColumn = styled.div`
	display: flex;
	flex-direction: column;
	@media screen and (max-width: 940px) {
		align-items: center;
	}
`

export const Image = styled.div`
	height: 600px;
	background: linear-gradient(to right, rgba(0, 0, 0, 0.2), rgba(2, 3, 5, 0.9)),
		url('./assets/jacob.jpg');
	background-position: 0px 33%;
	background-size: cover;
	display: flex;
	align-items: center;
	object-fit: contain;
`

export const InfoHeading = styled.h2`
	margin: 1rem 0 2rem;
	font-size: clamp(2.1rem, 7vw, 3rem);
	line-height: 1.1;
	font-weight: 600;
	color: ${({ inverse }) => (inverse ? dark : light )};
	@media screen and (max-width: 768px) {
		text-align: center;
	}
`

export const InfoDesc = styled.div`
	margin-bottom: 3rem;
	color: ${({ inverse }) => (inverse ? primary : light)};
	font-size: 1.1rem;
	font-size: clamp(1rem, 2vw, 1.1rem);
	@media screen and (max-width: 768px) {
		text-align: center;
	}
`

export const InfoWrapper = styled.div`
	padding-left: 4rem;
	padding-right: 2rem;
	padding-top: 2rem;
	max-width: 540px;
	@media screen and (max-width: 768px) {
		padding: 0;
	}
`

export const BottomLine = styled.div`
	display: flex;
	gap: 4rem;
	@media screen and (max-width: 768px) {
		justify-content: center;
		flex-wrap: wrap;
	}
`

export const InfoNumber = styled.div`
	font-weight: 700;
	font-size: 1.3rem;
	letter-spacing: 0.04rem;
`

export const InfoText = styled.div`
	font-weight: 500;
	margin-top: 0.4rem;
	color: ${primary};
`