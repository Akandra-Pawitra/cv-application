import React from 'react'
import PropTypes from 'prop-types'

function Label () {
  return (
    <div className="input-exp-grid">
      <label htmlFor="company">Company</label>
      <label htmlFor="role">Role</label>
      <label htmlFor="start-work">Start</label>
      <label htmlFor="end-work">End</label>
    </div>
  )
}

function Colon () {
  return (
    <div className="input-exp-grid">
      <p>:</p>
      <p>:</p>
      <p>:</p>
      <p>:</p>
    </div>
  )
}

class Input extends React.Component {
  constructor (props) {
    super(props)
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange (event) {
    this.props.handleChange(event.target.name, event.target.value)
    event.preventDefault()
  }

  render () {
    return (
      <div className="input-exp-grid">
        <input
          type="text"
          id="company"
          name='company'
          placeholder="Last Company Name"
          value={this.props.info.company}
          onChange={this.handleInputChange}
        />
        <input
          type="text"
          id="study"
          name='role'
          placeholder="Role"
          value={this.props.info.role}
          onChange={this.handleInputChange}
        />
        <input
          type="date"
          id="start-work"
          name='startWork'
          value={this.props.info.startWork}
          onChange={this.handleInputChange}
        />
        <input
          type="date"
          id="end-work"
          name='endWork'
          value={this.props.info.endWork}
          onChange={this.handleInputChange}
        />
      </div>
    )
  }
}

class Display extends React.Component {
  render () {
    return (
      <div className="input-exp-grid">
        <p>{this.props.info.company}</p>
        <p>{this.props.info.role}</p>
        <p>{this.props.info.startWork}</p>
        <p>{this.props.info.endWork}</p>
      </div>
    )
  }
}

export class InputExperience extends React.Component {
  render () {
    return (
      <div id="exp">
        <h3>EXPERIENCE</h3>
        <div className="input">
          <Label />
          <Colon />
          <Input info={this.props.info} handleChange={this.props.handleChange}/>
        </div>
      </div>
    )
  }
}

export class DisplayExperience extends React.Component {
  render () {
    return (
      <div id='exp'>
        <h3>EXPERIENCE</h3>
        <div className="input">
          <Label />
          <Colon />
          <Display info={this.props.info}/>
        </div>
      </div>
    )
  }
}

Input.propTypes = {
  info: PropTypes.object,
  handleChange: PropTypes.func
}

InputExperience.propTypes = {
  info: PropTypes.object,
  handleChange: PropTypes.func
}

Display.propTypes = {
  info: PropTypes.object
}

DisplayExperience.propTypes = {
  info: PropTypes.object
}
