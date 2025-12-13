import { describe, expect, it } from "vitest";
import { removeRuleLastSemi } from "../../src/lib/removeRuleLastSemi";

describe("removeRuleLastSemi", () => {
	it("should remove last semicolon", () => {
		expect(removeRuleLastSemi("{color: black;}")).toBe("{color: black}");
	});

	it("should not remove seimcolon if not last char of the rule", () => {
		expect(removeRuleLastSemi("{color: black; background: white;}")).toBe(
			"{color: black; background: white}",
		);
	});
});
