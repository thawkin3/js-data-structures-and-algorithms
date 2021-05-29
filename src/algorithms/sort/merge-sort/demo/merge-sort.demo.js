import React from 'react'
import { mergeSort } from '../src/merge-sort'
import { SortPerformanceTest } from '../../demo-utils/sort-performance-test.demo'

export default {
  title: 'Algorithms/Sort/Merge Sort',
}

export const mergeSortPerformanceTest = () => (
  <SortPerformanceTest sortMethodName="Merge Sort" sortMethod={mergeSort} />
)
