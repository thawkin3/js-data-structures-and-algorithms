/* eslint-disable */
import React, { Component } from 'react'
import { linearSearch } from '../linear-search/src/linear-search'
import { binarySearch } from '../binary-search/src/binary-search'
import './search-performance-comparison-test.demo.css'
import { declarationOfIndependence } from '../demo-utils/declaration-of-independence'

// TODO: Implement for strings, not arrays

// export default {
//   title: 'Algorithms|Search (Array)/Search Comparisions',
// }

class SearchPerformanceComparisonTest extends Component {
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

    const startTimeForLinearSearch = performance.now()
    linearSearch(haystack, needle)
    const endTimeForLinearSearch = performance.now()

    const startTimeForBinarySearch = performance.now()
    binarySearch(haystack, needle)
    const endTimeForBinarySearch = performance.now()

    this.setState({
      lastResultSet: {
        haystack,
        needle,
        timeTaken: {
          linearSearch: endTimeForLinearSearch - startTimeForLinearSearch,
          binarySearch: endTimeForBinarySearch - startTimeForBinarySearch,
        },
      },
    })
  }

  render() {
    const { needle, haystack, lastResultSet } = this.state

    return (
      <div className="searchComparisonDemo">
        <h1>Performance Test Comparing Various Searching Algorithms</h1>
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
            Run All Searching Algorithms
          </button>
        </form>
        <div>
          <h2>Performance Results:</h2>
          {lastResultSet && (
            <div>
              <p>
                Searching the string for{' '}
                <b>&quot;{lastResultSet.needle}&quot;</b>:
              </p>
              <hr />
              <div>
                <h3>Linear Search </h3> took{' '}
                <b>{lastResultSet.timeTaken.linearSearch.toFixed(3)}</b>{' '}
                milliseconds (or{' '}
                <b>
                  {(lastResultSet.timeTaken.linearSearch / 1000).toFixed(6)}
                </b>{' '}
                seconds).
              </div>
              <hr />
              <div>
                <h3>Binary Search </h3> took{' '}
                <b>{lastResultSet.timeTaken.binarySearch.toFixed(3)}</b>{' '}
                milliseconds (or{' '}
                <b>
                  {(lastResultSet.timeTaken.binarySearch / 1000).toFixed(6)}
                </b>{' '}
                seconds).
              </div>
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

// export const performanceTest = () => <SearchPerformanceComparisonTest />
