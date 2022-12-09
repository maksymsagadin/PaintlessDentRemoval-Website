import React, { useState } from 'react'
import { Button, Container } from '../../globalStyles'
import Navbar from '../Navbar/Navbar'
import ContactForm from '../ContactForm/ContactForm'
import { HeroSection, HeroHeading, HeroText, ButtonWrapper } from './HeroStyles'
import { useInView } from 'react-intersection-observer'
import { Link as LinkScroll } from 'react-scroll'
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
					<HeroHeading>Dents&Things</HeroHeading>
					<HeroText>We help you with all of your automotive services</HeroText>
					<ButtonWrapper>
						<Button 
							big 
							onClick={() => {
								setShowModal(true);
							}}>
							Contact
						</Button>
						<Button >
							<LinkScroll to={'about'} smooth={true} duration={500}>
								Scroll ↯
							</LinkScroll>
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