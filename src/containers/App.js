import React, { Component } from 'react'
import FormSearch from './FormSearch'
import SearchResult from './SearchResult'

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h2>Repositories By Organization</h2>
        </header>
        <FormSearch />
        <SearchResult />
      </div>
    )
  }
}

export default App;
