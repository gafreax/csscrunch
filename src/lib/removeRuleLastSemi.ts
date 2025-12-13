export function removeRuleLastSemi(str: string): string {
	return str.replace(/;\s*}/g, "}");
}
