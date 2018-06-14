import React, { Component } from 'react'
// import logo from './logo.svg'
import '../styles/App.css'

const Header = () => (
  <header className='App-header'>
    {/* <img src={logo} className="App-logo" alt="logo" /> */}
    <h1 className='App-title'>My Wallet</h1>
  </header>

)

const TimeMenu = () => (
  <div className='time-menu'>
    <ul className='menu-items'>
      <li className='active' >TODAY</li>
      <li>THIS WEEK</li>
      <li>THIS MONTH</li>
    </ul>
  </div>
)
const Stats = () => (
  <div className='stats'>
    <div className='stats-num'>9098</div>
    <div className='stats-graph'>5466464</div>
    <p className='today-date'>T7766R6RV65R68R5</p>
  </div>
)
const List = () => (
  <div className='list'>
    List
  </div>
)
const AddBtn = () => (
  <div className='add-btn'>
    <button className='add-income-btn'><h1>+</h1><p>Add income</p></button>
    <button className='add-expense-btn'><h1>-</h1><p>Add expense</p></button>
  </div>
)

const AppWindow = () => (
  <div className='app-win'>
    <TimeMenu />
    <Stats />
    <List />
    <AddBtn />
  </div>
)

class App extends Component {
  render () {
    return (
      <div className='App'>

        <Header />
        <AppWindow />

      </div>
    )
  }
}

export default App
