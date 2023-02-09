import React, { useState } from 'react'
import { Button, Container } from '../../globalStyles'
import Navbar from '../Navbar/Navbar'
import ContactForm from '../ContactForm/ContactForm'
import { HeroSection, HeroHeading, HeroText, ButtonWrapper } from './HeroStyles'
import { useInView } from 'react-intersection-observer'
import { Link as LinkScroll } from 'react-scroll'
import Modal from '../Modal/Modal'

const Hero = ({ heroData }) => {
    const [showModal, setShowModal] = useState(false)
	const { heading, greeting, heroImage, logo, contactImage, phone, located} = heroData
    const { ref, inView } = useInView({
		rootMargin: '-80px',
	})
    return (
        <>
			<HeroSection ref={ref} bgImg={heroImage.url}>
				<Container>
					<HeroHeading>{heading}</HeroHeading>
					<HeroText>{greeting}</HeroText>
					<ButtonWrapper>
						<Button onClick={() => {setShowModal(true)}}>
							Contact
						</Button>
						<LinkScroll to={'about'} smooth={true} duration={500} offset={-79}>
							<Button> Scroll ↯ </Button>
						</LinkScroll>
					</ButtonWrapper>
				</Container>
			</HeroSection>
			<Navbar logo={logo} hide={inView} setShowModal={setShowModal} />
			<Modal show={showModal} onHide={() => setShowModal(false)}>
				<ContactForm image={contactImage} phone={phone} located={located} />
			</Modal>
		</>
    )
}

export default Hero