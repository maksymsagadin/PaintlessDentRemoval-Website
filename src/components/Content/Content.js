import React, { useEffect, useState } from 'react'
import { Container } from '../../globalStyles'
import {
	ContentSec,
	ContentRow,
	TextWrapper,
	ContentHeading,
	ContentButton,
	Subtitle,
	ImgWrapper,
	Img,
	ContentColumn,
} from './ContentStyles';
import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'
import Modal from '../Modal/Modal'

const Content = ({ 
	headline,
	description,
	buttonLabel,
	img,
	alt,
	inverse,
	reverse,
}) => {
    const [showModal, setShowModal] = useState(false)
	const initial = { opacity: 0, scale: 0.3 }
	const transition = { delay: 0.3, duration: 0.6 }
	const animation = useAnimation()

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

    return (
        <>
			<ContentSec inverse={inverse} ref={ref}>
				<Container>
					<ContentRow reverse={reverse}>
						<ContentColumn reverse={reverse}>
							<TextWrapper>
								<ContentHeading
									initial={initial}
									transition={transition}
									animate={animation}
									inverse={inverse}
								>
									{headline}
								</ContentHeading>
								<Subtitle
									initial={initial}
									transition={{ ...transition, delay: 0.7 }}
									animate={animation}
									inverse={inverse}
								>
									{description}
								</Subtitle>

								<ContentButton
									initial={initial}
									transition={{ ...transition, delay: 1 }}
									animate={animation}
									inverse={inverse}
									onClick={() => {
										setShowModal(true);
									}}
								>
									{buttonLabel}
								</ContentButton>
							</TextWrapper>
						</ContentColumn>
						<ContentColumn
							initial={animation}
							transition={transition}
							animate={animation}
						>
							<ImgWrapper>
								<Img
									src={img}
									alt={alt}
									initial={{rotate: reverse ? -3 : 3 }}
									whileHover={{ rotate: 0, scale: 1.0 }}
									transition={{ duration: 0.5 }}
								/>
							</ImgWrapper>
						</ContentColumn>
					</ContentRow>
				</Container>
			</ContentSec>
			<Modal show={showModal} onHide={() => setShowModal(false)}>
				<ContentHeading inverse='true'>{headline}</ContentHeading>
				<ImgWrapper>
					<Img src={img} alt={alt} />
				</ImgWrapper>
				<Subtitle mt inverse='true'>{description}</Subtitle>
				
			</Modal>
		</>
    )
}

export default Content