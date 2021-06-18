# JS Data Structures and Algorithms

[![npm](https://img.shields.io/npm/v/js-data-structures-and-algorithms)](https://www.npmjs.com/package/js-data-structures-and-algorithms)
[![Build Status](https://travis-ci.com/thawkin3/js-data-structures-and-algorithms.svg?branch=master)](https://travis-ci.com/thawkin3/js-data-structures-and-algorithms)
[![Codecov](https://img.shields.io/codecov/c/github/thawkin3/js-data-structures-and-algorithms)](https://codecov.io/gh/thawkin3/js-data-structures-and-algorithms)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/js-data-structures-and-algorithms)](https://bundlephobia.com/result?p=js-data-structures-and-algorithms)
[![npm](https://img.shields.io/npm/dt/js-data-structures-and-algorithms)](https://www.npmjs.com/package/js-data-structures-and-algorithms)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

JavaScript implementations of common data structure and algorithm concepts.

## Purpose

The purpose of this project is to help others learn and understand data
structures and algorithms from a JavaScript perspective. Rather than
containing only snippets of code with accompanying explanations, this
project is meant to provide an eager learner with fully working code,
good test cases, and a playground full of examples.

While the primary purpose of this project is education, the data structures
and algorithms are implemented here as real working code and can be used as
such. This project is published on npm as [js-data-structures-and-algorithms](https://www.npmjs.com/package/js-data-structures-and-algorithms).

## Demos

Demos can be found at: http://tylerhawkins.info/js-data-structures-and-algorithms/storybook-dist

## Data Structures

- [Array](src/data-structures/array/src/array.js)
- AVL Tree (TODO)
- [Binary Search Tree](src/data-structures/binary-search-tree/src/binary-search-tree.js)
- [Doubly Linked List](src/data-structures/doubly-linked-list/src/doubly-linked-list.js)
- Graph (TODO)
- [Hash Table (Object)](src/data-structures/hash-table/src/hash-table.js)
- Heap (TODO)
- [Linked List](src/data-structures/linked-list/src/linked-list.js)
- [Node (with only Next pointer)](src/data-structures/linked-list/src/node.js)
- [Node (with Next and Previous pointers)](src/data-structures/doubly-linked-list/src/node.js)
- [Priority Queue](src/data-structures/priority-queue/src/priority-queue.js)
- [Queue (from Array)](src/data-structures/queue/src/queue.js)
- [Queue (from Doubly Linked List)](src/data-structures/queue/src/queue-from-doubly-linked-list.js)
- [Set](src/data-structures/set/src/set.js)
- [Stack (from Array)](src/data-structures/stack/src/stack.js)
- [Stack (from Linked List)](src/data-structures/stack/src/stack-from-linked-list.js)
- Trie (TODO)

## Algorithms

### Searching (Array)

- [Binary Search](src/algorithms/search/array/binary-search/src/binary-search.js)
- [Linear Search](src/algorithms/search/array/linear-search/src/linear-search.js)

### Searching (String)

- [Boyer-Moore-Horspool Search](src/algorithms/search/string/boyer-moore-horspool-search/src/boyer-moore-horspool-search.js)
- [Naive Search](src/algorithms/search/string/naive-search/src/naive-search.js)

### Searching (Tree and Graph)

- Breadth-First Search (TODO)
- Depth-First Search (TODO)

### Sorting

- [Bubble Sort](src/algorithms/sort/bubble-sort/src/bubble-sort.js)
- [Counting Sort](src/algorithms/sort/counting-sort/src/counting-sort.js)
- Heap Sort (TODO)
- [Insertion Sort](src/algorithms/sort/insertion-sort/src/insertion-sort.js)
- [Merge Sort](src/algorithms/sort/merge-sort/src/merge-sort.js)
- [Quick Sort](src/algorithms/sort/quick-sort/src/quick-sort.js)
- Radix Sort (TODO)
- [Selection Sort](src/algorithms/sort/selection-sort/src/selection-sort.js)
- Shell Sort (TODO)

### Sets

- [Intersection](src/algorithms/set/intersection/src/intersection.js)
- [Set Difference](src/algorithms/set/set-difference/src/set-difference.js)
- [Symmetric Difference](src/algorithms/set/symmetric-difference/src/symmetric-difference.js)
- [Union](src/algorithms/set/union/src/union.js)

## Running the Demos Locally

To run the Storybook examples locally on your own machine, follow these steps:

1. Clone or download this repo
2. Install the needed dependencies using `yarn install`
3. Start up the Storybook app using `yarn storybook`

That's it! The Storybook app should start running at your localhost on port 9009,
and the browser tab should be opened for you automatically.

## Using the npm Package in Your App

To use these data structures and algorithms in your own app, follow these steps:

1. Install the npm package using `yarn add js-data-structures-and-algorithms`
   (or `npm install js-data-structures-and-algorithms`)
2. Import any of the exported modules like `import { Stack } from 'js-data-structures-and-algorithms'`
3. At this point, you're good to instantiate these classes
   (ex. `const myStack = new Stack()`) and use their methods in your app (ex. `myStack.push(42)`).

## Yarn Commands

For a complete list, see [package.json](package.json).

- `yarn install`: Installs dependencies
- `yarn storybook`: Starts up the Storybook app locally so you can view the demos and examples
- `yarn build-storybook`: Builds a static site out of the Storybook app (this is what is hosted here:
  http://tylerhawkins.info/js-data-structures-and-algorithms/storybook-dist)
- `yarn build`: Generates the minified build from the source code using [Rollup](https://rollupjs.org/)
- `yarn test`: Runs all tests
- `yarn test:coverage`: Runs all tests and includes coverage report
- `yarn test:logs`: Runs tests in watch mode and includes console log output to show the internals
  of what is going on during each iteration of algorithms being run (for
  instance, it shows the current state of an array that is being sorted during
  each step of the given algorithm)
- `yarn test:watch`: Runs tests in watch mode
- `yarn prettier`: Formats the code so you don't have to worry about white space and other
  formatting during development
- `yarn prettier-watch`: Runs prettier in watch mode
- `yarn eslint`: Runs eslint to lint JS files
- `yarn stylelint`: Lints CSS files and auto-fixes issues where possible
- `yarn cz`: Uses [commitizen](https://github.com/commitizen/cz-cli)
  to walk you through some steps via the cli and then
  commits your code using a formatted commit message that
  it generates
- `yarn release`: Bumps the package version and generates the changelog using
  [standard-version](https://github.com/conventional-changelog/standard-version)

## Contributing

Please see the [Contributing Guidelines](CONTRIBUTING.md).

## Code of Conduct

The [Code of Conduct](CODE_OF_CONDUCT.md) can be found here.
