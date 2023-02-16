import React from 'react'
import {
	InfoSection,
	BottomLine,
	Image,
	InfoWrapper,
	InfoNumber,
	InfoText,
	InfoDesc,
	InfoRow,
	InfoColumn,
	InfoHeading,
} from './InfoStyles'

const Info = ({ id, aboutData }) => {
	const  { heading, description, bottomLine, sideImage } = aboutData
    return (
        <InfoSection id={id}>
			<InfoRow>
				<InfoColumn>
					<Image sideImg={sideImage.url} alt="Jacob Kingsfather | Owner" />
				</InfoColumn>
				<InfoColumn>
					<InfoWrapper>
						<InfoHeading>{heading}</InfoHeading>
						<InfoDesc>{description}</InfoDesc>

						<BottomLine>
							{bottomLine.map((item, index) => (
								<InfoColumn key={index}>
									<InfoNumber>{item.number}</InfoNumber>
									<InfoText>{item.description}</InfoText>
								</InfoColumn>
							))}
						</BottomLine>
					</InfoWrapper>
				</InfoColumn>
			</InfoRow>
		</InfoSection>
    )
}

export default Info