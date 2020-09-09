# mutation-tests

[![Action Status](https://github.com/WarleyGabriel/mutation-tests/workflows/CI/badge.svg)](https://github.com/WarleyGabriel/mutation-tests/actions)

This project is an example of mutation tests with Stryker.  
We have a simple method that returns true or false, and we create a test for this method.
We have 100% code coverage, but we don't have coverage of all the scenarios.  
Look at the [Stryker page](https://stryker-mutator.io/) and get more information about it.

#### [Stryker mutation report (on Github pages)](http://warleygabriel.github.io/mutation-tests)

## Getting Started

Install the dependencies:

```bash
npm install
```

Compile TypeScript:

```bash
npm run build
```

## Running tests

Run tests using Jest:

```bash
npm run test
```

```text
 PASS  dist/test/elections.test.js
  ✓ An 27-year-old cannot be a president (1 ms)
  ○ skipped An 35-year-old can be a president

--------------|---------|----------|---------|---------|-------------------
File          | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line  s
--------------|---------|----------|---------|---------|-------------------
All files     |     100 |      100 |     100 |     100 |
 elections.ts |     100 |      100 |     100 |     100 |
--------------|---------|----------|---------|---------|-------------------
```

## Running mutation tests

Run tests using Stryker:

```bash
npm run mutation:test
```

```text
Ran all tests for this mutant.
Ran 1.00 tests per mutant on average.
--------------|---------|----------|-----------|------------|----------|---------|
File          | % score | killed   | timeout   | survived   | no cov   | error   |
--------------|---------|----------|-----------|------------|----------|---------|
All files     |   60.00 |        3 |         0 |          2 |        0 |       0 |
 elections.ts |   60.00 |        3 |         0 |          2 |        0 |       0 |
--------------|---------|----------|-----------|------------|----------|---------|
```

Note: There is a test in skip mode, if you remove this skip, we will get 100% coverage after the mutation.

## Watch mode

We also have watch mode for Jest and TypeScript:

```bash
npm run build:watch
npm run test:watch
```
