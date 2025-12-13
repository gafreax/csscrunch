import { describe, expect, it } from "vitest";
import { tokenize } from "../src/lib/tokenize";

describe("Media Query Processing", () => {
	it("Properly handles media queries followed immediately by selectors", () => {
		// Create a test case that simulates the problematic scenario
		const css = `@media (max-width: 520px) {
      .test {
        display: block;
      }
    }.selector {
      background-color: #3AAEE0;
      color: red;
    }`;

		const tokens = tokenize(css);

		// Check that the selector has the correct properties
		expect(tokens[".selector"]).toBeDefined();
		expect(tokens[".selector"]).toContain("background-color:#3AAEE0");
		expect(tokens[".selector"]).toContain("color:red");

		// Check that the media query is properly parsed
		expect(tokens["@media (max-width: 520px)"]).toBeDefined();
		expect(tokens["@media (max-width: 520px)"]).toContain("display:block");
	});

	it("Handles multiple adjacent media queries and selectors", () => {
		const css = `@media (max-width: 520px) {
      .mobile {
        display: block;
      }
    }.selector1 {
      color: red;
    }@media (min-width: 1024px) {
      .desktop {
        display: flex;
      }
    }.selector2 {
      color: blue;
    }`;

		const tokens = tokenize(css);

		// Check all selectors are correctly processed
		expect(tokens[".selector1"]).toBeDefined();
		expect(tokens[".selector1"]).toContain("color:red");

		expect(tokens[".selector2"]).toBeDefined();
		expect(tokens[".selector2"]).toContain("color:blue");

		// Check media queries
		expect(tokens["@media (max-width: 520px)"]).toBeDefined();
		expect(tokens["@media (min-width: 1024px)"]).toBeDefined();
	});

	it("Preserves all properties in complex selectors after media queries", () => {
		const css = `@media (max-width: 520px) {
      .test {
        display: block;
      }
    }.complex-selector {
      background-color: #3AAEE0;
      border-radius: 4px;
      color: #ffffff;
      direction: ltr;
      font-family: Arial;
      font-size: 14px;
      font-weight: 400;
      letter-spacing: 0;
      line-height: 200%;
      width: auto;
      padding: 5px 20px;
    }`;

		const tokens = tokenize(css);

		// Check that all properties are preserved
		expect(tokens[".complex-selector"]).toBeDefined();
		expect(tokens[".complex-selector"]).toContain("background-color:#3AAEE0");
		expect(tokens[".complex-selector"]).toContain("border-radius:4px");
		expect(tokens[".complex-selector"]).toContain("color:#ffffff");
		expect(tokens[".complex-selector"]).toContain("direction:ltr");
		expect(tokens[".complex-selector"]).toContain("font-family:Arial");
		expect(tokens[".complex-selector"]).toContain("font-size:14px");
		expect(tokens[".complex-selector"]).toContain("font-weight:400");
		expect(tokens[".complex-selector"]).toContain("letter-spacing:0");
		expect(tokens[".complex-selector"]).toContain("line-height:200%");
		expect(tokens[".complex-selector"]).toContain("width:auto");
		expect(tokens[".complex-selector"]).toContain("padding:5px 20px");
	});
});
