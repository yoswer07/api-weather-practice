import './App.css'
import Search from './components/search.js'
import React from 'react'

function App () {
  const handleOnSearchChange = (searchData) => {
    console.log(searchData)
  }

  return (
    <div className="App">
      <Search onSearchChange={handleOnSearchChange}/>
    </div>
  )
}

export default App
