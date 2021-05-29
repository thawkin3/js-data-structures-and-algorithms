import React from 'react'
import { SearchPerformanceTest } from '../../demo-utils/search-performance-test.demo'
import { binarySearch } from '../src/binary-search'

export default {
  title: 'Algorithms/Search (Array)/Binary Search',
}

export const binarySearchPerformanceTest = () => (
  <SearchPerformanceTest
    searchMethodName="Binary Search"
    searchMethod={binarySearch}
  />
)
