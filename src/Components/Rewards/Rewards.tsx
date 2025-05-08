import { FC, useCallback, useState } from 'react'

import { SectionContainer, SectionTitle } from 'Components/Common'

import Products from 'Constants/Products'

import {
	Button,
	Image,
	ImagePlaceholder,
	Info,
	PreviousImage,
	PreviousImages,
} from './Styles'

const Rewards: FC = () => {
	const [PreviousProductIds, SetPreviousProductIds] = useState<string[]>([])
	const [DidStart, SetDidStart] = useState(false)
	const [IsFading, SetIsFading] = useState(false)

	const Reroll = useCallback(() => {
		SetDidStart(true)

		const randomProduct =
			// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
			Products[Math.floor(Math.random() * Products.length)]!

		SetPreviousProductIds(prev => [...prev, randomProduct.id])

		SetIsFading(true)
	}, [])

	const Restart = useCallback(() => {
		SetDidStart(false)
		SetPreviousProductIds([])
	}, [])

	return (
		<SectionContainer id='rewards'>
			<SectionTitle>Rewards</SectionTitle>

			{DidStart ? (
				<Image
					alt="Game's Image"
					src={
						Products.find(
							product =>
								product.id ===
								PreviousProductIds[
									PreviousProductIds.length - 1
								],
						)?.imageSrc
					}
					onLoad={() => {
						SetIsFading(false)
					}}
					onTransitionEnd={() => {
						SetIsFading(false)
					}}
					className={IsFading ? 'faded' : 'visible'}
				/>
			) : (
				<ImagePlaceholder>
					<Info>Press start to play!</Info>
				</ImagePlaceholder>
			)}

			{DidStart ? (
				PreviousProductIds.length >= 3 ? (
					<>
						<Info>Congratulations! It&apos;s done! 🎉🎉🎉</Info>
						<Button onClick={Restart}>Restart</Button>
					</>
				) : (
					<>
						<Info>&nbsp;</Info>
						<Button onClick={Reroll}>Reroll</Button>
					</>
				)
			) : (
				<>
					<Info>&nbsp;</Info>
					<Button onClick={Reroll}>Start</Button>
				</>
			)}

			<PreviousImages>
				{PreviousProductIds.map((productId, index) => (
					<PreviousImage
						key={index}
						alt="Game's Image"
						src={
							Products.find(product => product.id === productId)
								?.imageSrc
						}
					/>
				))}
			</PreviousImages>
		</SectionContainer>
	)
}

export default Rewards
