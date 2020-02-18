import React, { Component } from 'react'
import { Stack } from '../src/stack'
import { StackFromLinkedList } from '../src/stack-from-linked-list'
import './stack-performance-test.demo.css'

export class StackPerformanceTest extends Component {
  state = {
    stackFromArray: new Stack(),
    stackFromLinkedList: new StackFromLinkedList(),
    results: {
      operation: '',
      timeForStackFromArray: 0,
      timeForStackFromLinkedList: 0,
    },
  }

  handleFormSubmit = e => e.preventDefault()

  addItemsToStacks = numberOfItems => {
    const { stackFromArray, stackFromLinkedList } = this.state

    const stackFromArrayStartTime = performance.now()
    for (let i = 0; i < numberOfItems; i++) {
      stackFromArray.push(i)
    }
    const stackFromArrayEndTime = performance.now()

    const stackFromLinkedListStartTime = performance.now()
    for (let i = 0; i < numberOfItems; i++) {
      stackFromLinkedList.push(i)
    }
    const stackFromLinkedListEndTime = performance.now()

    this.setState({
      stackFromArray,
      stackFromLinkedList,
      results: {
        operation: `Adding ${numberOfItems} items to each stack`,
        timeForStackFromArray: stackFromArrayEndTime - stackFromArrayStartTime,
        timeForStackFromLinkedList:
          stackFromLinkedListEndTime - stackFromLinkedListStartTime,
      },
    })
  }

  removeItemsFromStacks = numberOfItems => {
    const { stackFromArray, stackFromLinkedList } = this.state

    const stackFromArrayStartTime = performance.now()
    for (let i = 0; i < numberOfItems; i++) {
      stackFromArray.pop()
    }
    const stackFromArrayEndTime = performance.now()

    const stackFromLinkedListStartTime = performance.now()
    for (let i = 0; i < numberOfItems; i++) {
      stackFromLinkedList.pop()
    }
    const stackFromLinkedListEndTime = performance.now()

    this.setState({
      stackFromArray,
      stackFromLinkedList,
      results: {
        operation: `Removing ${numberOfItems} items from each stack`,
        timeForStackFromArray: stackFromArrayEndTime - stackFromArrayStartTime,
        timeForStackFromLinkedList:
          stackFromLinkedListEndTime - stackFromLinkedListStartTime,
      },
    })
  }

  clearStacks = () => {
    const { stackFromArray, stackFromLinkedList } = this.state

    const stackFromArrayStartTime = performance.now()
    stackFromArray.clear()
    const stackFromArrayEndTime = performance.now()

    const stackFromLinkedListStartTime = performance.now()
    stackFromLinkedList.clear()
    const stackFromLinkedListEndTime = performance.now()

    this.setState({
      stackFromArray,
      stackFromLinkedList,
      results: {
        operation: 'Clearing each stack',
        timeForStackFromArray: stackFromArrayEndTime - stackFromArrayStartTime,
        timeForStackFromLinkedList:
          stackFromLinkedListEndTime - stackFromLinkedListStartTime,
      },
    })
  }

  render() {
    const { stackFromArray, stackFromLinkedList, results } = this.state

    return (
      <div className="stackPerformanceTestDemo">
        <h1>Performance Test Comparing Stack Implementations</h1>
        <p>
          Here we compare two stacks: one implemented from an array, and one
          implemented from a linked list.
        </p>
        <p>
          You should see that both adding and removing items is significantly
          faster for a stack implemented via a linked list compared to a stack
          implemented via an array.
        </p>
        <form onSubmit={this.handleFormSubmit}>
          <fieldset>
            <legend>Push</legend>
            <button
              className="button outline"
              type="button"
              onClick={() => this.addItemsToStacks(1000)}
            >
              Add 1,000 Items
            </button>
            <button
              className="button outline"
              type="button"
              onClick={() => this.addItemsToStacks(10000)}
            >
              Add 10,000 Items
            </button>
            <button
              className="button outline"
              type="button"
              onClick={() => this.addItemsToStacks(100000)}
            >
              Add 100,000 Items
            </button>
          </fieldset>
          <fieldset>
            <legend>Pop</legend>
            <button
              className="button outline"
              type="button"
              onClick={() => this.removeItemsFromStacks(1000)}
            >
              Remove 1,000 Items
            </button>
            <button
              className="button outline"
              type="button"
              onClick={() => this.removeItemsFromStacks(10000)}
            >
              Remove 10,000 Items
            </button>
            <button
              className="button outline"
              type="button"
              onClick={() => this.removeItemsFromStacks(100000)}
            >
              Remove 100,000 Items
            </button>
          </fieldset>
          <fieldset>
            <legend>Clear</legend>
            <button
              className="button outline"
              type="button"
              onClick={this.clearStacks}
            >
              Clear Stacks
            </button>
          </fieldset>
        </form>
        <h2>Current Stack Sizes:</h2>
        <p>
          <b>Stack from Array:</b> {stackFromArray.size()}
        </p>
        <p>
          <b>Stack from Linked List:</b> {stackFromLinkedList.size()}
        </p>
        <hr />
        <h2>Operation Performance:</h2>
        {results.operation ? (
          <div>
            <p>
              <b>Stack from Array:</b> {results.operation} took{' '}
              <b>{results.timeForStackFromArray.toFixed(3)}</b> milliseconds (or{' '}
              <b>{(results.timeForStackFromArray / 1000).toFixed(6)}</b>{' '}
              seconds).
            </p>
            <p>
              <b>Stack from Linked List:</b> {results.operation} took{' '}
              <b>{results.timeForStackFromLinkedList.toFixed(3)}</b>{' '}
              milliseconds (or{' '}
              <b>{(results.timeForStackFromLinkedList / 1000).toFixed(6)}</b>{' '}
              seconds).
            </p>
          </div>
        ) : (
          <p>Perform an operation on the stacks to see timed results.</p>
        )}
      </div>
    )
  }
}
