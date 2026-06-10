# PortfolioWeb

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.3.3.

## Run

To run the project run:

```bash
npm run start
```

## Building

To build the project run:

```bash
ng build
```
This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.


To build the project for Github Pages run:

```bash
ng build --output-path docs --base-href /portfolio-web/
npx angular-cli-ghpages --dir=docs/browser --branch=gh-pages
```

GitHub Pages should be configured with:
- Source: Deploy from a branch
- Branch: gh-pages
- Folder: / (root)

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```
