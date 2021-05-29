import React, { Component, createRef } from 'react'
import { Stack } from '../src/stack'
import { StackPerformanceTest } from './stack-performance-test.demo'
import './stack.demo.css'

export default {
  title: 'Data Structures/Stack',
}

const Item = ({ value, className }) => {
  return <div className={className}>{value}</div>
}

const generateOddOrEvenClassName = (index, totalNumberOfItems) => {
  if (index % 2 === 0) {
    return totalNumberOfItems % 2 === 0 ? 'item alt' : 'item'
  } else {
    return totalNumberOfItems % 2 === 0 ? 'item' : 'item alt'
  }
}

class StackVisualizer extends Component {
  state = {
    stack: new Stack(),
    item: '',
  }

  textInputRef = createRef()

  handleItemChange = e => {
    this.setState({ item: e.target.value })
  }

  addItem = e => {
    e.preventDefault()
    const { stack, item } = this.state
    if (item) {
      stack.push(item)
      this.setState(
        { stack, item: '' },
        () => this.textInputRef.current && this.textInputRef.current.focus()
      )
    }
  }

  removeItem = () => {
    const { stack } = this.state
    stack.pop()
    this.setState({ stack })
  }

  clearStack = () => {
    const { stack } = this.state
    stack.clear()
    this.setState({ stack })
  }

  render() {
    const { stack, item } = this.state

    return (
      <div className="stackDemo">
        <h1>Stack Demo</h1>
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
                Add Item to Stack
              </button>
              <br />
              <button
                className="button outline"
                type="button"
                onClick={this.removeItem}
              >
                Remove Item from Stack
              </button>
              <br />
              <button
                className="button outline"
                type="button"
                onClick={this.clearStack}
              >
                Clear Stack
              </button>
            </form>
          </div>
          <div className="rightColumn">
            <h2>Stack Contents:</h2>
            <div className="stackContainer">
              <p className="topOfStack">Top of Stack</p>
              {stack.isEmpty() ? (
                <p>(currently empty)</p>
              ) : (
                stack.enumerate().map((value, index, allItems) => {
                  return (
                    <Item
                      value={value}
                      className={generateOddOrEvenClassName(
                        index,
                        allItems.length
                      )}
                      key={index}
                    />
                  )
                })
              )}
              <p className="bottomOfStack">Bottom of Stack</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export const stackVisualizer = () => <StackVisualizer />

export const performanceTest = () => <StackPerformanceTest />
