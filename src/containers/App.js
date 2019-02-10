import React, { Component } from 'react'
import FormSearch from './FormSearch'

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h2>Repositories By Organization</h2>
        </header>
        <FormSearch />
      </div>
    )
  }
}

export default App;
