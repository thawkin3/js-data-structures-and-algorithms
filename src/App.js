import React from 'react'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="header" id="home">
        <h1 id="page-title" className="text-uppercase">
          Data Structures and Algorithms
        </h1>
      </header>
      <main>
        <h2>Searching an Array</h2>
        <h3>Linear Search</h3>
        <h3>Binary Search</h3>
        <h2>Sorting an Array</h2>
        <h3>Bubble Sort</h3>
        <h3>Selection Sort</h3>
        <h3>Insert Sort</h3>
      </main>
      <footer className="container">
        <div className="footer">
          <p>Hand-coded by Tyler Hawkins</p>
          <p>&copy; 2019</p>
        </div>
      </footer>
    </div>
  )
}

export default App
