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

function Input (props) {
  const handleInputChange = event => {
    props.handleChange(event.target.name, event.target.value)
    event.preventDefault()
  }

  return (
      <div className="input-edu-grid">
        <input
          type="text"
          id="school"
          name='school'
          placeholder="School/University"
          value={props.info.school}
          onChange={handleInputChange}
        />
        <input
          type="text"
          id="study"
          name='study'
          placeholder="Study"
          value={props.info.study}
          onChange={handleInputChange}
        />
        <input
          type="date"
          id="start"
          name='startEdu'
          value={props.info.startEdu}
          onChange={handleInputChange}
        />
        <input
          type="date"
          id="end"
          name='endEdu'
          value={props.info.endEdu}
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
    <div className="input-edu-grid">
        <p>{props.info.school}</p>
        <p>{props.info.study}</p>
        <p>{props.info.startEdu}</p>
        <p>{props.info.endEdu}</p>
      </div>
  )
}

Display.propTypes = {
  info: PropTypes.object
}

export function InputEducation (props) {
  return (
    <div id="edu">
        <h3>EDUCATION</h3>
        <div className="input">
          <Label />
          <Colon />
          <Input info={props.info} handleChange={props.handleChange}/>
        </div>
      </div>
  )
}

InputEducation.propTypes = {
  info: PropTypes.object,
  handleChange: PropTypes.func
}

export function DisplayEducation (props) {
  return (
    <div id='edu'>
        <h3>EDUCATION</h3>
        <div className="input">
          <Label />
          <Colon />
          <Display info={props.info}/>
        </div>
      </div>
  )
}

DisplayEducation.propTypes = {
  info: PropTypes.object
}
