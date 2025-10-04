# CSS Crunch

This package provides a powerful and efficient TypeScript library for optimizing CSS strings. It enables developers to easily compress css JavaScript projects.

The great focus is on keeping a great compatibility across all kind of render engine especially on the various Outlook.

## Features
* **Group rules:** Group same rules with one selector.
* **Compress:** Compress the size by removing not necessary char.
* **Merge selector:** Merge same selector into only one.
* **Media Query:** Move all media queries at the bottom.


## Installation

```bash
npm install @gafreax/csscrunch
```

## Usage

```typescript
import * as csscrunch from '@gafreax/csscrunch';

const cssString = '.example { color: red; font-size: 16px; }';
const parsedCSS = csscrunch.compile(cssString);

```

## Optimization
To enable the optimization pass a `Optimizations` object (file: `src/lib/optimization.d.ts`)  to the instance:

```typescript
interface Optimizations {
  paddingShortHand?: boolean
  marginShortHand?: boolean
  removeZeroUnits?: boolean
}
```



## CLI Usage

**Quickly clean up your Css:**

To optimize your CSS file, simply run the following command in your terminal:

```bash
$ npm start -- compile input.css optimized.css
```

Or via npx

```bash
$ npx @gafreax/csscrunch compile input.css optimized.css
```

Or via global install
```bash
$ npm install -g @gafreaxa/csscrunch
$ csscrunch compile input.css optimized.css
```

You can also use the flags:
`--optimize-short-hand` to optimize padding and margin short hand
`--optimize-margin` to optimize margin short hand
`--optimize-padding` to optimize padding short hand
`--remove-zero-units` to remove zero units
`--optimize-all` to enable all optimizations
Example:

```bash
$ npx @gafreax/csscrunch compile --optimize-all input.css optimized.css
```

## Contribution

We welcome contributions to this open-source project. If you encounter issues or have suggestions for improvement, please feel free to create GitHub issues or submit pull requests.
