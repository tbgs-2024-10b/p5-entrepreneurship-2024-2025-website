import { FC, useCallback, useState } from 'react'

import { SectionContainer, SectionTitle } from 'Components/Common'

import Products from 'Constants/Products'

import { Button, Image, ImagePlaceholder, Info } from './Styles'

const Rewards: FC = () => {
	const [Streak, SetStreak] = useState(0)
	const [PreviousProductId, SetPreviousProductId] = useState<string | null>(
		null,
	)
	const [DidLose, SetDidLose] = useState(false)
	const [DidStart, SetDidStart] = useState(false)
	const [IsFading, SetIsFading] = useState(false)

	const Reroll = useCallback(() => {
		SetDidStart(true)

		const randomProduct =
			// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
			Products[Math.floor(Math.random() * Products.length)]!

		SetPreviousProductId(randomProduct.id)

		SetIsFading(true)

		if (PreviousProductId === null) {
			SetStreak(1)

			return
		}

		if (randomProduct.id === PreviousProductId) {
			SetStreak(prev => prev + 1)
		} else {
			SetDidLose(true)
		}
	}, [PreviousProductId])

	const Restart = useCallback(() => {
		SetStreak(0)
		SetDidLose(false)
		SetDidStart(false)
		SetPreviousProductId(null)
	}, [])

	return (
		<SectionContainer id='rewards'>
			<SectionTitle>Rewards</SectionTitle>

			{DidStart ? (
				<Image
					alt="Game's Image"
					src={
						Products.find(
							product => product.id === PreviousProductId,
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

			{DidLose ? (
				<>
					<Info>You lost! Press restart to try again!</Info>
					<Info>Your streak was {Streak}</Info>
					<Button onClick={Restart}>Restart</Button>
				</>
			) : DidStart ? (
				<>
					<Info>Streak: {Streak}</Info>
					<Info>&nbsp;</Info>
					<Button onClick={Reroll}>Reroll</Button>
				</>
			) : (
				<>
					<Info>&nbsp;</Info>
					<Info>&nbsp;</Info>
					<Button onClick={Reroll}>Start</Button>
				</>
			)}
		</SectionContainer>
	)
}

export default Rewards
