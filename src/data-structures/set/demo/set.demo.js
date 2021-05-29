import React, { Component, createRef } from 'react'
import { Set } from '../src/set'
import './set.demo.css'

export default {
  title: 'Data Structures/Set',
}

const Item = ({ value, className }) => {
  return <div className={className}>{value}</div>
}

const generateOddOrEvenClassName = index =>
  index % 2 === 0 ? 'item' : 'item alt'

class SetVisualizer extends Component {
  state = {
    set: new Set(),
    itemToAdd: '',
    itemToRemove: '',
  }

  addItemInputRef = createRef()
  removeItemInputRef = createRef()

  handleItemToAddChange = e => {
    this.setState({ itemToAdd: e.target.value })
  }

  addItem = e => {
    e.preventDefault()
    const { set, itemToAdd } = this.state
    if (itemToAdd) {
      set.add(itemToAdd)
      this.setState(
        { set, itemToAdd: '' },
        () =>
          this.addItemInputRef.current && this.addItemInputRef.current.focus()
      )
    }
  }

  handleItemToRemoveChange = e => {
    this.setState({ itemToRemove: e.target.value })
  }

  removeItem = e => {
    e.preventDefault()
    const { set, itemToRemove } = this.state
    set.remove(itemToRemove)
    this.setState(
      { set, itemToRemove: '' },
      () =>
        this.removeItemInputRef.current &&
        this.removeItemInputRef.current.focus()
    )
  }

  clearSet = () => {
    const { set } = this.state
    set.clear()
    this.setState({ set })
  }

  render() {
    const { set, itemToAdd, itemToRemove } = this.state

    return (
      <div className="setDemo">
        <h1>Set Demo</h1>
        <div className="flexContainer">
          <div className="leftColumn">
            <form onSubmit={this.addItem}>
              <input
                value={itemToAdd}
                onChange={this.handleItemToAddChange}
                ref={this.addItemInputRef}
                className="ti newItemTextInput"
              />
              <button className="button outline" type="submit">
                Add Item to Set
              </button>
            </form>
            <form onSubmit={this.removeItem}>
              <input
                value={itemToRemove}
                onChange={this.handleItemToRemoveChange}
                ref={this.removeItemInputRef}
                className="ti removeItemTextInput"
              />
              <button className="button outline" type="submit">
                Remove Item from Set
              </button>
              <br />
              <button
                className="button outline"
                type="button"
                onClick={this.clearSet}
              >
                Clear Set
              </button>
            </form>
          </div>
          <div className="rightColumn">
            <h2>Set Contents:</h2>
            <div className="setContainer">
              {set.isEmpty() ? (
                <p>(currently empty)</p>
              ) : (
                set.enumerate().map((value, index) => {
                  return (
                    <Item
                      value={value}
                      className={generateOddOrEvenClassName(index)}
                      key={index}
                    />
                  )
                })
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export const setVisualizer = () => <SetVisualizer />
