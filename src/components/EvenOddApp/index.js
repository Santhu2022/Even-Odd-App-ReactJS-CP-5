import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  onIncrement = () => {
    const {count} = this.state
    const number = Math.ceil(Math.random() * 100)
    this.setState({count: count + number})
  }

  render() {
    const {count} = this.state
    const evenOddtext = count % 2 === 0 ? 'Even' : 'Odd'
    return (
      <div className="main-bg-container">
        <div className="app-container">
          <h1 className="Counter-text">Count {count}</h1>
          <p className="even-odd-text">Count is {evenOddtext}</p>
          <button onClick={this.onIncrement} className="button" type="submit">
            Increment
          </button>
          <p className="note-text">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
