import React, { Component } from 'react'
import { Set } from '../../../../data-structures/set/src/set'
import { intersection } from '../src/intersection'
import './intersection.demo.css'

export default {
  title: 'Algorithms/Set/Intersection',
}

class IntersectionOfTwoSetsVisualizer extends Component {
  state = {
    set1Csv: '',
    set2Csv: '',
  }

  handleSet1CsvChange = e => {
    this.setState({ set1Csv: e.target.value })
  }

  handleSet2CsvChange = e => {
    this.setState({ set2Csv: e.target.value })
  }

  findIntersection = () => {
    const { set1Csv, set2Csv } = this.state

    const set1 = new Set()
    set1Csv.split(',').forEach(val => {
      if (val.trim()) {
        set1.add(val.trim())
      }
    })

    const set2 = new Set()
    set2Csv.split(',').forEach(val => {
      if (val.trim()) {
        set2.add(val.trim())
      }
    })

    return <p>{intersection(set1, set2).enumerate().join(', ')}</p>
  }

  render() {
    const { set1Csv, set2Csv } = this.state

    return (
      <div className="intersectionDemo">
        <h1>Intersection of Two Sets Demo</h1>
        <p>
          Enter comma-separated values into each text input to add items to each
          set.
        </p>
        <form onSubmit={this.addItem}>
          <label>
            <span>Set 1:</span>
            <input
              value={set1Csv}
              placeholder="Ex. 1, 2, 3"
              onChange={this.handleSet1CsvChange}
              className="ti input"
            />
          </label>
          <br />
          <label>
            <span>Set 2:</span>
            <input
              value={set2Csv}
              placeholder="Ex. 3, 4, 5"
              onChange={this.handleSet2CsvChange}
              className="ti input"
            />
          </label>
        </form>
        <div>
          <h2>Intersection of Set 1 and Set 2:</h2>
          {this.findIntersection()}
        </div>
      </div>
    )
  }
}

export const intersectionOfTwoSetsVisualizer = () => (
  <IntersectionOfTwoSetsVisualizer />
)
