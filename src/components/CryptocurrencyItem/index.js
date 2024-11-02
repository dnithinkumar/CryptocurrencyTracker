// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {currencyData} = props
  const {currencyName, usdValue, euroValue, currencyLogo} = currencyData

  return (
    <li className="currency-item-container">
      <div className="currency-type-container">
        <img src={currencyLogo} alt={currencyName} className="currency-logo" />
        <p className="currency-name">{currencyName}</p>
      </div>
      <div className="values-container">
        <p className="usd-value">{usdValue}</p>
        <p className="euro-value">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
