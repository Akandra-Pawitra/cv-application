import React from 'react'

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

export class Experience extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      company: '',
      role: '',
      startWork: '',
      endWork: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange (event) {
    this.setState({ [event.target.name]: event.target.value })
    event.preventDefault()
  }

  render () {
    return (
      <div id="exp">
        <h3>EXPERIENCE</h3>
        <div className="input">
          <Label />
          <Colon />
          <div className="input-exp-grid">
            <input
              type="text"
              id="company"
              name='company'
              placeholder="Last Company Name"
              value={this.state.company}
              onChange={this.handleInputChange}
              required
            />
            <input
              type="text"
              id="study"
              name='role'
              placeholder="Role"
              value={this.state.role}
              onChange={this.handleInputChange}
              required
            />
            <input
              type="date"
              id="start-work"
              name='startWork'
              value={this.state.startWork}
              onChange={this.handleInputChange}
              required
            />
            <input
              type="date"
              id="end-work"
              name='endWork'
              value={this.state.endWork}
              onChange={this.handleInputChange}
            />
          </div>
        </div>
      </div>
    )
  }
}
