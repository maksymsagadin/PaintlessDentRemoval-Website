import React, { useEffect } from 'react'
import { Container } from '../../globalStyles'
import {
	FeatureText,
	FeatureSection,
	FeatureTitle,
	FeatureWrapper,
	FeatureColumn,
	FeatureImageWrapper,
	FeatureName,
	FeatureTextWrapper,
	FeatureMainText,
} from './FeaturesStyles'
import Content from '../Content/Content'
import { useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Features = ({ id, servicesData }) => {
	const { heading, description, services } = servicesData
    const initial = {
		scale: 0.2,
		y: 40,
		opacity: 0,
	}
	const { ref, inView } = useInView({
		threshold: 0.2,
	})
	const animation = useAnimation()

	useEffect(() => {
		if (inView) {
			animation.start({
				scale: 1,
				y: 0,
				opacity: 1,
			})
		}
	}, [inView, animation])

	return (
		<div id={id}>
		<FeatureSection >
			<Container ref={ref}>
				<FeatureTextWrapper
					initial={initial}
					animate={animation}
					transition={{ duration: 0.5 }}
					>
					<FeatureTitle>
						{heading}
					</FeatureTitle>
					<FeatureMainText>
						{description}
					</FeatureMainText>
				</FeatureTextWrapper>
				<FeatureWrapper>
					{services.map((service, index) => (
						<FeatureColumn
							initial={initial}
							animate={animation}
							transition={{ duration: 0.7 + index * 0.1 }}
							key={index}
							>
							<FeatureImageWrapper>
								<img src={service.logo.url} alt={service.shortSummary} height={95} width={95}/>
							</FeatureImageWrapper>
							<FeatureName>{service.heading}</FeatureName>
							<FeatureText>{service.shortSummary}</FeatureText>
						</FeatureColumn>
					))}
				</FeatureWrapper>
			</Container>
		</FeatureSection>
		{services.map((service, index) => (
              <Content {...service} key={index} />
          ))}
		</div>
	)
}

export default Features