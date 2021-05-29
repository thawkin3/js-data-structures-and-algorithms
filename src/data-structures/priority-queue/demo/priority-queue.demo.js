import React, { Component, createRef } from 'react'
import { PriorityQueue } from '../src/priority-queue'
import './priority-queue.demo.css'

export default {
  title: 'Data Structures/Priority Queue',
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
      priorityQueue.enqueue(item, Number(priority || 1))
      this.setState(
        { priorityQueue, item: '', priority: 1 },
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
        <div className="flexContainer">
          <div className="leftColumn">
            <form onSubmit={this.addItem}>
              <label>
                <span>Item Value:</span>
                <input
                  value={item}
                  onChange={this.handleItemChange}
                  ref={this.textInputRef}
                  className="ti input newItemTextInput"
                />
              </label>
              <br />
              <label>
                <span>Item Priority:</span>
                <input
                  value={priority}
                  onChange={this.handlePriorityChange}
                  className="ti input itemPriorityTextInput"
                  type="number"
                />
              </label>
              <br />
              <button className="button outline" type="submit">
                Add Item to Priority Queue
              </button>
              <br />
              <button
                className="button outline"
                type="button"
                onClick={this.removeItem}
              >
                Remove Item from Priority Queue
              </button>
              <br />
              <button
                className="button outline"
                type="button"
                onClick={this.clearPriorityQueue}
              >
                Clear Priority Queue
              </button>
            </form>
          </div>
          <div className="rightColumn">
            <h2>Priority Queue Contents:</h2>
            <div className="priorityQueueContainer">
              <p className="frontOfPriorityQueue">Front of Priority Queue</p>
              {priorityQueue.isEmpty() ? (
                <p>(currently empty)</p>
              ) : (
                priorityQueue.enumerate().map((item, index) => {
                  return (
                    <Item
                      item={item}
                      className={generateOddOrEvenClassName(index)}
                      key={index}
                    />
                  )
                })
              )}
              <p className="endOfPriorityQueue">End of Priority Queue</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export const priorityQueueVisualizer = () => <PriorityQueueVisualizer />
