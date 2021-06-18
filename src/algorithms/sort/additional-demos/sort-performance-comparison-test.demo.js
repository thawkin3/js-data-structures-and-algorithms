import React, { Component } from 'react'
import './sort-performance-comparison-test.demo.css'
import { bubbleSort } from '../bubble-sort/src/bubble-sort'
import { countingSort } from '../counting-sort/src/counting-sort'
import { insertionSort } from '../insertion-sort/src/insertion-sort'
import { mergeSort } from '../merge-sort/src/merge-sort'
import { quickSort } from '../quick-sort/src/quick-sort'
import { selectionSort } from '../selection-sort/src/selection-sort'

export default {
  title: 'Algorithms/Sort/Sort Comparisons',
}

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

class SortPerformanceComparisonTest extends Component {
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

    const arrayKey = `${selectedInitialSortOrder.replace(
      /\s/g,
      '-'
    )}-${selectedArrayElementCount}`

    let initialArrayCopy = [...storedArrays[arrayKey].initialArray]
    const startTimeForBubbleSort = performance.now()
    bubbleSort(initialArrayCopy)
    const endTimeForBubbleSort = performance.now()

    initialArrayCopy = [...storedArrays[arrayKey].initialArray]
    const startTimeForCountingSort = performance.now()
    countingSort(initialArrayCopy)
    const endTimeForCountingSort = performance.now()

    initialArrayCopy = [...storedArrays[arrayKey].initialArray]
    const startTimeForInsertionSort = performance.now()
    insertionSort(initialArrayCopy)
    const endTimeForInsertionSort = performance.now()

    initialArrayCopy = [...storedArrays[arrayKey].initialArray]
    const startTimeForMergeSort = performance.now()
    mergeSort(initialArrayCopy)
    const endTimeForMergeSort = performance.now()

    initialArrayCopy = [...storedArrays[arrayKey].initialArray]
    const startTimeForQuickSort = performance.now()
    quickSort(initialArrayCopy)
    const endTimeForQuickSort = performance.now()

    initialArrayCopy = [...storedArrays[arrayKey].initialArray]
    const startTimeForSelectionSort = performance.now()
    selectionSort(initialArrayCopy)
    const endTimeForSelectionSort = performance.now()

    this.setState(prevState => ({
      currentResultKey: arrayKey,
      storedArrays: {
        ...prevState.storedArrays,
        [arrayKey]: {
          ...prevState.storedArrays[arrayKey],
          timeTaken: {
            bubbleSort: endTimeForBubbleSort - startTimeForBubbleSort,
            countingSort: endTimeForCountingSort - startTimeForCountingSort,
            insertionSort: endTimeForInsertionSort - startTimeForInsertionSort,
            mergeSort: endTimeForMergeSort - startTimeForMergeSort,
            quickSort: endTimeForQuickSort - startTimeForQuickSort,
            selectionSort: endTimeForSelectionSort - startTimeForSelectionSort,
          },
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

    return (
      <div className="sortComparisonDemo">
        <h1>Performance Test Comparing Various Sorting Algorithms</h1>
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
            Run All Sorting Algorithms
          </button>
          {isGeneratingNewArray && (
            <p>Generating new array... sit tight for a second.</p>
          )}
        </form>
        <div>
          <h2>Performance Results:</h2>
          {currentResultKey && currentResultKey in storedArrays && (
            <div>
              <p>
                Sorting an array of{' '}
                <b>{storedArrays[currentResultKey].elementCount}</b> elements
                that were{' '}
                <b>{storedArrays[currentResultKey].initialSortOrder}</b>.
              </p>
              <hr />
              <div>
                <h3>Bubble Sort </h3> took{' '}
                <b>
                  {storedArrays[currentResultKey].timeTaken.bubbleSort.toFixed(
                    3
                  )}
                </b>{' '}
                milliseconds (or{' '}
                <b>
                  {(
                    storedArrays[currentResultKey].timeTaken.bubbleSort / 1000
                  ).toFixed(6)}
                </b>{' '}
                seconds).
              </div>
              <hr />
              <div>
                <h3>Counting Sort </h3> took{' '}
                <b>
                  {storedArrays[
                    currentResultKey
                  ].timeTaken.countingSort.toFixed(3)}
                </b>{' '}
                milliseconds (or{' '}
                <b>
                  {(
                    storedArrays[currentResultKey].timeTaken.countingSort / 1000
                  ).toFixed(6)}
                </b>{' '}
                seconds).
              </div>
              <hr />
              <div>
                <h3>Insertion Sort </h3> took{' '}
                <b>
                  {storedArrays[
                    currentResultKey
                  ].timeTaken.insertionSort.toFixed(3)}
                </b>{' '}
                milliseconds (or{' '}
                <b>
                  {(
                    storedArrays[currentResultKey].timeTaken.insertionSort /
                    1000
                  ).toFixed(6)}
                </b>{' '}
                seconds).
              </div>
              <hr />
              <div>
                <h3>Merge Sort</h3> took{' '}
                <b>
                  {storedArrays[currentResultKey].timeTaken.mergeSort.toFixed(
                    3
                  )}
                </b>{' '}
                milliseconds (or{' '}
                <b>
                  {(
                    storedArrays[currentResultKey].timeTaken.mergeSort / 1000
                  ).toFixed(6)}
                </b>{' '}
                seconds).
              </div>
              <hr />
              <div>
                <h3>Quick Sort</h3> took{' '}
                <b>
                  {storedArrays[currentResultKey].timeTaken.quickSort.toFixed(
                    3
                  )}
                </b>{' '}
                milliseconds (or{' '}
                <b>
                  {(
                    storedArrays[currentResultKey].timeTaken.quickSort / 1000
                  ).toFixed(6)}
                </b>{' '}
                seconds).
              </div>
              <hr />
              <div>
                <h3>Selection Sort</h3> took{' '}
                <b>
                  {storedArrays[
                    currentResultKey
                  ].timeTaken.selectionSort.toFixed(3)}
                </b>{' '}
                milliseconds (or{' '}
                <b>
                  {(
                    storedArrays[currentResultKey].timeTaken.selectionSort /
                    1000
                  ).toFixed(6)}
                </b>{' '}
                seconds).
              </div>
              <hr />
              <div className="arrayData">
                <b>Initial Array:</b>{' '}
                <div className="elements">
                  {storedArrays[currentResultKey].initialArray.join(', ')}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export const performanceTest = () => <SortPerformanceComparisonTest />
