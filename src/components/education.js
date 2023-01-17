import React from 'react'
import PropTypes from 'prop-types'

function Label () {
  return (
    <div className="input-edu-grid">
      <label htmlFor="high-edu">Highest Education</label>
      <label htmlFor="study">Field of Study</label>
      <label htmlFor="start">Start</label>
      <label htmlFor="end">End</label>
    </div>
  )
}

function Colon () {
  return (
    <div className="input-edu-grid">
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
      <div className="input-edu-grid">
        <input
          type="text"
          id="school"
          name='school'
          placeholder="School/University"
          value={this.props.info.school}
          onChange={this.handleInputChange}
          required
        />
        <input
          type="text"
          id="study"
          name='study'
          placeholder="Study"
          value={this.props.info.study}
          onChange={this.handleInputChange}
          required
        />
        <input
          type="date"
          id="start"
          name='startEdu'
          value={this.props.info.startEdu}
          onChange={this.handleInputChange}
          required
        />
        <input
          type="date"
          id="end"
          name='endEdu'
          value={this.props.info.endEdu}
          onChange={this.handleInputChange}
          required
        />
      </div>
    )
  }
}

export class Education extends React.Component {
  render () {
    return (
      <div id="edu">
        <h3>EDUCATION</h3>
        <div className="input">
          <Label />
          <Colon />
          <Input info={this.props.info} handleChange={this.props.handleChange}/>
        </div>
      </div>
    )
  }
}

Input.propTypes = {
  info: PropTypes.object,
  handleChange: PropTypes.func
}

Education.propTypes = {
  info: PropTypes.object,
  handleChange: PropTypes.func
}
