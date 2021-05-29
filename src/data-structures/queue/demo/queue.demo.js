import React, { Component, createRef } from 'react'
import { Queue } from '../src/queue'
import { QueuePerformanceTest } from './queue-performance-test.demo'
import './queue.demo.css'

export default {
  title: 'Data Structures/Queue',
}

const Item = ({ value, className }) => {
  return <div className={className}>{value}</div>
}

const generateOddOrEvenClassName = index =>
  index % 2 === 0 ? 'item' : 'item alt'

class QueueVisualizer extends Component {
  state = {
    queue: new Queue(),
    item: '',
  }

  textInputRef = createRef()

  handleItemChange = e => {
    this.setState({ item: e.target.value })
  }

  addItem = e => {
    e.preventDefault()
    const { queue, item } = this.state
    if (item) {
      queue.enqueue(item)
      this.setState(
        { queue, item: '' },
        () => this.textInputRef.current && this.textInputRef.current.focus()
      )
    }
  }

  removeItem = () => {
    const { queue } = this.state
    queue.dequeue()
    this.setState({ queue })
  }

  clearQueue = () => {
    const { queue } = this.state
    queue.clear()
    this.setState({ queue })
  }

  render() {
    const { queue, item } = this.state

    return (
      <div className="queueDemo">
        <h1>Queue Demo</h1>
        <div className="flexContainer">
          <div className="leftColumn">
            <form onSubmit={this.addItem}>
              <input
                value={item}
                onChange={this.handleItemChange}
                ref={this.textInputRef}
                className="ti newItemTextInput"
              />
              <button className="button outline" type="submit">
                Add Item to Queue
              </button>
              <br />
              <button
                className="button outline"
                type="button"
                onClick={this.removeItem}
              >
                Remove Item from Queue
              </button>
              <br />
              <button
                className="button outline"
                type="button"
                onClick={this.clearQueue}
              >
                Clear Queue
              </button>
            </form>
          </div>
          <div className="rightColumn">
            <h2>Queue Contents:</h2>
            <div className="queueContainer">
              <p className="frontOfQueue">Front of Queue</p>
              {queue.isEmpty() ? (
                <p>(currently empty)</p>
              ) : (
                queue.enumerate().map((value, index) => {
                  return (
                    <Item
                      value={value}
                      className={generateOddOrEvenClassName(index)}
                      key={index}
                    />
                  )
                })
              )}
              <p className="endOfQueue">End of Queue</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export const queueVisualizer = () => <QueueVisualizer />

export const performanceTest = () => <QueuePerformanceTest />
