import type { Tokens } from "./tokenize.d";

/**
 * Compact the tokens
 * @param Tokens that will be compacted
 * @returns compacted Tokens
 */
export const compact = (tokens: Tokens): Tokens => {
	const compactedTokens: Tokens = {};
	const keys = Object.keys(tokens);

	let currentGroup: string[] = [];
	let currentValue: string | null = null;
	let isMediaGroup = false;

	const flush = () => {
		if (currentGroup.length > 0 && currentValue !== null) {
			if (isMediaGroup) {
				for (const mediaKey of currentGroup) {
					compactedTokens[mediaKey] = currentValue;
				}
			} else {
				compactedTokens[currentGroup.join(",")] = currentValue;
			}
		}
	};

	for (const key of keys) {
		const value = tokens[key];
		const isMedia = key.includes("@media");

		if (currentValue === value && isMedia === isMediaGroup && !isMedia) {
			currentGroup.push(key);
		} else {
			flush();
			currentGroup = [key];
			currentValue = value;
			isMediaGroup = isMedia;
		}
	}
	flush();

	return compactedTokens;
};
