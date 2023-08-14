import {Component} from 'react'

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

  setCapital = countryId => {
    this.setState({activeId: countryId})
  }

  findCountry = () => {
    const {activeId} = this.state
    const desh = countryAndCapitalsList[activeId].country
    return desh
  }

  render() {
    const {activeId} = this.state

    return (
      <div className="app-container">
        <div className="main-container">
          <input type="dropdown" />
        </div>
      </div>
    )
  }
}

export default Capitals
