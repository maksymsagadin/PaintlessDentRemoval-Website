import React, { useEffect, useState } from 'react'
import { Section } from '../../globalStyles'
import { MasonryGrid, WorkContainer, WorkImageWrapper, Image, WorkHeading } from './WorkSectionStyles'
import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'
import Modal from '../Modal/Modal'
import { Img, ImgWrapper, Subtitle } from '../Content/ContentStyles'

const WorkSection = ({ id, galleryData}) => {
	const { headline, galleryImages } = galleryData
	console.log(galleryData)
    const animation = useAnimation()
	const [showModal, setShowModal] = useState(false)
	const [selectedImage, setSelectedImage] = useState(0)
	const { ref, inView } = useInView({
		threshold: 0.2,
	})

	useEffect(() => {
		if (inView) {
			animation.start({
				opacity: 1,
				scale: 1,
			})
		}
	}, [inView, animation])

	const handleClick = (index) => {
		setShowModal(true)
		setSelectedImage(index)
	}

	return (
		<>
			<Section id={id} >
				<WorkContainer>
					<WorkHeading
						initial={{ opacity: 0, scale: 0.3 }}
						transition={{ duration: 0.4 }}
						animate={animation}
						ref={ref}
					>
						{headline}
					</WorkHeading>
					<MasonryGrid>
						{galleryImages.map((image, index) => (
							<WorkImageWrapper
								animate={animation}
								initial={{
									opacity: 0,
									scale: 0.3,
								}}
								transition={{ duration: 0.8 }}
								className={image.size}
								key={image.id}
								onClick={() => handleClick(index)}
							>
								<Image src={image.image.url} alt={image.description} ></Image>
							</WorkImageWrapper>
						))}
					</MasonryGrid>
				</WorkContainer>
			</Section>
			<Modal show={showModal} onHide={() => setShowModal(false)}>
				<ImgWrapper>
					<Img src={galleryImages[selectedImage].image.url} alt={galleryImages[selectedImage].description} />
				</ImgWrapper>
				<Subtitle mt inverse>{galleryImages[selectedImage].description}</Subtitle>
			</Modal>
		</>
	)
}

export default WorkSection