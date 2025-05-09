import { FC } from 'react'

import { SectionContainer, SectionTitle } from 'Components/Common'

import { Content, Image, Video } from './Styles'

const Ads: FC = () => {
	return (
		<SectionContainer id='ads'>
			<SectionTitle>Ads</SectionTitle>
			<Content>
				<Video src={`${__PUBLIC_URL__}/ads/1.mp4`} controls></Video>
				<Video src={`${__PUBLIC_URL__}/ads/2.mp4`} controls></Video>
				<Video src={`${__PUBLIC_URL__}/ads/3.mp4`} controls></Video>
				<Video src={`${__PUBLIC_URL__}/ads/4.mp4`} controls></Video>
				<Video src={`${__PUBLIC_URL__}/ads/5.mp4`} controls></Video>
				<Video src={`${__PUBLIC_URL__}/ads/6.mp4`} controls></Video>
				<Video src={`${__PUBLIC_URL__}/ads/7.mp4`} controls></Video>
				<Video src={`${__PUBLIC_URL__}/ads/8.mp4`} controls></Video>
				<Image src={`${__PUBLIC_URL__}/ads/9.jfif`} alt='Ad image' />
				<Image src={`${__PUBLIC_URL__}/ads/10.jfif`} alt='Ad image' />
			</Content>
		</SectionContainer>
	)
}

export default Ads
