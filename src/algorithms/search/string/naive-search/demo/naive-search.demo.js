import React from 'react'
import { SearchPerformanceTest } from '../../demo-utils/search-performance-test.demo'
import { naiveSearch } from '../src/naive-search'

export default {
  title: 'Algorithms/Search (String)/Naive Search',
}

export const naiveSearchPerformanceTest = () => (
  <SearchPerformanceTest
    searchMethodName="Naive Search"
    searchMethod={naiveSearch}
  />
)
