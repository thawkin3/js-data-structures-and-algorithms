import React, { Component } from 'react'
import { linearSearch } from '../linear-search/src/linear-search'
import { binarySearch } from '../binary-search/src/binary-search'
import './search-performance-comparison-test.demo.css'

export default {
  title: 'Algorithms/Search (Array)/Search Comparisions',
}

class SearchPerformanceComparisonTest extends Component {
  state = {
    needle: '',
    haystack: [],
    lastResultSet: null,
  }

  componentDidMount() {
    this.generateArray()
  }

  generateArray = () => {
    // Need a sorted array for binary search, so we'll have to just use the
    // same sorted array for all of the search algorithms for a fair comparison
    const initialSearchArray = []
    for (let i = 0; i < 100000; i += 5) {
      initialSearchArray.push(String(i + 1 + Math.floor(Math.random() * 4)))
    }

    this.setState({ haystack: initialSearchArray })
  }

  handleNeedleChange = e => {
    this.setState({ needle: e.target.value })
  }

  handleHaystackChange = e => {
    this.setState({ haystack: e.target.value.split(', ') })
  }

  runPerformanceTest = e => {
    e.preventDefault()

    const { needle, haystack } = this.state

    const startTimeForLinearSearch = performance.now()
    const result = linearSearch(haystack, needle)
    const endTimeForLinearSearch = performance.now()

    const startTimeForBinarySearch = performance.now()
    binarySearch(haystack, needle)
    const endTimeForBinarySearch = performance.now()

    this.setState({
      lastResultSet: {
        haystack,
        needle,
        result,
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
            Run All Searching Algorithms
          </button>
        </form>
        <div>
          <h2>Performance Results:</h2>
          {lastResultSet && (
            <div>
              <p>
                Searching the array for{' '}
                <b>&quot;{lastResultSet.needle}&quot;</b>. The search term was{' '}
                <b>
                  {lastResultSet.result === -1
                    ? 'not found'
                    : `found at index ${lastResultSet.result}`}
                </b>
                .
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
              <div className="arrayHaystack">
                <b>Array Haystack:</b>{' '}
                <div className="arrayHaystackCharacters">
                  {haystack.join(', ')}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export const performanceTest = () => <SearchPerformanceComparisonTest />
