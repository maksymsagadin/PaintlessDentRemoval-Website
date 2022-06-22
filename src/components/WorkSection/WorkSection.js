import React, { useEffect, useState } from 'react'
import { Section } from '../../globalStyles'
import { MasonryGrid, WorkContainer, WorkImageWrapper, Image, WorkHeading } from './WorkSectionStyles'
import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'
import Modal from '../Modal/Modal'
import { Img, ImgWrapper, Subtitle } from '../Content/ContentStyles'
import { workData } from '../../data/WorkData'

const WorkSection = () => {
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
			<Section>
				<WorkContainer>
					<WorkHeading
						initial={{ opacity: 0, scale: 0.3 }}
						transition={{ duration: 0.4 }}
						animate={animation}
						ref={ref}
					>
						See More...
					</WorkHeading>
					<MasonryGrid>
						{workData.map((item, index) => (
							<WorkImageWrapper
								animate={animation}
								initial={{
									opacity: 0,
									scale: 0.3,
								}}
								transition={{ duration: 0.8 }}
								className={item.class}
								key={index}
								onClick={() => handleClick(index)}
							>
								<Image src={item.img}></Image>
							</WorkImageWrapper>
						))}
					</MasonryGrid>
				</WorkContainer>
			</Section>
			<Modal show={showModal} onHide={() => setShowModal(false)}>
				<ImgWrapper>
					<Img src={workData[selectedImage].img} alt="image" />
				</ImgWrapper>
				<Subtitle mt inverse>{workData[selectedImage].description}</Subtitle>
			</Modal>
		</>
	)
}

export default WorkSection