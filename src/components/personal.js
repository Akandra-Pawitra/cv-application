import React from 'react'

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

export class Personal extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      address: '',
      phone: '',
      email: '',
      social: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange (event) {
    this.setState({ [event.target.name]: event.target.value })
    event.preventDefault()
  }

  render () {
    return (
      <div id='personal'>
        <h3>PERSONAL INFORMATION</h3>
        <div className="input">
          <Label />
          <Colon />
          <div className="input-personal-grid">
            <input
              type="text"
              id="first-name"
              name='firstName'
              placeholder="First Name"
              value={this.state.firstName}
              onChange={this.handleInputChange}
              required
            />
            <input
              type="text"
              id="last-name"
              name='lastName'
              placeholder="Last Name"
              value={this.state.lastName}
              onChange={this.handleInputChange}
              required
            />
            <input
              type="text"
              id="address"
              name='address'
              placeholder="Address"
              value={this.state.address}
              onChange={this.handleInputChange}
              required
            />
            <input
              type="tel"
              id="phone-number"
              name='phone'
              placeholder="Phone Number"
              value={this.state.phone}
              onChange={this.handleInputChange}
              required
            />
            <input
              type="email"
              id="email"
              name='email'
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleInputChange}
            />
            <input
              type="text"
              id="social-media"
              name='social'
              placeholder="Social Media"
              value={this.state.social}
              onChange={this.handleInputChange}
            />
          </div>
        </div>
      </div>
    )
  }
}
