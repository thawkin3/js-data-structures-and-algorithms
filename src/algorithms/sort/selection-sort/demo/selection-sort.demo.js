import React from 'react'
import { selectionSort } from '../src/selection-sort'
import { SortPerformanceTest } from '../../demo-utils/sort-performance-test.demo'

export default {
  title: 'Algorithms/Sort/Selection Sort',
}

export const selectionSortPerformanceTest = () => (
  <SortPerformanceTest
    sortMethodName="Selection Sort"
    sortMethod={selectionSort}
  />
)
