import React from 'react'

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

export class Education extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      school: '',
      study: '',
      start: '',
      end: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange (event) {
    this.setState({ [event.target.name]: event.target.value })
    event.preventDefault()
  }

  render () {
    return (
      <div id="edu">
        <h3>EDUCATION</h3>
        <div className="input">
          <Label />
          <Colon />
          <div className="input-edu-grid">
            <input
              type="text"
              id="school"
              name='school'
              placeholder="School/University"
              value={this.state.school}
              onChange={this.handleInputChange}
              required
            />
            <input
              type="text"
              id="study"
              name='study'
              placeholder="Study"
              value={this.state.study}
              onChange={this.handleInputChange}
              required
            />
            <input
              type="date"
              id="start"
              name='start'
              value={this.state.start}
              onChange={this.handleInputChange}
              required
            />
            <input
              type="date"
              id="end"
              name='end'
              value={this.state.end}
              onChange={this.handleInputChange}
              required
              />
          </div>
        </div>
      </div>
    )
  }
}
