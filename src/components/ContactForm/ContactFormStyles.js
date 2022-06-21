import styled from 'styled-components'
import { motion } from 'framer-motion'
import { light, primary } from '../../data/GlobalData'

export const FormSection = styled.div`
	padding: 1rem;
	max-width: 90vw;
	max-height: 90vh;
	@media screen and (max-width: 1000px) {
		max-width: 95vw;
	}
`

export const ContactInfo = styled.h2`
	margin: 1rem;
	color: ${light};
	&:first-child {
		margin-bottom: -1rem;
		/* line-height: 0.2; */
	}
`

export const FormTitle = styled.h2`
	margin-bottom: 1rem;
	font-size: 2rem;
	font-weight: 600;
`

export const FormRow = styled.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	align-items: center;
	@media screen and (max-width: 768px) {
		flex-direction: column-reverse;
	}
`

export const FormColumn = styled.div`
	margin: 1rem;
	background: white;
	border: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 8px;
	flex-direction: column;
	
	@media screen and (max-width: 768px) {
		min-width: 75vw;
	}
`

export const HeroColumn = styled.div`
	margin: 1rem;
	min-height: 50vh;
	min-width: 50vw;
	background: linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.6)),
		url('./assets/hero_image2.jpg');
	background-position: center;
	background-size: cover;
	display: flex;
	justify-content: flex-end;
	align-items: flex-end;
	border-radius: 8px;
	flex-direction: column;
	@media screen and (max-width: 900px) {
		min-width: 44vw;
		margin: 0;
	}
	@media screen and (max-width: 768px) {
		min-height: 30vh;
		min-width: 75vw;

	}
	
`

export const FormWrapper = styled.form`
	width: 100%;
`

export const FormMessage = styled(motion.div)`
	color: ${({ error }) => (error ? 'red' : primary)};
	padding: 5px;
	text-align: center;
	margin-top: 1rem;
`

export const FormInputRow = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	margin-bottom: 1.4rem;
`

export const FormInput = styled.input`
	display: block;
	padding-left: 16px;
	outline: none;
	border-radius: 2px;
	height: 40px;
	width: 100%;
	border: none;
	border-left: 1px solid #cfcfcf;
	font-size: 1rem;
`

export const FormTextArea = styled.textarea`
	/* display: block; */
	padding-left: 16px;
	padding-top: 10px;
	outline: none;
	border-radius: 2px;
	height: 80px;
	width: 100%;
	border: none;
	border-left: 1px solid #cfcfcf;
	font-size: 1rem;
	resize: none;
`

export const FormButton = styled.button`
	border-radius: 4px;
	background: none;
	margin-top: 1.5rem;
	white-space: nowrap;
	outline: none;
	width: 100%;
	font-size: 1.4rem;
	padding: 5px 15px;
	border: 2px solid black;
	cursor: pointer;
	position: relative;
	overflow: hidden;
	&:hover {
		color: white;
		transition: background-color 0.4s ease-in;
		background-color: black;
	}
`