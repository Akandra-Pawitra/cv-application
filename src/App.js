import React from 'react'
import PropTypes from 'prop-types'
import { InputEducation, DisplayEducation } from './components/education'
import { InputExperience, DisplayExperience } from './components/experience'
import { InputPersonal, DisplayPersonal } from './components/personal'

class Form extends React.Component {
  constructor (props) {
    super(props)
    this.createCv = this.createCv.bind(this)
  }

  createCv () {
    const title = document.getElementById('title')
    const create = document.getElementById('create-cv')
    const confirm = document.getElementById('confirm-cv')
    title.textContent = 'DOUBLE CHECK YOUR CV'
    create.style = 'display: none'
    confirm.style = 'display: block'
  }

  render () {
    return (
      <fieldset id='create-cv'>
        <div id='info'>
          <InputPersonal info={this.props.info} handleChange={this.props.handleChange} />
          <InputEducation info={this.props.info} handleChange={this.props.handleChange} />
          <InputExperience info={this.props.info} handleChange={this.props.handleChange} />
        </div>
        <div id='submit'>
          <button onClick={this.createCv}>CREATE</button>
        </div>
      </fieldset>
    )
  }
}

Form.propTypes = {
  info: PropTypes.object,
  handleChange: PropTypes.func
}

class Edit extends React.Component {
  constructor (props) {
    super(props)
    this.editCv = this.editCv.bind(this)
    this.confirmCv = this.confirmCv.bind(this)
  }

  editCv () {
    const title = document.getElementById('title')
    const create = document.getElementById('create-cv')
    const confirm = document.getElementById('confirm-cv')
    title.textContent = 'EDIT'
    create.style = 'display: block'
    confirm.style = 'display: none'
  }

  confirmCv () {
    const title = document.getElementById('title')
    const confirm = document.getElementById('confirm')
    const create = document.getElementById('create-cv')
    const cv = document.getElementById('confirm-cv')
    title.style = 'display: none'
    confirm.style = 'display: none'
    create.style = 'display: none'
    cv.style = 'padding-bottom: 43px; margin-top: 95px; display: block'
  }

  render () {
    return (
      <fieldset id='confirm-cv'>
        <div id='edit'>
          <DisplayPersonal info={this.props.info} />
          <DisplayEducation info={this.props.info} />
          <DisplayExperience info={this.props.info} />
        </div>
        <div id='confirm'>
          <button onClick={this.editCv}>EDIT</button>
          <button onClick={this.confirmCv}>CONFIRM</button>
        </div>
      </fieldset>
    )
  }
}

Edit.propTypes = {
  info: PropTypes.object
}

class App extends React.Component {
  constructor () {
    super()
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
  }

  handleChange (info, data) {
    this.setState({ [info]: data })
  }

  render () {
    return (
      <div className='wrapper'>
        <h1 id='title'>CREATE YOUR CV</h1>
        <div id='input-cv'>
          <Form info={this.state} handleChange={this.handleChange} />
        </div>
        <div id='edit-cv'>
          <Edit info={this.state} />
        </div>
      </div>
    )
  }
}

export default App
