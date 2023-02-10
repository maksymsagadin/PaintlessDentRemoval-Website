import styled, {createGlobalStyle} from 'styled-components'
import { light, dark, primary } from './data/GlobalData'

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Rubik', sans-serif;
    }
`
export const Container = styled.div`
    width: 100%;
    max-width: 1330px;
    margin: 0 auto;
    padding: 0 50px;

    @media screen and (max-width: 960px){
        padding: 0 30px;
    }
`
export const Section = styled.div`
    color: white;
    padding: 50px;
    background: ${({ inverse }) => (inverse ? light : dark)};
`
export const MainHeading = styled.h1`
    font-size: clamp(2.5rem, 6vw, 4.5rem);
    margin-bottom: 1.5rem;
    color: ${({ inverse }) => (inverse ? dark : light)};
    width: 100%;
    letter-spacing: 4px;
    text-align: center;
	text-shadow: 0.5px 0.5px 0.5px #000;
`
export const Button = styled.button`
    letter-spacing: 4px;
	border-radius: 4px;
	background-color: rgba(17, 178, 138, 0.5);
	white-space: nowrap;
	padding: ${({ big }) => (big ? '12px 48px' : '12px 24px')};
	font-weight: 600;
	color: #fff;
	font-size: 1rem;
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
		height: 101%;
		

	}
	&:hover {
		z-index: 1;
		color: ${dark};
		cursor: alias;

	}
`

export default GlobalStyle;