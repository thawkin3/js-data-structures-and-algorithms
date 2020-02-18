import React, { Component } from 'react'
import { Queue } from '../src/queue'
import { QueueFromDoublyLinkedList } from '../src/queue-from-doubly-linked-list'
import './queue-performance-test.demo.css'

export class QueuePerformanceTest extends Component {
  state = {
    queueFromArray: new Queue(),
    queueFromDoublyLinkedList: new QueueFromDoublyLinkedList(),
    results: {
      operation: '',
      timeForQueueFromArray: 0,
      timeForQueueFromDoublyLinkedList: 0,
    },
  }

  handleFormSubmit = e => e.preventDefault()

  addItemsToQueues = numberOfItems => {
    const { queueFromArray, queueFromDoublyLinkedList } = this.state

    const queueFromArrayStartTime = performance.now()
    for (let i = 0; i < numberOfItems; i++) {
      queueFromArray.enqueue(i)
    }
    const queueFromArrayEndTime = performance.now()

    const queueFromDoublyLinkedListStartTime = performance.now()
    for (let i = 0; i < numberOfItems; i++) {
      queueFromDoublyLinkedList.enqueue(i)
    }
    const queueFromDoublyLinkedListEndTime = performance.now()

    this.setState({
      queueFromArray,
      queueFromDoublyLinkedList,
      results: {
        operation: `Adding ${numberOfItems} items to each queue`,
        timeForQueueFromArray: queueFromArrayEndTime - queueFromArrayStartTime,
        timeForQueueFromDoublyLinkedList:
          queueFromDoublyLinkedListEndTime - queueFromDoublyLinkedListStartTime,
      },
    })
  }

  removeItemsFromQueues = numberOfItems => {
    const { queueFromArray, queueFromDoublyLinkedList } = this.state

    const queueFromArrayStartTime = performance.now()
    for (let i = 0; i < numberOfItems; i++) {
      queueFromArray.dequeue()
    }
    const queueFromArrayEndTime = performance.now()

    const queueFromDoublyLinkedListStartTime = performance.now()
    for (let i = 0; i < numberOfItems; i++) {
      queueFromDoublyLinkedList.dequeue()
    }
    const queueFromDoublyLinkedListEndTime = performance.now()

    this.setState({
      queueFromArray,
      queueFromDoublyLinkedList,
      results: {
        operation: `Removing ${numberOfItems} items from each queue`,
        timeForQueueFromArray: queueFromArrayEndTime - queueFromArrayStartTime,
        timeForQueueFromDoublyLinkedList:
          queueFromDoublyLinkedListEndTime - queueFromDoublyLinkedListStartTime,
      },
    })
  }

  clearQueues = () => {
    const { queueFromArray, queueFromDoublyLinkedList } = this.state

    const queueFromArrayStartTime = performance.now()
    queueFromArray.clear()
    const queueFromArrayEndTime = performance.now()

    const queueFromDoublyLinkedListStartTime = performance.now()
    queueFromDoublyLinkedList.clear()
    const queueFromDoublyLinkedListEndTime = performance.now()

    this.setState({
      queueFromArray,
      queueFromDoublyLinkedList,
      results: {
        operation: 'Clearing each queue',
        timeForQueueFromArray: queueFromArrayEndTime - queueFromArrayStartTime,
        timeForQueueFromDoublyLinkedList:
          queueFromDoublyLinkedListEndTime - queueFromDoublyLinkedListStartTime,
      },
    })
  }

  render() {
    const { queueFromArray, queueFromDoublyLinkedList, results } = this.state

    return (
      <div className="queuePerformanceTestDemo">
        <h1>Performance Test Comparing Queue Implementations</h1>
        <p>
          Here we compare two queues: one implemented from an array, and one
          implemented from a doubly linked list.
        </p>
        <p>
          You should see that adding items to each queue implementation takes
          about the same time, but removing items from a queue implemented via a
          doubly linked list is significantly faster than removing items from a
          queue implemented via an array.
        </p>
        <form onSubmit={this.handleFormSubmit}>
          <fieldset>
            <legend>Enqueue</legend>
            <button
              className="button outline"
              type="button"
              onClick={() => this.addItemsToQueues(1000)}
            >
              Add 1,000 Items
            </button>
            <button
              className="button outline"
              type="button"
              onClick={() => this.addItemsToQueues(10000)}
            >
              Add 10,000 Items
            </button>
            <button
              className="button outline"
              type="button"
              onClick={() => this.addItemsToQueues(100000)}
            >
              Add 100,000 Items
            </button>
          </fieldset>
          <fieldset>
            <legend>Dequeue</legend>
            <button
              className="button outline"
              type="button"
              onClick={() => this.removeItemsFromQueues(1000)}
            >
              Remove 1,000 Items
            </button>
            <button
              className="button outline"
              type="button"
              onClick={() => this.removeItemsFromQueues(10000)}
            >
              Remove 10,000 Items
            </button>
            <button
              className="button outline"
              type="button"
              onClick={() => this.removeItemsFromQueues(100000)}
            >
              Remove 100,000 Items
            </button>
          </fieldset>
          <fieldset>
            <legend>Clear</legend>
            <button
              className="button outline"
              type="button"
              onClick={this.clearQueues}
            >
              Clear Queues
            </button>
          </fieldset>
        </form>
        <h2>Current Queue Sizes:</h2>
        <p>
          <b>Queue from Array:</b> {queueFromArray.size()}
        </p>
        <p>
          <b>Queue from Doubly Linked List:</b>{' '}
          {queueFromDoublyLinkedList.size()}
        </p>
        <hr />
        <h2>Operation Performance:</h2>
        {results.operation ? (
          <div>
            <p>
              <b>Queue from Array:</b> {results.operation} took{' '}
              <b>{results.timeForQueueFromArray.toFixed(3)}</b> milliseconds (or{' '}
              <b>{(results.timeForQueueFromArray / 1000).toFixed(6)}</b>{' '}
              seconds).
            </p>
            <p>
              <b>Queue from Doubly Linked List:</b> {results.operation} took{' '}
              <b>{results.timeForQueueFromDoublyLinkedList.toFixed(3)}</b>{' '}
              milliseconds (or{' '}
              <b>
                {(results.timeForQueueFromDoublyLinkedList / 1000).toFixed(6)}
              </b>{' '}
              seconds).
            </p>
          </div>
        ) : (
          <p>Perform an operation on the queues to see timed results.</p>
        )}
      </div>
    )
  }
}
