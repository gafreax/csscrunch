# AGENTInteraction Guide for CSS Crunch

This guide provides instructions for interacting with the CSS Crunch project, specifically tailored for the Agent CLI.

## Project Overview

CSS Crunch is a TypeScript library for optimizing CSS strings. It can group rules, compress CSS, merge selectors, and handle media queries.

## Development Workflow

The project uses `pnpm` as a package manager.

### Linting and Formatting

The project uses `ts-standard` for linting and formatting.

*   **Check for linting errors:**
    ```bash
    pnpm run lint
    ```
*   **Fix linting errors:**
    ```bash
    pnpm run lint:fix
    ```

### Testing

The project uses `vitest` for testing.

*   **Run all tests:**
    ```bash
    pnpm run test
    ```
*   **Run tests in watch mode:**
    ```bash
    pnpm run test:watch
    ```
*   **Update snapshots:**
    ```bash
    pnpm run test:update-snap
    ```
*   **Run tests with coverage:**
    ```bash
    pnpm run test:coverage
    ```

### Building

To build the project, run the following command:

```bash
pnpm run build
```

## Git Hooks

The project uses `husky` to manage git hooks.

*   **`pre-commit`:** Before each commit, the following actions are performed:
    *   Tests are run on staged test files (`.test.ts`, `.spec.ts`).
    *   `ts-standard --fix` is run on staged JavaScript/TypeScript files to automatically fix linting and formatting issues.
*   **`pre-push`:** Before pushing, the `pnpm run build` command is executed to ensure the project builds successfully.
*   **`commit-msg`:** The `commitlint` tool is used to check if the commit message follows the conventional commit format.

## Pull Request Checks

The project uses GitHub Actions to enforce quality standards on pull requests. All PRs must pass the following checks:

*   **Linting and Complexity:** Code must pass `ts-standard` linting and have cyclomatic complexity < 10.
*   **Testing:** All unit tests must pass.
*   **Building:** The project must build successfully.
*   **Performance:** Benchmarks must not regress by more than 5% compared to baseline.
*   **Documentation:** If new features are introduced (commits starting with `feat:`), documentation in `docs/`, `AGENT.md`, or `README.md` must be updated.

## CLI Usage

The project includes a CLI for optimizing CSS files.

*   **Optimize a CSS file:**
    ```bash
    npm start -- compile input.css optimized.css
    ```
*   **Optimize with all optimizations enabled:**
    ```bash
    npm start -- compile --optimize-all input.css optimized.css
    ```
