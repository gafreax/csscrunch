# CSS Parser

This package provides a powerful and efficient TypeScript library for parsing and optimizing CSS strings. It enables developers to easily extract, manipulate, and transform CSS code within JavaScript projects.

## Features
* **Optimize CSS code:** Remove redundant or unnecessary CSS rules to reduce file size and improve performance.


## Installation

```bash
npm install gafreax/cssparse
```

## Usage

```typescript
import * as cssparse from 'cssparse';

const cssString = '.example { color: red; font-size: 16px; }';
const parsedCSS = cssparse.parse(cssString);

// Access and modify CSS properties
parsedCSS.rules[0].declarations[0].setProperty('color', 'blue');

// Generate optimized CSS
const optimizedCSS = cssparse.stringify(parsedCSS);
```

## Testing Functionality

To test the functionality of the CSS parser, you can launch the provided launch script:

```bash
ts-node src/launch.ts
```

This script will execute sample code that demonstrates the parser's capabilities.

## Contribution

We welcome contributions to this open-source project. If you encounter issues or have suggestions for improvement, please feel free to create GitHub issues or submit pull requests.