import React, { Component } from 'react'
import './sort-performance-test.demo.css'

const arrayElementCountOptions = [
  '0',
  '1',
  '2',
  '10',
  '100',
  '1,000',
  '10,000',
  '100,000',
  '1,000,000',
]
const initialSortOrderOptions = [
  'randomly ordered',
  'inversely sorted',
  'mostly sorted',
  'already sorted',
]

export class SortPerformanceTest extends Component {
  state = {
    selectedArrayElementCount: '100',
    selectedInitialSortOrder: 'randomly ordered',
    storedArrays: {},
    isGeneratingNewArray: false,
    currentResultKey: null,
  }

  componentDidMount() {
    this.generateArray()
  }

  handleArrayElementCountChange = e => {
    this.setState(
      { selectedArrayElementCount: e.target.value },
      this.generateArray
    )
  }

  handleInitialSortOrderChange = e => {
    this.setState(
      { selectedInitialSortOrder: e.target.value },
      this.generateArray
    )
  }

  generateArray = () => {
    const {
      selectedArrayElementCount,
      selectedInitialSortOrder,
      storedArrays,
    } = this.state

    // we cache the generated arrays, so check if the array exists before generating a new array
    if (
      `${selectedInitialSortOrder.replace(
        /\s/g,
        '-'
      )}-${selectedArrayElementCount}` in storedArrays
    ) {
      return
    }

    // otherwise, generate the new array
    this.setState({ isGeneratingNewArray: true })
    const arrayBeingGenerated = []
    const desiredArrayLength = Number(
      selectedArrayElementCount.replace(/,/g, '')
    )

    switch (selectedInitialSortOrder) {
      case 'randomly ordered':
        for (let i = 0; i < desiredArrayLength; i++) {
          arrayBeingGenerated.push(
            Math.floor(Math.random() * desiredArrayLength)
          )
        }
        break
      case 'inversely sorted':
        for (let i = desiredArrayLength; i > 0; i--) {
          arrayBeingGenerated.push(i)
        }
        break
      case 'mostly sorted':
        // generate a sorted array
        for (let i = 0; i < desiredArrayLength; i++) {
          arrayBeingGenerated.push(i)
        }

        // swap the first element with a random element
        const temp = arrayBeingGenerated[0]
        const randomIndexToSwap = Math.floor(
          Math.random() * arrayBeingGenerated.length
        )
        arrayBeingGenerated[0] = arrayBeingGenerated[randomIndexToSwap]
        arrayBeingGenerated[randomIndexToSwap] = temp
        break
      case 'already sorted':
      default:
        for (let i = 0; i < desiredArrayLength; i++) {
          arrayBeingGenerated.push(i)
        }
    }

    this.setState(prevState => ({
      storedArrays: {
        ...prevState.storedArrays,
        [`${selectedInitialSortOrder.replace(
          /\s/g,
          '-'
        )}-${selectedArrayElementCount}`]: {
          elementCount: selectedArrayElementCount,
          initialSortOrder: selectedInitialSortOrder,
          initialArray: arrayBeingGenerated,
          resultingArray: null,
          timeTaken: null,
        },
      },
      isGeneratingNewArray: false,
    }))
  }

  runPerformanceTest = e => {
    e.preventDefault()

    const {
      selectedArrayElementCount,
      selectedInitialSortOrder,
      storedArrays,
    } = this.state

    const { sortMethod } = this.props

    const arrayKey = `${selectedInitialSortOrder.replace(
      /\s/g,
      '-'
    )}-${selectedArrayElementCount}`

    const startTime = performance.now()
    const resultingArray = sortMethod(storedArrays[arrayKey].initialArray)
    const endTime = performance.now()

    this.setState(prevState => ({
      currentResultKey: arrayKey,
      storedArrays: {
        ...prevState.storedArrays,
        [arrayKey]: {
          ...prevState.storedArrays[arrayKey],
          resultingArray,
          timeTaken: endTime - startTime,
        },
      },
    }))
  }

  render() {
    const {
      selectedArrayElementCount,
      selectedInitialSortOrder,
      isGeneratingNewArray,
      currentResultKey,
      storedArrays,
    } = this.state

    const { sortMethodName } = this.props

    return (
      <div className="sortDemo">
        <h1>{sortMethodName} Performance Test</h1>
        <form onSubmit={this.runPerformanceTest}>
          <label>
            <span>Number of Elements in the Array:</span>
            <select
              value={selectedArrayElementCount}
              onChange={this.handleArrayElementCountChange}
              className="input"
            >
              {arrayElementCountOptions.map(value => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>
          </label>
          <br />
          <label>
            <span>Initial Sort Order of the Array:</span>
            <select
              value={selectedInitialSortOrder}
              onChange={this.handleInitialSortOrderChange}
              className="input"
            >
              {initialSortOrderOptions.map(value => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>
          </label>
          <br />
          <button
            className="button outline"
            type="submit"
            disabled={isGeneratingNewArray}
          >
            Run {sortMethodName}
          </button>
          {isGeneratingNewArray && (
            <p>Generating new array... sit tight for a second.</p>
          )}
        </form>
        <div>
          <h2>{sortMethodName} Performance Results:</h2>
          {currentResultKey && currentResultKey in storedArrays && (
            <div>
              <p>
                Sorting an array of{' '}
                <b>{storedArrays[currentResultKey].elementCount}</b> elements
                that were{' '}
                <b>{storedArrays[currentResultKey].initialSortOrder}</b> using a{' '}
                <b>{sortMethodName}</b> took{' '}
                <b>{storedArrays[currentResultKey].timeTaken.toFixed(3)}</b>{' '}
                milliseconds (or{' '}
                <b>
                  {(storedArrays[currentResultKey].timeTaken / 1000).toFixed(6)}
                </b>{' '}
                seconds).
              </p>
              <p className="arrayData">
                <b>Initial Array:</b>{' '}
                {storedArrays[currentResultKey].initialArray.join(', ')}
              </p>
              <p className="arrayData">
                <b>Sorted Array:</b>{' '}
                {storedArrays[currentResultKey].resultingArray.join(', ')}
              </p>
            </div>
          )}
        </div>
      </div>
    )
  }
}
