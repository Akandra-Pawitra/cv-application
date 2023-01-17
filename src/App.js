import React from 'react'
import { Education } from './components/education'
import { Experience } from './components/experience'
import { Personal } from './components/personal'

class Form extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      address: '',
      phone: '',
      email: '',
      social: '',
      school: '',
      study: '',
      startEdu: '',
      endEdu: '',
      company: '',
      role: '',
      startWork: '',
      endWork: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (info, data) {
    this.setState({ [info]: data })
  }

  handleSubmit (event) {
    console.log(this.state)
    event.preventDefault()
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <div id='info'>
          <Personal info={this.state} handleChange={this.handleChange} />
          <Education info={this.state} handleChange={this.handleChange} />
          <Experience info={this.state} handleChange={this.handleChange} />
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
