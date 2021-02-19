import React from 'react'
import { countSort } from '../src/count-sort'
import { SortPerformanceTest } from '../../demo-utils/sort-performance-test.demo'

export default {
  title: 'Algorithms|Sort/Count Sort',
}

export const countSortPerformanceTest = () => (
  <SortPerformanceTest sortMethodName="Count Sort" sortMethod={countSort} />
)
