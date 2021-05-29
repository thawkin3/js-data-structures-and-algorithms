import React from 'react'
import { insertionSort } from '../src/insertion-sort'
import { SortPerformanceTest } from '../../demo-utils/sort-performance-test.demo'

export default {
  title: 'Algorithms/Sort/Insertion Sort',
}

export const insertionSortPerformanceTest = () => (
  <SortPerformanceTest
    sortMethodName="Insertion Sort"
    sortMethod={insertionSort}
  />
)
