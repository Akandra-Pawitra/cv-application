import React from 'react'
import { Education } from './components/education'
import { Experience } from './components/experience'
import { Personal } from './components/personal'

class Form extends React.Component {
  constructor (props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (event) {
    // do something
    event.preventDefault()
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <div id='info'>
          <Personal getData={this.getData}/>
          <Education getData={this.getData}/>
          <Experience getData={this.getData}/>
        </div>
        <div id='submit'>
          <input type='submit' value='CREATE' />
        </div>
      </form>
    )
  }
}

class App extends React.Component {
  render () {
    return (
      <div className='wrapper'>
        <h1 id='title'>CREATE YOUR CV</h1>
        <Form />
      </div>
    )
  }
}

export default App
