import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { InputEducation, DisplayEducation } from './components/education'
import { InputExperience, DisplayExperience } from './components/experience'
import { InputPersonal, DisplayPersonal } from './components/personal'

function Form (props) {
  const createCv = () => {
    const title = document.getElementById('title')
    const create = document.getElementById('create-cv')
    const confirm = document.getElementById('confirm-cv')
    title.textContent = 'DOUBLE CHECK YOUR CV'
    create.style = 'display: none'
    confirm.style = 'display: block'
  }

  return (
    <fieldset id='create-cv'>
      <div id='info'>
        <InputPersonal info={props.info} handleChange={props.handleChange} />
        <InputEducation info={props.info} handleChange={props.handleChange} />
        <InputExperience info={props.info} handleChange={props.handleChange} />
      </div>
      <div id='submit'>
          <button onClick={createCv}>CREATE</button>
        </div>
    </fieldset>
  )
}

Form.propTypes = {
  info: PropTypes.object,
  handleChange: PropTypes.func
}

function Edit (props) {
  const editCv = () => {
    const title = document.getElementById('title')
    const create = document.getElementById('create-cv')
    const confirm = document.getElementById('confirm-cv')
    title.textContent = 'EDIT'
    create.style = 'display: block'
    confirm.style = 'display: none'
  }

  const confirmCv = () => {
    const title = document.getElementById('title')
    const confirm = document.getElementById('confirm')
    const create = document.getElementById('create-cv')
    const cv = document.getElementById('confirm-cv')
    title.style = 'display: none'
    confirm.style = 'display: none'
    create.style = 'display: none'
    cv.style = 'padding-bottom: 43px; margin-top: 95px; display: block'
  }

  return (
    <fieldset id='confirm-cv'>
        <div id='edit'>
          <DisplayPersonal info={props.info} />
          <DisplayEducation info={props.info} />
          <DisplayExperience info={props.info} />
        </div>
        <div id='confirm'>
          <button onClick={editCv}>EDIT</button>
          <button onClick={confirmCv}>CONFIRM</button>
        </div>
      </fieldset>
  )
}

Edit.propTypes = {
  info: PropTypes.object
}

export default function App () {
  const info = {
    firstName: '',
    lastName: '',
    address: '',
    phone: '',
    email: '',
    social: '',
    school: '',
    study: '',
    startEdu: '',
    endEdu: '',
    company: '',
    role: '',
    startWork: '',
    endWork: ''
  }
  const [data, setData] = useState(info)

  const handleChange = (key, value) => {
    setData({ ...data, [key]: value })
  }

  return (
    <div className='wrapper'>
        <h1 id='title'>CREATE YOUR CV</h1>
        <div id='input-cv'>
          <Form info={data} handleChange={handleChange} />
        </div>
        <div id='edit-cv'>
          <Edit info={data} />
        </div>
      </div>
  )
}
