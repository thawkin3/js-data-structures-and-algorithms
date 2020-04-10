import React, { Component } from 'react'
import './search-performance-test.demo.css'

export class SearchPerformanceTest extends Component {
  state = {
    needle: '',
    haystack: [],
    haystackConvertedToNumbers: [],
    lastResultSet: null,
  }

  componentDidMount() {
    this.generateArray()
  }

  generateArray = () => {
    const { searchMethodName } = this.props
    const initialSearchArray = []

    // Need a sorted array for binary search
    if (searchMethodName === 'Binary Search') {
      for (let i = 0; i < 100000; i += 5) {
        initialSearchArray.push(i + 1 + Math.floor(Math.random() * 4))
      }
      // Array can be in random order for other search methods
    } else {
      for (let i = 0; i < 20000; i++) {
        initialSearchArray.push(Math.floor(Math.random() * 20000))
      }
    }

    this.setState({
      haystack: initialSearchArray,
      haystackConvertedToNumbers: initialSearchArray,
    })
  }

  handleNeedleChange = e => {
    this.setState({ needle: e.target.value })
  }

  handleHaystackChange = e => {
    const updatedHaystack = e.target.value.split(', ')
    const haystackConvertedToNumbers = updatedHaystack.reduce(
      (fullArray, value) => {
        const valueWithoutTrailingComma = value.replace(',', '')
        if (valueWithoutTrailingComma === '') {
          return fullArray
        }

        const valueConvertedToNumberIfPossible = isNaN(
          valueWithoutTrailingComma
        )
          ? valueWithoutTrailingComma
          : Number(valueWithoutTrailingComma)
        return [...fullArray, valueConvertedToNumberIfPossible]
      },
      []
    )
    this.setState({ haystack: updatedHaystack, haystackConvertedToNumbers })
  }

  runPerformanceTest = e => {
    e.preventDefault()

    const { needle, haystackConvertedToNumbers } = this.state
    const { searchMethod } = this.props

    if (
      !needle ||
      !haystackConvertedToNumbers ||
      haystackConvertedToNumbers.length === 0
    ) {
      return this.setState({ lastResultSet: null })
    }

    const needleConvertedToNumberIfPossible = isNaN(needle)
      ? needle
      : Number(needle)
    const startTime = performance.now()
    const result = searchMethod(
      haystackConvertedToNumbers,
      needleConvertedToNumberIfPossible
    )
    const endTime = performance.now()

    this.setState({
      lastResultSet: {
        haystack: [...haystackConvertedToNumbers],
        needle,
        result,
        timeTaken: endTime - startTime,
      },
    })
  }

  render() {
    const { needle, haystack, lastResultSet } = this.state
    const { searchMethodName } = this.props

    return (
      <div className="searchComparisonDemo">
        <h1>{searchMethodName} Performance Test</h1>
        <form onSubmit={this.runPerformanceTest}>
          <label>
            <span>Value to search for (needle):</span>
            <input
              value={needle}
              onChange={this.handleNeedleChange}
              className="ti needleInput"
            />
          </label>
          <br />
          <label className="haystackTextAreaLabel">
            <span>Array to search in (haystack):</span>
            <textarea
              value={haystack.join(', ')}
              onChange={this.handleHaystackChange}
              className="ti haystackTextArea"
            />
          </label>
          <br />
          <button className="button outline" type="submit">
            Run {searchMethodName}
          </button>
        </form>
        <div>
          <h2>{searchMethodName} Performance Results:</h2>
          {lastResultSet && (
            <div>
              <p>
                Searching the array for{' '}
                <b>&quot;{lastResultSet.needle}&quot;</b> using a{' '}
                <b>{searchMethodName}</b> took{' '}
                <b>{lastResultSet.timeTaken.toFixed(3)}</b> milliseconds (or{' '}
                <b>{(lastResultSet.timeTaken / 1000).toFixed(6)}</b> seconds).
              </p>
              <p>
                The search term was{' '}
                <b>
                  {lastResultSet.result === -1
                    ? 'not found'
                    : `found at index ${lastResultSet.result}`}
                </b>
                .
              </p>
              <hr />
              <div className="arrayHaystack">
                <b>Array Haystack:</b>{' '}
                <div className="arrayHaystackCharacters">
                  {lastResultSet.haystack.join(', ')}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
}
