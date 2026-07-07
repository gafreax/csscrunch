import { defineConfig } from "tsdown";

// Build config for CSS Crunch.
// Replaces the previous inline CLI args:
//   tsdown src/index.ts src/launch.ts --format cjs,esm --dts
export default defineConfig({
	entry: ["src/index.ts", "src/launch.ts"],
	format: ["cjs", "esm"],
	// Declaration files. Uses the classic TypeScript engine (production-safe).
	//
	// TypeScript 7 (tsgo) can generate these ~3x faster and produced
	// byte-identical output in our tests. It is still experimental in
	// rolldown-plugin-dts ("not recommended for production"), so we keep the
	// stable engine here. To try the native compiler, install
	// `@typescript/native-preview` (already a devDependency) and use:
	//   dts: { tsgo: true }
	dts: true,
	// `src/index.ts` intentionally exposes both named exports (tokenize,
	// stringify, compact) and a default export (compile). Force `named` output
	// interop to silence the [MIXED_EXPORTS] warning; this keeps the existing
	// CJS shape (`require(...).default` for compile) unchanged.
	outputOptions: {
		exports: "named",
	},
});
