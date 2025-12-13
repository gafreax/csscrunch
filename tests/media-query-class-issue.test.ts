import { describe, expect, it } from "vitest";
import compile from "../src/index";

describe("Media Query Class Selector Issue", () => {
	it("preserves class selectors that immediately follow media queries", () => {
		const css = `@media (max-width: 520px) {
      .test {
        display: block;
      }
    }.class-selector {
      background-color: #3AAEE0;
      color: red;
    }`;

		const result = compile(css);

		// The class selector should be preserved with the dot
		expect(result).toContain(".class-selector{");
		// Check that there's no instance of the selector without the dot
		// We need to check for a specific pattern to avoid false positives
		expect(
			result.includes("class-selector{") &&
				!result.includes(".class-selector{"),
		).toBe(false);
		expect(result).toContain("background-color:#3AAEE0");
	});

	it("handles multiple properties in selectors after media queries", () => {
		const css = `@media (max-width: 520px) {
      .mobile {
        display: none;
      }
    }.complex-selector {
      background-color: #3AAEE0;
      border-radius: 4px;
      color: #ffffff;
      direction: ltr;
      font-family: inherit;
      font-size: 14px;
      font-weight: 400;
      letter-spacing: 0;
      line-height: 200%;
      padding: 5px 20px;
    }`;

		const result = compile(css);

		// Check that all properties are preserved
		expect(result).toContain(".complex-selector{");
		// Check that there's no instance of the selector without the dot
		expect(
			result.includes("complex-selector{") &&
				!result.includes(".complex-selector{"),
		).toBe(false);
		expect(result).toContain("background-color:#3AAEE0");
		expect(result).toContain("border-radius:4px");
		expect(result).toContain("color:#ffffff");
		expect(result).toContain("direction:ltr");
	});
});
