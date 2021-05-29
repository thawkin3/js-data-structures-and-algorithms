import React from 'react'
import { SearchPerformanceTest } from '../../demo-utils/search-performance-test.demo'
import { linearSearch } from '../src/linear-search'

export default {
  title: 'Algorithms/Search (Array)/Linear Search',
}

export const linearSearchPerformanceTest = () => (
  <SearchPerformanceTest
    searchMethodName="Linear Search"
    searchMethod={linearSearch}
  />
)
