import React from 'react'
import Info from './components/info'
import Submit from './components/submit'

class Form extends React.Component {
  constructor () {
    super()
  }

  render () {
    return (
      <form>
        <Info />
        <Submit />
      </form>
    )
  }
}

class Header extends React.Component {
  constructor () {
    super()
  }

  render () {
    return (
      <h1 id='title'>CREATE YOUR CV</h1>
    )
  }
}

class App extends React.Component {
  constructor () {
    super()
  }

  render () {
    return (
      <div className='wrapper'>
        <Header />
        <Form />
      </div>
    )
  }
}

export default App
