import React, { Component } from 'react'
import { naiveSearch } from '../naive-search/src/naive-search'
import { boyerMooreHorspoolSearch } from '../boyer-moore-horspool-search/src/boyer-moore-horspool-search'
import './search-performance-comparison-test.demo.css'
import { declarationOfIndependence } from '../demo-utils/declaration-of-independence'

export default {
  title: 'Algorithms/Search (String)/Search Comparisions',
}

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

    const startTimeForNaiveSearch = performance.now()
    naiveSearch(haystack, needle)
    const endTimeForNaiveSearch = performance.now()

    const startTimeForBoyerMooreHorspoolSearch = performance.now()
    const result = boyerMooreHorspoolSearch(haystack, needle)
    const endTimeForBoyerMooreHorspoolSearch = performance.now()

    this.setState({
      lastResultSet: {
        haystack,
        needle,
        result,
        timeTaken: {
          naiveSearch: endTimeForNaiveSearch - startTimeForNaiveSearch,
          boyerMooreHorspoolSearch:
            endTimeForBoyerMooreHorspoolSearch -
            startTimeForBoyerMooreHorspoolSearch,
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
                <b>&quot;{lastResultSet.needle}&quot;</b>. The string was{' '}
                <b>
                  {lastResultSet.result === -1
                    ? 'not found'
                    : `found at index ${lastResultSet.result}`}
                </b>
                .
              </p>
              <hr />
              <div>
                <h3>Naive Search </h3> took{' '}
                <b>{lastResultSet.timeTaken.naiveSearch.toFixed(3)}</b>{' '}
                milliseconds (or{' '}
                <b>{(lastResultSet.timeTaken.naiveSearch / 1000).toFixed(6)}</b>{' '}
                seconds).
              </div>
              <hr />
              <div>
                <h3>Boyer-Moore-Horspool Search </h3> took{' '}
                <b>
                  {lastResultSet.timeTaken.boyerMooreHorspoolSearch.toFixed(3)}
                </b>{' '}
                milliseconds (or{' '}
                <b>
                  {(
                    lastResultSet.timeTaken.boyerMooreHorspoolSearch / 1000
                  ).toFixed(6)}
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

export const performanceTest = () => <SearchPerformanceComparisonTest />
