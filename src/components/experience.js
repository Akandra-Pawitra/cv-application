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

function Input (props) {
  const handleInputChange = event => {
    props.handleChange(event.target.name, event.target.value)
    event.preventDefault()
  }

  return (
      <div className="input-exp-grid">
        <input
          type="text"
          id="company"
          name='company'
          placeholder="Last Company Name"
          value={props.info.company}
          onChange={handleInputChange}
        />
        <input
          type="text"
          id="study"
          name='role'
          placeholder="Role"
          value={props.info.role}
          onChange={handleInputChange}
        />
        <input
          type="date"
          id="start-work"
          name='startWork'
          value={props.info.startWork}
          onChange={handleInputChange}
        />
        <input
          type="date"
          id="end-work"
          name='endWork'
          value={props.info.endWork}
          onChange={handleInputChange}
        />
      </div>
  )
}

Input.propTypes = {
  info: PropTypes.object,
  handleChange: PropTypes.func
}

function Display (props) {
  return (
    <div className="input-exp-grid">
        <p>{props.info.company}</p>
        <p>{props.info.role}</p>
        <p>{props.info.startWork}</p>
        <p>{props.info.endWork}</p>
      </div>
  )
}

Display.propTypes = {
  info: PropTypes.object
}

export function InputExperience (props) {
  return (
    <div id="exp">
        <h3>EXPERIENCE</h3>
        <div className="input">
          <Label />
          <Colon />
          <Input info={props.info} handleChange={props.handleChange}/>
        </div>
      </div>
  )
}

InputExperience.propTypes = {
  info: PropTypes.object,
  handleChange: PropTypes.func
}

export function DisplayExperience (props) {
  return (
    <div id='exp'>
        <h3>EXPERIENCE</h3>
        <div className="input">
          <Label />
          <Colon />
          <Display info={props.info}/>
        </div>
      </div>
  )
}

DisplayExperience.propTypes = {
  info: PropTypes.object
}
