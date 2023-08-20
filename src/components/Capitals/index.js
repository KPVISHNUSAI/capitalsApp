import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here

class Capitals extends Component {
  state = {
    activeId: countryAndCapitalsList[0].id,
  }

  setCapital = event => {
    const selectedId = event.target.value
    this.setState({activeId: selectedId})
  }

  render() {
    const {activeId} = this.state

    return (
      <div className="app-container">
        <div className="main-container">
          <h1>Countries and Capitals</h1>
          <select
            name="capitals"
            id="capitals"
            onChange={this.setCapital}
            value={activeId}
          >
            {countryAndCapitalsList.map(each => (
              <option key={each.id} value={each.id}>
                {each.capitalDisplayText}
              </option>
            ))}
          </select>
          <label htmlFor="capitals">Is capital of which country?</label>
          <h1 className="result">
            {countryAndCapitalsList.find(item => item.id === activeId).country}
          </h1>
        </div>
      </div>
    )
  }
}

export default Capitals
