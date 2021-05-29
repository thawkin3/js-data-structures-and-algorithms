import React from 'react'
import { bubbleSort } from '../src/bubble-sort'
import { SortPerformanceTest } from '../../demo-utils/sort-performance-test.demo'

export default {
  title: 'Algorithms/Sort/Bubble Sort',
}

export const bubbleSortPerformanceTest = () => (
  <SortPerformanceTest sortMethodName="Bubble Sort" sortMethod={bubbleSort} />
)
