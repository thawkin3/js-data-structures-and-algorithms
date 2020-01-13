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
issue and then create a pull request.
This project uses [commitizen](https://github.com/commitizen/cz-cli)
for commit message formatting and [Husky](https://github.com/typicode/husky)
for git hooks to run some validation.

The process of adding, committing, and pushing your code will look like this:

- `git add .`
- `yarn commit` (Note that this is NOT `git commit`)
- (Husky now runs the git hooks to verify that the tests are passing
  and that the commit message is in the proper format)
- `git push`
