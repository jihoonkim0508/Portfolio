# Repository Guidelines

## Project Structure & Module Organization

This repository is currently empty. As code is added, keep the layout predictable and document any deviations here. A recommended structure is:

- `src/` for application source code and reusable modules.
- `tests/` for automated tests that mirror the `src/` layout.
- `assets/` for images, fonts, icons, and other static files.
- `docs/` for architecture notes, setup guides, and contributor-facing references.

Avoid placing generated output, dependency folders, or local environment files in version control.

## Build, Test, and Development Commands

No build system or package manifest is present yet. When tooling is introduced, add the exact commands here. Common examples:

- `npm install` installs JavaScript dependencies when a `package.json` exists.
- `npm run dev` starts a local development server.
- `npm test` runs the test suite.
- `npm run build` creates a production build.

Prefer scripts in the project manifest over ad hoc commands so contributors have one stable entry point.

## Coding Style & Naming Conventions

Follow the conventions of the language and framework selected for this repository. Until project tooling is added, use clear, consistent names:

- Directories and files: lowercase with hyphens, such as `user-profile/`.
- JavaScript/TypeScript variables and functions: `camelCase`.
- Components, classes, and exported types: `PascalCase`.

Use two-space indentation for web projects unless a formatter config specifies otherwise. Add formatter and linter configuration files before enforcing style in pull requests.

## Testing Guidelines

Place tests under `tests/` or beside source files using a consistent suffix such as `.test.ts`, `.spec.ts`, or the equivalent for the chosen language. New features should include tests for expected behavior and important edge cases. Bug fixes should include a regression test when practical.

## Commit & Pull Request Guidelines

This directory is not currently a Git repository, so no project-specific commit history is available. Use concise, imperative commit messages such as `Add portfolio layout` or `Fix contact form validation`.

Pull requests should include a short summary, testing notes, screenshots for UI changes, and links to related issues or tasks. Keep changes focused; separate unrelated refactors from feature work.

## Agent-Specific Instructions

Before editing, inspect the current tree and preserve user changes. Keep generated files out of commits unless they are required source artifacts. Update this guide whenever project structure, commands, or workflow expectations change.
