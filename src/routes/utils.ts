export function shuffle<T>(array: T[]) {
	let indexArray = array.length;

	while (indexArray--) {
		const randomIndex = Math.floor(Math.random() * indexArray + 1);

		// Switch between current index and the random index
		const tempValue = array[indexArray];
		array[indexArray] = array[randomIndex];
		array[randomIndex] = tempValue;
	}

	return array;
}

export function get_twemoji_path(emoji: string) {
	const code = [...emoji].map((char) => char.codePointAt(0)!.toString(16)).join('-');
	return `/twemoji/${code}.svg`
}
