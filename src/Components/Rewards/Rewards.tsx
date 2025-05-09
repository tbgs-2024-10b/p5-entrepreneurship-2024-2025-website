import { FC, useCallback, useEffect, useState } from 'react'

import { toast } from 'react-toastify'

import { SectionContainer, SectionTitle } from 'Components/Common'

import WeightedRandom, { WeightedItem } from 'Utils/WeightedRandom'

import Products from 'Constants/Products'

import {
	Button,
	Image,
	ImagePlaceholder,
	Info,
	PreviousImage,
	PreviousImages,
} from './Styles'

interface Item {
	id: string
	imageSrc: string
}

const ItemsNoChest: Item[] = [...Products]

const ChestItem = {
	id: '6c880386-4ab2-49b3-bed4-5b36b84990b5',
	imageSrc: `${__PUBLIC_URL__}/chest.png`,
}

const Items: Item[] = [...ItemsNoChest, ChestItem]

const Rewards: FC = () => {
	const [PreviousItemsIds, SetPreviousItemsIds] = useState<string[]>([])
	const [DidStart, SetDidStart] = useState(false)
	const [IsFading, SetIsFading] = useState(false)
	const [IsShowing, SetIsShowing] = useState(false)

	const Reroll = useCallback(() => {
		SetDidStart(true)

		let randomItem: Item

		if (PreviousItemsIds.length === 0) {
			// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
			randomItem = WeightedRandom([
				...ItemsNoChest.map(
					item =>
						[
							item,
							(1 - 0.05) / ItemsNoChest.length,
						] as WeightedItem<Item>,
				),
				[ChestItem, 0.05],
			])!
		} else if (PreviousItemsIds.length === 1) {
			const weights: WeightedItem<Item>[] = [
				...ItemsNoChest.filter(
					item => item.id !== PreviousItemsIds[0],
				).map(
					(item, _, arr) =>
						[
							item,
							(1 - 0.05 - 0.3) / arr.length,
						] as WeightedItem<Item>,
				),
				[ChestItem, 0.05],
			]

			if (PreviousItemsIds[0] !== ChestItem.id) {
				weights.push([
					// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
					ItemsNoChest.find(item => item.id === PreviousItemsIds[0])!,
					0.3,
				])
			}

			// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
			randomItem = WeightedRandom(weights)!
		} else if (PreviousItemsIds.length === 2) {
			if (PreviousItemsIds[0] === PreviousItemsIds[1]) {
				const weights: WeightedItem<Item>[] = [
					...ItemsNoChest.filter(
						item => item.id !== PreviousItemsIds[0],
					).map(
						(item, _, arr) =>
							[
								item,
								(1 - 0.05 - 0.1) / arr.length,
							] as WeightedItem<Item>,
					),
					[ChestItem, 0.05],
				]

				if (PreviousItemsIds[0] !== ChestItem.id) {
					weights.push([
						// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
						ItemsNoChest.find(
							item => item.id === PreviousItemsIds[0],
						)!,
						0.1,
					])
				}

				// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
				randomItem = WeightedRandom(weights)!
			} else {
				const weights: WeightedItem<Item>[] = [
					...ItemsNoChest.filter(
						item => !PreviousItemsIds.includes(item.id),
					).map(
						(item, _, arr) =>
							[
								item,
								(1 - 0.05 - 0.3 - 0.3) / arr.length,
							] as WeightedItem<Item>,
					),
					[ChestItem, 0.05],
				]

				if (PreviousItemsIds[0] !== ChestItem.id) {
					weights.push([
						// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
						ItemsNoChest.find(
							item => item.id === PreviousItemsIds[0],
						)!,
						0.3,
					])
				}

				if (PreviousItemsIds[1] !== ChestItem.id) {
					weights.push([
						// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
						ItemsNoChest.find(
							item => item.id === PreviousItemsIds[1],
						)!,
						0.3,
					])
				}

				// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
				randomItem = WeightedRandom(weights)!
			}
		}

		SetPreviousItemsIds(prev => [...prev, randomItem.id])

		SetIsFading(true)
	}, [PreviousItemsIds])

	const Restart = useCallback(() => {
		SetDidStart(false)
		SetPreviousItemsIds([])
	}, [])

	const Show = useCallback(() => {
		SetIsShowing(true)
	}, [])

	useEffect(() => {
		if (PreviousItemsIds.length !== 3) return

		if (
			PreviousItemsIds[0] === PreviousItemsIds[1] &&
			PreviousItemsIds[0] === PreviousItemsIds[2]
		) {
			toast.info(
				'Congratulations! You got the same item three times! 🎉🎉🎉',
			)

			if (PreviousItemsIds[0] !== ChestItem.id) {
				toast.info(
					"Wow! You got the chest item three times! That's a very rare event! 🎉🎉🎉🎉🎉",
				)
			}
		}
	}, [PreviousItemsIds])

	return (
		<SectionContainer id='rewards'>
			<SectionTitle>Rewards</SectionTitle>

			{!IsShowing ? (
				<Button onClick={Show}>Show</Button>
			) : (
				<>
					{DidStart ? (
						<Image
							alt="Game's Image"
							src={
								Items.find(
									item =>
										item.id ===
										PreviousItemsIds[
											PreviousItemsIds.length - 1
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
						PreviousItemsIds.length >= 3 ? (
							<>
								<Info>
									Congratulations! It&apos;s done! 🎉🎉🎉
								</Info>
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
						{PreviousItemsIds.map((itemId, index) => (
							<PreviousImage
								key={index}
								alt="Game's Image"
								src={
									Items.find(item => item.id === itemId)
										?.imageSrc
								}
							/>
						))}
					</PreviousImages>
				</>
			)}
		</SectionContainer>
	)
}

export default Rewards
