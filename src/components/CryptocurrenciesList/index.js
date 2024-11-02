// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import CryptocurrencyItem from '../CryptocurrencyItem'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class CryptocurrenciesList extends Component {
  state = {isLoading: true, currenciesList: []}

  componentDidMount() {
    this.getCurrenciesList()
  }

  getCurrenciesList = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const currenciesData = await response.json()

    const updatedCurrenciesData = currenciesData.map(item => ({
      currencyName: item.currency_name,
      usdValue: item.usd_value,
      euroValue: item.euro_value,
      id: item.id,
      currencyLogo: item.currency_logo,
    }))

    this.setState({isLoading: false, currenciesList: updatedCurrenciesData})
  }

  render() {
    const {isLoading, currenciesList} = this.state

    return isLoading ? (
      <div data-testid="loader">
        <Loader type="Rings" color="#ffffff" height={80} width={80} />
      </div>
    ) : (
      <div className="currencies-list-container">
        <h1 className="heading">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="currencies-list-image"
        />
        <div className="currency-items-container">
          <div className="header">
            <p className="coin-type-heading">Coin Type</p>
            <div className="values-container">
              <p className="usd-value-heading">URD</p>
              <p className="euro-value-heading">EURO</p>
            </div>
          </div>
          <ul className="currency-items-list">
            {currenciesList.map(item => (
              <CryptocurrencyItem key={item.id} currencyData={item} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CryptocurrenciesList
