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

function Input (props) {
  const handleInputChange = event => {
    props.handleChange(event.target.name, event.target.value)
    event.preventDefault()
  }

  return (
      <div className="input-personal-grid">
        <input
          type="text"
          id="first-name"
          name='firstName'
          placeholder="First Name"
          value={props.info.firstName}
          onChange={handleInputChange}
        />
        <input
          type="text"
          id="last-name"
          name='lastName'
          placeholder="Last Name"
          value={props.info.lastName}
          onChange={handleInputChange}
        />
        <input
          type="text"
          id="address"
          name='address'
          placeholder="Address"
          value={props.info.address}
          onChange={handleInputChange}
        />
        <input
          type="tel"
          id="phone-number"
          name='phone'
          placeholder="Phone Number"
          value={props.info.phone}
          onChange={handleInputChange}
        />
        <input
          type="email"
          id="email"
          name='email'
          placeholder="Email"
          value={props.info.email}
          onChange={handleInputChange}
        />
        <input
          type="text"
          id="social-media"
          name='social'
          placeholder="Social Media"
          value={props.info.social}
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
    <div className="input-personal-grid">
        <p>{props.info.firstName}</p>
        <p>{props.info.lastName}</p>
        <p>{props.info.address}</p>
        <p>{props.info.phone}</p>
        <p>{props.info.email}</p>
        <p>{props.info.social}</p>
      </div>
  )
}

Display.propTypes = {
  info: PropTypes.object
}

export function InputPersonal (props) {
  return (
    <div id='personal'>
        <h3>PERSONAL INFORMATION</h3>
        <div className="input">
          <Label />
          <Colon />
          <Input info={props.info} handleChange={props.handleChange}/>
        </div>
      </div>
  )
}

InputPersonal.propTypes = {
  info: PropTypes.object,
  handleChange: PropTypes.func
}

export function DisplayPersonal (props) {
  return (
    <div id='personal'>
        <h3>PERSONAL INFORMATION</h3>
        <div className="input">
          <Label />
          <Colon />
          <Display info={props.info}/>
        </div>
      </div>
  )
}

DisplayPersonal.propTypes = {
  info: PropTypes.object
}
