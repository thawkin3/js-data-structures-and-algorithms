# JS Data Structures and Algorithms

[![Build Status](https://travis-ci.com/thawkin3/js-data-structures-and-algorithms.svg?branch=master)](https://travis-ci.com/thawkin3/js-data-structures-and-algorithms)
[![Codecov](https://img.shields.io/codecov/c/github/thawkin3/js-data-structures-and-algorithms)](https://codecov.io/gh/thawkin3/js-data-structures-and-algorithms)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

JavaScript implementations of common data structure and algorithm concepts.

## Demos

Demos can be found at: http://tylerhawkins.info/data-structures-and-algorithms/storybook-dist

## Data Structures

- [Array](src/data-structures/array/src/array.js)
- [Binary Search Tree](src/data-structures/binary-search-tree/src/binary-search-tree.js) TODO: Add implementation, tests, and Storybook example
- [Doubly Linked List](src/data-structures/doubly-linked-list/src/doubly-linked-list.js) TODO: Add Storybook example
- [Hash Table (Object)](src/data-structures/hash-table/src/hash-table.js)
- [Linked List](src/data-structures/linked-list/src/linked-list.js) TODO: Add Storybook example
- [Node](src/data-structures/node/src/node.js)
- [Priority Queue](src/data-structures/priority-queue/src/priority-queue.js)
- [Queue](src/data-structures/queue/src/queue.js)
- [Set](src/data-structures/set/src/set.js)
- [Stack](src/data-structures/stack/src/stack.js)

## Algorithms

### Searching

- [Binary Search](src/algorithms/search/binary-search/src/binary-search.js) TODO: Add Storybook example
- [Linear Search](src/algorithms/search/linear-search/src/linear-search.js) TODO: Add Storybook example

### Sorting

- [Bubble Sort](src/algorithms/sort/bubble-sort/src/bubble-sort.js) TODO: Add Storybook example
- [Insertion Sort](src/algorithms/sort/insertion-sort/src/insertion-sort.js) TODO: Add Storybook example
- [Merge Sort](src/algorithms/sort/merge-sort/src/merge-sort.js) TODO: Add Storybook example
- [Quick Sort](src/algorithms/sort/quick-sort/src/quick-sort.js) TODO: Add implementation, tests, and Storybook example
- [Selection Sort](src/algorithms/sort/selection-sort/src/selection-sort.js) TODO: Add Storybook example

### Sets

- [Intersection](src/algorithms/set/intersection/src/intersection.js) TODO: Add Storybook example
- [Set Difference](src/algorithms/set/set-difference/src/set-difference.js) TODO: Add Storybook example
- [Symmetric Difference](src/algorithms/set/symmetric-difference/src/symmetric-difference.js) TODO: Add Storybook example
- [Union](src/algorithms/set/union/src/union.js) TODO: Add Storybook example

## Commands

### `yarn install`

Installs dependencies

### `yarn test`

Runs tests in watch mode

### `yarn test:coverage`

Runs tests and includes coverage report

### `yarn test:logs`

Runs tests in watch mode and includes console log output to show the internals
of what is going on during each iteration of algorithms being run (for
instance, it shows the current state of an array that is being sorted during
each step of the given algorithm)

### `yarn storybook`

Starts up the Storybook app locally so you can view the demos and examples

### `yarn build-storybook`

Builds a static site out of the Storybook app (this is what is hosted here:
http://tylerhawkins.info/data-structures-and-algorithms/storybook-dist)

### `yarn prettier`

Formats the code so you don't have to worry about white space and other
formatting during development

### `yarn prettier-watch`

Runs prettier in watch mode

## Contributing

Please see the [Contributing Guidelines](CONTRIBUTING.md).

## Code of Conduct

The [Code of Conduct](CODE_OF_CONDUCT.md) can be found here.
