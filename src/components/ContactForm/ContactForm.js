import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import {
	FormColumn,
	HeroColumn,
	FormWrapper,
	FormInput,
	FormSection,
	FormRow,
	FormInputRow,
	FormTextArea,
	FormMessage,
	FormButton,
	FormTitle,
	ContactInfo,
} from './ContactFormStyles'

const ContactForm = ({ image, phone, located }) => {
	const form = useRef()
	const [error, setError] = useState(null)
	const [success, setSuccess] = useState(null)

	const sendEmail = (e) => {
		e.preventDefault()
		emailjs.sendForm('gmail', 'dentsndings', form.current, process.env.REACT_APP_EMAILJS)
			.then((result) => {
				setSuccess('Email was sent successfully!')
		  	}, (error) => {
				setError('There was an error sending your message, please give us a call instead.')
		})
		e.target.reset()
	}

	const messageVariants = {
		hidden: { y: 30, opacity: 0 },
		animate: { y: 0, opacity: 1, transition: { delay: 0.2, duration: 0.4 } },
	}
	
	const formData = [
		{ label: 'Name', value: 'name', type: 'text', required: 'true' },
		{ label: 'Email', value: 'email', type: 'email', required: 'true' },
		{ label: 'Car Info', value: 'carInfo', type: 'text', required: 'false' },
	]

    return (
        <FormSection>
			<FormRow>
				<HeroColumn bgImg={image.url} >
					<address>
						<ContactInfo>
							<a href={`tel:+1-${phone}`}>{phone}</a>
						</ContactInfo>
						<ContactInfo>
							{located}
						</ContactInfo>
					</address>
				</HeroColumn>
				<FormColumn>
					<FormTitle>Contact</FormTitle>
					<FormWrapper ref={form} onSubmit={sendEmail}>
						{formData.map((item, index) => (
							<FormInputRow key={index}>
								<FormInput
									type={item.type}
									placeholder={item.label}
									name={item.value}
									required={item.required}
								/>
							</FormInputRow>
						))}
						<FormTextArea placeholder='How may I help?' name='textContent' />
						<FormButton type='submit' value='Send'>Send</FormButton>
					</FormWrapper>
					{error && (
						<FormMessage
							variants={messageVariants}
							initial="hidden"
							animate="animate"
							error
							>
							{error}
						</FormMessage>
					)}
					{success && (
						<FormMessage
							variants={messageVariants}
							initial="hidden"
							animate="animate"
							>
							{success}
						</FormMessage>
					)}
				</FormColumn>
			</FormRow>
		</FormSection>
    )
}

export default ContactForm