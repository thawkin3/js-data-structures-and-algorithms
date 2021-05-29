import React from 'react'
import { quickSort } from '../src/quick-sort'
import { SortPerformanceTest } from '../../demo-utils/sort-performance-test.demo'

export default {
  title: 'Algorithms/Sort/Quick Sort',
}

export const quickSortPerformanceTest = () => (
  <SortPerformanceTest sortMethodName="Quick Sort" sortMethod={quickSort} />
)
