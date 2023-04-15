import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0, text: 'Even'}

  increment = () => {
    this.setState(prevState => {
      console.log(prevState)
      const num = Math.floor(Math.random() * 101)
      if (num % 2 === 0) {
        return {count: num, text: 'Even'}
      }
      return {count: num, text: 'Odd'}
    })
  }

  render() {
    const {count, text} = this.state
    return (
      <div className="mainContainer">
        <div className="subContainer">
          <h1 className="heading">Count {count}</h1>
          <p className="evenOdd">Count is {text}</p>
          <button className="button" type="button" onClick={this.increment}>
            Increment
          </button>
          <p className="description">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
