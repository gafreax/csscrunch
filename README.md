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
const parsedCSS = csscrunch.parse(cssString);

// Access and modify CSS properties
parsedCSS.rules[0].declarations[0].setProperty('color', 'blue');

// Generate optimized CSS
const optimizedCSS = csscrunch.stringify(parsedCSS);
```


## CLI Usage

**Quickly clean up your Css:**

To optimize your CSS file, simply run the following command in your terminal:

```bash
$ npm start -- compile input.css optimized.cs
```

Or via npx

```bash
$ npx @gafreax/csscrunch compile input.css optimized.cs
```

Or via global install
```bash
$ npm install -g @gafreaxa/csscrunch
$ csscrunch compile input.css optimized.cs
```

## Contribution

We welcome contributions to this open-source project. If you encounter issues or have suggestions for improvement, please feel free to create GitHub issues or submit pull requests.
