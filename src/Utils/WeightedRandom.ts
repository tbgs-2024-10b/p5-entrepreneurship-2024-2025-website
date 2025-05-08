export type WeightedItem<T> = [T, number]

const WeightedRandom = <T>(items: WeightedItem<T>[]): T | undefined => {
	console.log(items)
	// Filter out items with non-positive weights.
	const validItems = items.filter(item => item[1] > 0)

	if (validItems.length === 0) return undefined

	const totalWeight = validItems.reduce((sum, item) => sum + item[1], 0)

	if (totalWeight <= 0) return undefined

	let randomPoint = Math.random() * totalWeight

	for (const [value, weight] of validItems) {
		randomPoint -= weight

		if (randomPoint <= 0) {
			return value
		}
	}

	// Fallback: Should ideally not be reached if logic is correct and weights are positive.
	// This can happen due to floating point inaccuracies if randomPoint is extremely close to 0
	// after the last subtraction. Returning the last valid item is a reasonable fallback.
	return validItems[validItems.length - 1]?.[0]
}

export default WeightedRandom
