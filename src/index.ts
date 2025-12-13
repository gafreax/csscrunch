import { compact } from "./lib/compact";
import type { Optimizations } from "./lib/optimization.d";
import { stringify } from "./lib/stringify";
import { cleanCss, tokenize } from "./lib/tokenize";

export { tokenize, stringify, compact };

const compile = (css: string, optimization?: Optimizations): string => {
	const cleanedCss = cleanCss(css);
	const tokens = tokenize(cleanedCss, optimization);
	const entries = Object.entries(tokens).map(([key, value]) => {
		if (key.startsWith("@media")) {
			const compiledRulesForMedia = compile(value, optimization);
			return [key, compiledRulesForMedia];
		}
		return [key, value];
	});
	const mediaOptimizedRules = Object.fromEntries(entries);
	const compactedTokens = compact(mediaOptimizedRules);
	return stringify(compactedTokens);
};

export default compile;
