import { describe, expect, it } from "vitest";
import compile from "../src";
import type { Optimizations } from "../src/lib/optimization.d";

describe("Shorthand Issue", () => {
	it("should optimize shorthand properties correctly", () => {
		const cssInput = `
      .example {
        padding-top: 10px;
        padding-bottom: 10px;
        padding-left: 30px;
        padding-right: 10px;
      }
    `;

		const expectedOutput = `
      .example {
        padding: 10px 10px 10px 30px;
      }
    `;

		// Assuming optimizeCss is a function that optimizes the CSS input
		const optimizations: Optimizations = { paddingShortHand: true };
		const optimizedCss = compile(cssInput, { ...optimizations });
		expect(optimizedCss.trim().replaceAll(/\s/g, "")).toBe(
			expectedOutput.trim().replaceAll(/\s/g, ""),
		);
	});

	it("should handle mixed rules with padding or margin shorthand optimization", () => {
		const cssInput = `
      .example {
        background-color: yellow;
        padding-top: 10px;
        padding-bottom: 10px;
        padding-left: 30px;
        padding-right: 10px;
        color: black;
        margin-top: 5px;
        margin-bottom: 5px;
        margin-left: 15px;
        margin-right: 5px;
      }
    `;
		const expectedOutput =
			".example{background-color:yellow;color:black;padding:10px 10px 10px 30px;margin:5px 5px 5px 15px;}";

		const optimizations: Optimizations = {
			paddingShortHand: true,
			marginShortHand: true,
		};
		const optimizedCss = compile(cssInput, { ...optimizations });
		expect(optimizedCss.trim()).toBe(expectedOutput.trim());
	});
});
