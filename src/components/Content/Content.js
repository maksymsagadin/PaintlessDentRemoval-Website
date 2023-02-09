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
	heading,
	description,
	buttonText,
	sideImage,
	textColor,
	backgroundColor,
	row,
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
			<ContentSec color={backgroundColor} ref={ref}>
				<Container>
					<ContentRow row={row}>
						<ContentColumn row={row}>
							<TextWrapper>
								<ContentHeading
									initial={initial}
									transition={transition}
									animate={animation}
									color={textColor}
								>
									{heading}
								</ContentHeading>
								<Subtitle
									initial={initial}
									transition={{ ...transition, delay: 0.7 }}
									animate={animation}
									color={textColor}
								>
									{description}
								</Subtitle>

								<ContentButton
									initial={initial}
									transition={{ ...transition, delay: 1 }}
									animate={animation}
									color={textColor}
									onClick={() => {
										setShowModal(true);
									}}
								>
									{buttonText}
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
									src={sideImage.url}
									alt={heading}
									initial={{rotate: !row ? -3 : 3 }}
									whileHover={{ rotate: 0, scale: 1.0 }}
									transition={{ duration: 0.5 }}
								/>
							</ImgWrapper>
						</ContentColumn>
					</ContentRow>
				</Container>
			</ContentSec>
			<Modal show={showModal} onHide={() => setShowModal(false)}>
				<ImgWrapper>
					<Img src={sideImage.url} alt={heading} />
				</ImgWrapper>
				<Subtitle mt color={'black'}>{description}</Subtitle>
			</Modal>
		</>
    )
}

export default Content