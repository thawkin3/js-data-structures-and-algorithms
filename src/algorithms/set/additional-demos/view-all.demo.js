import React, { Component } from 'react'
import { Set } from '../../../data-structures/set/src/set'
import { union } from '../union/src/union'
import { intersection } from '../intersection/src/intersection'
import { setDifference } from '../set-difference/src/set-difference'
import { symmetricDifference } from '../symmetric-difference/src/symmetric-difference'
import './view-all.demo.css'

export default {
  title: 'Algorithms/Set/View All Side by Side',
}

class ViewAllSetAlgorithms extends Component {
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

  renderOutput = () => {
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

    return (
      <div>
        <h2>Union of Set 1 and Set 2:</h2>
        <p>{union(set1, set2).enumerate().join(', ')}</p>
        <hr />
        <h2>Intersection of Set 1 and Set 2:</h2>
        <p>{intersection(set1, set2).enumerate().join(', ')}</p>
        <hr />
        <h2>Set Difference of Set 1 and Set 2:</h2>
        <p>{setDifference(set1, set2).enumerate().join(', ')}</p>
        <hr />
        <h2>Set Difference of Set 2 and Set 1:</h2>
        <p>{setDifference(set2, set1).enumerate().join(', ')}</p>
        <hr />
        <h2>Symmetric Difference of Set 1 and Set 2:</h2>
        <p>{symmetricDifference(set1, set2).enumerate().join(', ')}</p>
      </div>
    )
  }

  render() {
    const { set1Csv, set2Csv } = this.state

    return (
      <div className="viewAllDemo">
        <h1>Set Algorithm Comparison Demo</h1>
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
        <div>{this.renderOutput()}</div>
      </div>
    )
  }
}

export const viewAllSetAlgorithms = () => <ViewAllSetAlgorithms />
