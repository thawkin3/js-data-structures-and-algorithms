# JS Data Structures and Algorithms

[![Build Status](https://travis-ci.com/thawkin3/js-data-structures-and-algorithms.svg?branch=master)](https://travis-ci.com/thawkin3/js-data-structures-and-algorithms)
[![Codecov](https://img.shields.io/codecov/c/github/thawkin3/js-data-structures-and-algorithms)](https://codecov.io/gh/thawkin3/js-data-structures-and-algorithms)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

JavaScript implementations of common data structure and algorithm concepts.

## Demos

Demos can be found at: http://tylerhawkins.info/js-data-structures-and-algorithms/storybook-dist

## Data Structures

- [Array](src/data-structures/array/src/array.js)
- [Binary Search Tree](src/data-structures/binary-search-tree/src/binary-search-tree.js) TODO: Add implementation, tests, and Storybook example
- [Doubly Linked List](src/data-structures/doubly-linked-list/src/doubly-linked-list.js)
- [Hash Table (Object)](src/data-structures/hash-table/src/hash-table.js)
- [Linked List](src/data-structures/linked-list/src/linked-list.js)
- [Node (with only Next pointer)](src/data-structures/linked-list/src/node.js)
- [Node (with Next and Previous pointers)](src/data-structures/doubly-linked-list/src/node.js)
- [Priority Queue](src/data-structures/priority-queue/src/priority-queue.js)
- [Queue](src/data-structures/queue/src/queue.js)
- [Set](src/data-structures/set/src/set.js)
- [Stack](src/data-structures/stack/src/stack.js)

## Algorithms

### Searching

- [Binary Search](src/algorithms/search/binary-search/src/binary-search.js) TODO: Add Storybook example
- [Linear Search](src/algorithms/search/linear-search/src/linear-search.js) TODO: Add Storybook example

### Sorting

- [Bubble Sort](src/algorithms/sort/bubble-sort/src/bubble-sort.js)
- [Insertion Sort](src/algorithms/sort/insertion-sort/src/insertion-sort.js)
- [Merge Sort](src/algorithms/sort/merge-sort/src/merge-sort.js)
- [Quick Sort](src/algorithms/sort/quick-sort/src/quick-sort.js)
- [Selection Sort](src/algorithms/sort/selection-sort/src/selection-sort.js)

### Sets

- [Intersection](src/algorithms/set/intersection/src/intersection.js)
- [Set Difference](src/algorithms/set/set-difference/src/set-difference.js)
- [Symmetric Difference](src/algorithms/set/symmetric-difference/src/symmetric-difference.js)
- [Union](src/algorithms/set/union/src/union.js)

## Local Development

- `yarn install`: Installs dependencies
- `yarn storybook`: Starts up the Storybook app locally so you can view the demos and examples
- `yarn build-storybook`: Builds a static site out of the Storybook app (this is what is hosted here:
  http://tylerhawkins.info/js-data-structures-and-algorithms/storybook-dist)
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

## Contributing

Please see the [Contributing Guidelines](CONTRIBUTING.md).

## Code of Conduct

The [Code of Conduct](CODE_OF_CONDUCT.md) can be found here.
