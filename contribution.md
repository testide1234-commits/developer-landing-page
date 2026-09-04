# Contributing

Thanks for wanting to help make **Dev Landing Page** better. This project stays intentionally small, so contributions here matter more than they would in a bigger codebase.

## Ways to contribute

- **New themes** — Add a CSS file under `css/themes/` following the naming pattern of the existing ones (`{primary}-{secondary}.css`). Keep the palette to two colors, matching the minimal material style already in place.
- **Bug fixes** — Layout quirks on smaller screens, broken links in `index.html`, or icon rendering issues with the bundled Font Awesome assets in `public/fonts/`.
- **Accessibility** — Improve color contrast in existing themes, add proper `alt` text, or improve keyboard navigation.
- **Documentation** — Clarify the GitHub Pages setup steps in `README.md`, or add examples for custom domain configuration.
- **Performance** — Trim unused font files or CSS rules that aren't referenced by any theme.

## Workflow

1. Fork the repo and create a branch for your change.
2. Keep edits minimal and scoped — this project favors small, focused pull requests over large rewrites.
3. Test changes by opening `index.html` directly in a browser across a couple of viewport sizes.
4. Open a pull request describing what changed and why.

## Style

Match the existing minimal, no-framework approach: plain HTML, CSS, and a tiny bit of JS. No build tooling, no dependencies.
