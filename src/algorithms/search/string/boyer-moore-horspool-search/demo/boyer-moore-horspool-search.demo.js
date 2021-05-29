import React from 'react'
import { SearchPerformanceTest } from '../../demo-utils/search-performance-test.demo'
import { boyerMooreHorspoolSearch } from '../src/boyer-moore-horspool-search'

export default {
  title: 'Algorithms/Search (String)/Boyer-Moore-Horspool Search',
}

export const boyerMooreHorspoolSearchPerformanceTest = () => (
  <SearchPerformanceTest
    searchMethodName="Boyer-Moore-Horspool Search"
    searchMethod={boyerMooreHorspoolSearch}
  />
)
