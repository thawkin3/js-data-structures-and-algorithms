# Contributing

## Introduction

Welcome! Thanks for your interest in contributing to this project!

## Purpose

The purpose of this project is to help others learn and understand data
structures and algorithms from a JavaScript standpoint. Rather than
containing only snippets of code with accompanying explanations, this
project is meant to provide an eager learner with fully working code,
good test cases, and a playground full of examples.

## Content

Each data structure or algorithm should meet the following requirements:

- Be implemented in JavaScript
- Not depend on any third-party dependencies
- Have 100% test coverage
- Have Storybook examples to help people visualize the concept

## Bug Reports

If you would like to file a bug, please create an issue on the repo
here in GitHub. I do not have a bug report template as of yet, so
please be as detailed as you can and include any information you
feel is relevant.

## Feature Requests

If you would like to request a feature such as a new data structure,
new algorithm, new or improved example, or any other improvements,
please create an issue on the repo here in GitHub. I will reply as
soon as possible so we can take steps toward implementing your
suggestion. Or, better yet, after filing an issue, create a pull
request to implement the feature yourself!

## Pull Requests

If you would like to contribute to this project, please submit an
issue, write some code, and then create a pull request.

This project uses the following tools for automation and linting during the development process:

- [prettier](https://prettier.io/) for code formatting (JS and MD files)
- [stylelint](https://stylelint.io/) for CSS formatting
  = [eslint](https://eslint.org/) for checking syntax errors
- [commitizen](https://github.com/commitizen/cz-cli) for commit message formatting
- [lint-staged](https://www.npmjs.com/package/lint-staged) to lint changes before committing them
- [validate-commit-msg](https://www.npmjs.com/package/validate-commit-msg)
  to validate the commit message is in a standard format
- [Husky](https://github.com/typicode/husky) for git hooks to run some validation
- [standard-version](https://github.com/conventional-changelog/standard-version)
  to automate versioning and CHANGELOG generation

The process of adding, committing, and pushing your code will look like this:

- Write your code
- `git add .`
- `yarn cz` (Note that this replaces `git commit`)
- (Husky then runs the git hooks to verify that the tests are passing, that
  the code has no errors, and that the commit message is in the proper format)
- `git push`

## Continuous Integration

This project has continuous integration set up through [Travis CI](https://travis-ci.com/)

## Cutting a New Release

While the primary purpose of this project is education, the data structures
and algorithms are implemented here as real working code and can be used as
such. This project is published on npm as [js-data-structures-and-algorithms](https://www.npmjs.com/package/js-data-structures-and-algorithms).

When we are ready to cut a new release, we follow these steps:

- `yarn release` (This uses [standard-version](https://github.com/conventional-changelog/standard-version)
  to automate bumping the version and generating the CHANGELOG)
- `git push --follow-tags origin master` (pushes the new commit and the new tag to GitHub)
- `yarn publish` (publishes the new package version on npm)

Note that only those with access can publish a new package version.
