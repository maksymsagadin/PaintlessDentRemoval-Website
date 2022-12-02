import React, { useState } from 'react'
import { Button, Container, MainHeading } from '../../globalStyles'
import Navbar from '../Navbar/Navbar'
import ContactForm from '../ContactForm/ContactForm'
import { HeroSection, HeroText, ButtonWrapper } from './HeroStyles'
import { useInView } from 'react-intersection-observer'
import Modal from '../Modal/Modal'

const Hero = () => {
    const [showModal, setShowModal] = useState(false)

    const { ref, inView } = useInView({
		rootMargin: '-80px',
	})

    return (
        <>
			<HeroSection ref={ref} id="hero">
				<Container>
					<MainHeading>Paintless Dent Repair.</MainHeading>
					<HeroText>We help you with all of your automotive services</HeroText>
					<ButtonWrapper>
						<Button 
							big 
							onClick={() => {
								setShowModal(true);
							}}>
							Get in contact
						</Button>
					</ButtonWrapper>
				</Container>
			</HeroSection>
			<Navbar hide={inView} setShowModal={setShowModal} />
			<Modal show={showModal} onHide={() => setShowModal(false)}>
				<ContactForm />
			</Modal>
		</>
    )
}

export default Hero