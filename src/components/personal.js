import React from 'react'
import PropTypes from 'prop-types'

function Label () {
  return (
    <div className="input-personal-grid">
      <label htmlFor="first-name">First Name</label>
      <label htmlFor="last-name">Last Name</label>
      <label htmlFor="address">Address</label>
      <label htmlFor="phone-number">Phone Number</label>
      <label htmlFor="email">E-mail</label>
      <label htmlFor="social-media">Social Media</label>
    </div>
  )
}

function Colon () {
  return (
    <div className="input-personal-grid">
      <p>:</p>
      <p>:</p>
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
      <div className="input-personal-grid">
        <input
          type="text"
          id="first-name"
          name='firstName'
          placeholder="First Name"
          value={this.props.info.firstName}
          onChange={this.handleInputChange}
          required
        />
        <input
          type="text"
          id="last-name"
          name='lastName'
          placeholder="Last Name"
          value={this.props.info.lastName}
          required
          onChange={this.handleInputChange}
        />
        <input
          type="text"
          id="address"
          name='address'
          placeholder="Address"
          value={this.props.info.address}
          required
          onChange={this.handleInputChange}
        />
        <input
          type="tel"
          id="phone-number"
          name='phone'
          placeholder="Phone Number"
          value={this.props.info.phone}
          required
          onChange={this.handleInputChange}
        />
        <input
          type="email"
          id="email"
          name='email'
          placeholder="Email"
          value={this.props.info.email}
          onChange={this.handleInputChange}
        />
        <input
          type="text"
          id="social-media"
          name='social'
          placeholder="Social Media"
          value={this.props.info.social}
          onChange={this.handleInputChange}
        />
      </div>
    )
  }
}

export class Personal extends React.Component {
  render () {
    return (
      <div id='personal'>
        <h3>PERSONAL INFORMATION</h3>
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

Personal.propTypes = {
  info: PropTypes.object,
  handleChange: PropTypes.func
}
