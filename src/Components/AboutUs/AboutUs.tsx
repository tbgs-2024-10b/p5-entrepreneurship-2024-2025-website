import { FC } from 'react'

import { SectionContainer, SectionTitle } from 'Components/Common'

import { Text } from './Styles'

const AboutUs: FC = () => {
	return (
		<SectionContainer id='aboutUs'>
			<SectionTitle>About Us</SectionTitle>
			<Text>
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Accusamus deleniti, ut consequuntur tenetur nesciunt excepturi
				quaerat asperiores minus aliquam cumque adipisci expedita iusto
				blanditiis maxime aut vero architecto quia cupiditate inventore.
				Impedit accusamus cum exercitationem ex ipsum reiciendis, iste
				numquam sequi atque esse consectetur quos quam, quibusdam dicta
				sed minus.
			</Text>
		</SectionContainer>
	)
}

export default AboutUs
