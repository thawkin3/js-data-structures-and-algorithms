import React from 'react'
import { countingSort } from '../src/counting-sort'
import { SortPerformanceTest } from '../../demo-utils/sort-performance-test.demo'

export default {
  title: 'Algorithms/Sort/Counting Sort',
}

export const countingSortPerformanceTest = () => (
  <SortPerformanceTest
    sortMethodName="Counting Sort"
    sortMethod={countingSort}
  />
)
