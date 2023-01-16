import React from 'react'

class Personal extends React.Component {
  constructor () {
    super()
  }

  render () {
    return (
      <div id='personal'>
        <h3>PERSONAL INFORMATION</h3>
        <div className="input">
          <div className="input-personal-grid">
            <label htmlFor="first-name">First Name</label>
            <label htmlFor="last-name">Last Name</label>
            <label htmlFor="address">Address</label>
            <label htmlFor="phone-number">Phone Number</label>
            <label htmlFor="email">E-mail</label>
            <label htmlFor="social-media">Social Media</label>
          </div>
          <div className="input-personal-grid">
          <p>:</p>
          <p>:</p>
          <p>:</p>
          <p>:</p>
          <p>:</p>
          <p>:</p>
          </div>
          <div className="input-personal-grid">
            <input type="text" id="first-name" placeholder="First Name" required />
            <input type="text" id="last-name" placeholder="Last Name" required />
            <input type="text" id="address" placeholder="Address" required />
            <input type="tel" id="phone-number" placeholder="Phone Number" required />
            <input type="email" id="email" placeholder="Email" required />
            <input type="text" id="social-media" placeholder="Social Media" />
          </div>
        </div>
      </div>
    )
  }
}

class Education extends React.Component {
  constructor () {
    super()
  }

  render () {
    return (
      <div id="edu">
        <h3>EDUCATION</h3>
        <div className="input">
          <div className="input-edu-grid">
            <label htmlFor="high-edu">Highest Education</label>
            <label htmlFor="study">Field of Study</label>
            <label htmlFor="start">Start</label>
            <label htmlFor="end">End</label>
          </div>
          <div className="input-edu-grid">
            <p>:</p>
            <p>:</p>
            <p>:</p>
            <p>:</p>
          </div>
          <div className="input-edu-grid">
            <input type="text" id="high-edu" placeholder="School/University" required />
            <input type="text" id="study" placeholder="Study" required />
            <input type="date" id="start" required />
            <input type="date" id="end" required />
          </div>
        </div>
      </div>
    )
  }
}

class Experience extends React.Component {
  constructor () {
    super()
  }

  render () {
    return (
      <div id="exp">
        <h3>EXPERIENCE</h3>
        <div className="input">
          <div className="input-exp-grid">
            <label htmlFor="company">Company</label>
            <label htmlFor="role">Role</label>
            <label htmlFor="start-work">Start</label>
            <label htmlFor="end-work">End</label>
          </div>
          <div className="input-exp-grid">
            <p>:</p>
            <p>:</p>
            <p>:</p>
            <p>:</p>
          </div>
          <div className="input-exp-grid">
            <input type="text" id="company" placeholder="Last Company Name" required />
            <input type="text" id="study" placeholder="Role" required />
            <input type="date" id="start-work" required />
            <input type="date" id="end-work" />
          </div>
        </div>
      </div>
    )
  }
}

class Info extends React.Component {
  constructor () {
    super()
  }

  render () {
    return (
      <div id='info'>
        <Personal />
        <Education />
        <Experience />
      </div>
    )
  }
}

export default Info
