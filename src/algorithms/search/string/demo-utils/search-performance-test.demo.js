import React, { Component } from 'react'
import './search-performance-test.demo.css'
import { declarationOfIndependence } from './declaration-of-independence'

export class SearchPerformanceTest extends Component {
  state = {
    needle: '',
    haystack: declarationOfIndependence,
    lastResultSet: null,
  }

  handleNeedleChange = e => {
    this.setState({ needle: e.target.value })
  }

  handleHaystackChange = e => {
    this.setState({ haystack: e.target.value })
  }

  runPerformanceTest = e => {
    e.preventDefault()

    const { needle, haystack } = this.state
    const { searchMethod } = this.props

    const startTime = performance.now()
    const result = searchMethod(haystack, needle)
    const endTime = performance.now()

    this.setState({
      lastResultSet: {
        haystack,
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
            <span>String to search for (needle):</span>
            <input
              value={needle}
              onChange={this.handleNeedleChange}
              className="ti needleInput"
            />
          </label>
          <br />
          <label className="haystackTextAreaLabel">
            <span>String to search in (haystack):</span>
            <textarea
              value={haystack}
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
                Searching the string for{' '}
                <b>&quot;{lastResultSet.needle}&quot;</b> using a{' '}
                <b>{searchMethodName}</b> took{' '}
                <b>{lastResultSet.timeTaken.toFixed(3)}</b> milliseconds (or{' '}
                <b>{(lastResultSet.timeTaken / 1000).toFixed(6)}</b> seconds).
              </p>
              <p>
                The string was{' '}
                <b>
                  {lastResultSet.result === -1
                    ? 'not found'
                    : `found at index ${lastResultSet.result}`}
                </b>
                .
              </p>
              <hr />
              <div className="stringHaystack">
                <b>String Haystack:</b>{' '}
                <div className="stringHaystackCharacters">{haystack}</div>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
}
