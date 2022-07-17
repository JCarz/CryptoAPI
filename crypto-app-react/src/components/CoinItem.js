import React from "react"
import "./Coins.css"
import { FaDollarSign } from "react-icons/fa"

const CoinItem = (props) => {
  return (
    <div className="coin-row">
      <p>{props.coins.market_cap_rank}</p>
      <div className="img-symbol">
        <img src={props.coins.image} alt="" />
        <p>{props.coins.symbol.toUpperCase()}</p>
      </div>
      <p>
        <FaDollarSign className="dollar-sign" />
        {props.coins.current_price.toLocaleString()}
      </p>
      <p>{props.coins.price_change_percentage_24h.toFixed(2)}%</p>
      <p className="hide-mobile">
        <FaDollarSign className="dollar-sign" />
        {props.coins.total_volume.toLocaleString()}
      </p>
      <p className="hide-mobile">
        <FaDollarSign className="dollar-sign" />
        {props.coins.market_cap.toLocaleString()}
      </p>
    </div>
  )
}
/**
 * @param {object} props - props passed from parent components are passed
 * to CoinItem component each coin item is a row in the table. It holds
 * the market cap rank, the coin symbol, the current price, the change in
 * price percentage 24 hours, the total volume, and the market cap.
 * Each item is unique to each coin.
 *  */

export default CoinItem
