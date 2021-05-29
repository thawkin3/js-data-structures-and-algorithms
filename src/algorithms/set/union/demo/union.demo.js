import React, { Component } from 'react'
import { Set } from '../../../../data-structures/set/src/set'
import { union } from '../src/union'
import './union.demo.css'

export default {
  title: 'Algorithms/Set/Union',
}

class UnionOfTwoSetsVisualizer extends Component {
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

  findUnion = () => {
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

    return <p>{union(set1, set2).enumerate().join(', ')}</p>
  }

  render() {
    const { set1Csv, set2Csv } = this.state

    return (
      <div className="unionDemo">
        <h1>Union of Two Sets Demo</h1>
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
          <h2>Union of Set 1 and Set 2:</h2>
          {this.findUnion()}
        </div>
      </div>
    )
  }
}

export const unionOfTwoSetsVisualizer = () => <UnionOfTwoSetsVisualizer />
