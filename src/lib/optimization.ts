import type { Optimizations, Sides } from "./optimization.d";

type SpacingRule = "padding" | "margin";
type Side = "top" | "right" | "bottom" | "left";

const REGEX_FIND_PADDING =
	/(\s*)(padding)-((top|right|bottom|left):[^;]+;?)(\s*)/g;
const REGEX_FIND_MARGIN =
	/(\s*)(margin)-((top|right|bottom|left):[^;]+;?)(\s*)/g;
const REGEX_FIND_HEX_COLOR = /([\s:])+(#[0-9A-Fa-f]{6})/g;
const REGEX_FIND_ZERO_UNIT = /([:\s])0(px|%|em|rem)/g;

export const optimizeZeroUnitsRule = (ruleValue: string): string => {
	return ruleValue.replace(
		REGEX_FIND_ZERO_UNIT,
		(_match: string, p1: string) => `${p1}0`,
	);
};

export const isAllSideEqual = ({
	left,
	right,
	top,
	bottom,
}: Sides): boolean => {
	return left === right && right === top && top === bottom;
};

export const existsNullSides = ({
	left,
	right,
	top,
	bottom,
}: Sides): boolean => {
	if ([left, right, top, bottom].includes(undefined)) {
		return true;
	}
	if ([left, right, top, bottom].includes("")) {
		return true;
	}
	return false;
};

export const isVerticalAndHorizontalEqual = ({
	top,
	bottom,
	left,
	right,
}: Sides): boolean => {
	return top === bottom && left === right;
};

export const isAllSideDifferent = ({
	left,
	right,
	top,
	bottom,
}: Sides): boolean => {
	return new Set([left, right, top, bottom]).size === 4;
};

export const reduceHexColor = (color: string): string => {
	if (color === "" || color.length !== 7 || color[0] !== "#") return color;
	if (color[1] === color[2] && color[3] === color[4] && color[5] === color[6]) {
		return `#${color[1]}${color[3]}${color[5]}`;
	}
	return color;
};

export const optimizeColor = (ruleValue: string): string => {
	return ruleValue.replace(
		REGEX_FIND_HEX_COLOR,
		(_match: string, prefix: string, color: string) => {
			const isColumn = prefix[prefix.length - 1] === ":";
			const reducedHexColor = reduceHexColor(color);
			return isColumn ? `:${reducedHexColor}` : ` ${reducedHexColor}`;
		},
	);
};

export const getSideValue = (params: {
	rule: SpacingRule;
	ruleValue: string;
	side: Side;
}): { value: string; isImportant: boolean } => {
	const { rule, ruleValue, side } = params;
	const sideProp = `${rule}-${side}:`;
	const trimmedRuleValue = ruleValue.trim().replace(/\s*:\s*/g, ":");
	if (!trimmedRuleValue.includes(sideProp)) {
		return { value: "", isImportant: false };
	}
	const startSideValue = trimmedRuleValue.indexOf(sideProp) + sideProp.length;
	const endSideValue = trimmedRuleValue.indexOf(
		";",
		trimmedRuleValue.indexOf(sideProp),
	);
	const value = trimmedRuleValue.substring(
		startSideValue,
		endSideValue > 0 ? endSideValue : trimmedRuleValue.length,
	);
	const valueWithoutImportant = value.replace("!important", "").trim();
	const isImportant = value.includes("!important");
	return {
		value: valueWithoutImportant,
		isImportant,
	};
};

export const createShorthandProperty = (
	ruleValue: string,
	rule: SpacingRule,
): string => {
	// Extract the individual side values from the rule value
	const { value: bottom, isImportant: bottomIsImportant } = getSideValue({
		rule,
		ruleValue,
		side: "bottom",
	});
	const { value: left, isImportant: leftIsImportant } = getSideValue({
		rule,
		ruleValue,
		side: "left",
	});
	const { value: right, isImportant: rightIsImportant } = getSideValue({
		rule,
		ruleValue,
		side: "right",
	});
	const { value: top, isImportant: topIsImportant } = getSideValue({
		rule,
		ruleValue,
		side: "top",
	});

	const importantCount: number = [
		bottomIsImportant,
		leftIsImportant,
		rightIsImportant,
		topIsImportant,
	].filter((v) => v).length;
	// Don't optimize if any side is missing
	// Should not optimize if one of the sides is important but not all
	if (
		existsNullSides({ left, right, top, bottom }) ||
		notAllSideHasImportant(importantCount)
	) {
		return ruleValue;
	}

	// Build the shorthand property string
	let shorthandValue = "";

	if (isAllSideEqual({ left, right, top, bottom })) {
		shorthandValue = `${rule}:${top}${importantCount === 4 ? " !important" : ""};`;
	} else if (isVerticalAndHorizontalEqual({ top, bottom, left, right })) {
		shorthandValue = `${rule}:${top} ${right}${importantCount === 4 ? " !important" : ""};`;
	} else {
		const sides = [top, right, bottom, left].filter((v) => v !== "");
		shorthandValue = `${rule}:${sides.join(" ")}${importantCount === 4 ? " !important" : ""};`;
	}
	const ruleWithoutPaddingOrMargin = ruleValue
		.replace(rule === "padding" ? REGEX_FIND_PADDING : REGEX_FIND_MARGIN, "")
		.trim();
	const ruleWithoutPaddingOrMarginLength = ruleWithoutPaddingOrMargin.length;
	if (
		ruleWithoutPaddingOrMarginLength === 0 ||
		ruleWithoutPaddingOrMargin.charAt(ruleWithoutPaddingOrMarginLength - 1) ===
			";"
	) {
		return ruleWithoutPaddingOrMargin + shorthandValue;
	}
	return `${ruleWithoutPaddingOrMargin};${shorthandValue}`;
};

export const optimizeRule = (
	ruleValue: string,
	optimizations?: Optimizations,
): string => {
	if (optimizations === undefined) {
		return ruleValue;
	}
	let optimized = ruleValue;
	if (
		optimizations.paddingShortHand !== undefined &&
		optimizations.paddingShortHand
	) {
		optimized = createShorthandProperty(optimized, "padding");
	}
	if (
		optimizations.marginShortHand !== undefined &&
		optimizations.marginShortHand
	) {
		optimized = createShorthandProperty(optimized, "margin");
	}
	if (
		optimizations.removeZeroUnits !== undefined &&
		optimizations.removeZeroUnits
	) {
		optimized = optimizeZeroUnitsRule(optimized);
	}
	if (
		optimizations.optimizeColors !== undefined &&
		optimizations.optimizeColors
	) {
		optimized = optimizeColor(optimized);
	}
	return optimized;
};

export const removeComments = (css: string): string => {
	return css.replace(/\/\*[\s\S]*?\*\//g, "");
};

export const removeDuplicates = (str: string, chars: string[]): string => {
	chars.forEach((char) => {
		const regex = new RegExp(`\\${char}{2,}`, "g");
		str = str.replace(regex, char);
	});
	return str;
};

function notAllSideHasImportant(importantCount: number): boolean {
	return importantCount >= 1 && importantCount < 4;
}
