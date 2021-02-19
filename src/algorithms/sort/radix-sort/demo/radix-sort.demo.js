import React from 'react'
import { radixSort } from '../src/radix-sort'
import { SortPerformanceTest } from '../../demo-utils/sort-performance-test.demo'

export default {
  title: 'Algorithms|Sort/Radix Sort',
}

export const radixSortPerformanceTest = () => (
  <SortPerformanceTest sortMethodName="Radix Sort" sortMethod={radixSort} />
)
