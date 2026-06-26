# PortfolioWeb

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.3.3.

## Run

To run the project run:

```bash
npm run start
```

## Building

To build the project locally run:

```bash
npm run build
```

This will compile your project and store the build artifacts in the `dist/` directory.

## Deploy to GitHub Pages

Run these commands from the project root:

```bash
npm run build -- --output-path docs --base-href /portfolio-web/
npx angular-cli-ghpages --dir=docs/browser --branch=gh-pages
```

These commands will:

- build the Angular app for production;
- output the files into the `docs/browser` folder;
- publish them to the `gh-pages` branch for GitHub Pages.

GitHub Pages should be configured with:

- Source: Deploy from a branch
- Branch: `gh-pages`
- Folder: `/ (root)`

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```
