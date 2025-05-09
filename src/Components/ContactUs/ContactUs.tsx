import { FC } from 'react'

import { SectionContainer, SectionTitle } from 'Components/Common'

import { Text } from './Styles'

const ContactUs: FC = () => {
	return (
		<SectionContainer id='contactUs'>
			<SectionTitle>Contact Us</SectionTitle>
			<Text>
				I don&apos;t know what to put here, but I want to make sure that
				you can contact us if you need to. So, here is a placeholder
				text. I hope you don&apos;t contact us, but if you do, I hope
				you have a good reason to do so. If you have a good reason to
				contact us, please do so. If you don&apos;t have a good reason
				to contact us, please don&apos;t. We don&apos;t want to hear
				from you if you don&apos;t have a good reason to contact us. Why
				not reach out only when it truly matters? How about that? We
				might not even read your message. We might just ignore it. Lorem
				ipsum dolor sit amet
			</Text>
		</SectionContainer>
	)
}

export default ContactUs
