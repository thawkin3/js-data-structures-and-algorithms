import React, { Component, createRef } from 'react'
import { PriorityQueue } from '../src/priority-queue'
import './priority-queue.demo.css'

export default {
  title: 'Data Structures|Priority Queue',
}

const Item = ({ item, className }) => {
  return (
    <div className={className}>
      <div>
        <b>Value:</b> {item.value}
      </div>
      <div>
        <b>Priority:</b> {item.priority}
      </div>
    </div>
  )
}

const generateOddOrEvenClassName = index =>
  index % 2 === 0 ? 'item' : 'item alt'

class PriorityQueueVisualizer extends Component {
  state = {
    priorityQueue: new PriorityQueue(),
    item: '',
    priority: 1,
  }

  textInputRef = createRef()

  handleItemChange = e => {
    this.setState({ item: e.target.value })
  }

  handlePriorityChange = e => {
    this.setState({ priority: e.target.value })
  }

  addItem = e => {
    e.preventDefault()
    const { priorityQueue, item, priority } = this.state
    if (item && priority) {
      priorityQueue.enqueue(item, priority)
      this.setState(
        { priorityQueue, item: '', value: 1 },
        () => this.textInputRef.current && this.textInputRef.current.focus()
      )
    }
  }

  removeItem = () => {
    const { priorityQueue } = this.state
    priorityQueue.dequeue()
    this.setState({ priorityQueue })
  }

  clearPriorityQueue = () => {
    const { priorityQueue } = this.state
    priorityQueue.clear()
    this.setState({ priorityQueue })
  }

  render() {
    const { priorityQueue, item, priority } = this.state

    return (
      <div className="priorityQueueDemo">
        <h1>Priority Queue Demo</h1>
        <form onSubmit={this.addItem}>
          <label>
            <span>Item Value:</span>
            <input
              value={item}
              onChange={this.handleItemChange}
              ref={this.textInputRef}
              className="input newItemTextInput"
            />
          </label>
          <br />
          <label>
            <span>Item Priority:</span>
            <input
              value={priority}
              onChange={this.handlePriorityChange}
              className="input itemPriorityTextInput"
              type="number"
            />
          </label>
          <br />
          <button type="submit">Add Item to Priority Queue</button>
          <br />
          <button type="button" onClick={this.removeItem}>
            Remove Item from Priority Queue
          </button>
          <br />
          <button type="button" onClick={this.clearPriorityQueue}>
            Clear Priority Queue
          </button>
        </form>
        <div>
          <p>Priority Queue Contents:</p>
          <div className="priorityQueueContainer">
            {priorityQueue.enumerate().map((item, index) => {
              return (
                <Item
                  item={item}
                  className={generateOddOrEvenClassName(index)}
                  key={index}
                />
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}

export const priorityQueueVisualizer = () => <PriorityQueueVisualizer />
