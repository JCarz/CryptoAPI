import React, { useState, useEffect } from "react"
import axios from "axios"
import Coins from "./components/Coins"
import NavBar from "./components/Navbar"

/** State in react is different that other frameworks. It is used to contain the data that is needed to render the UI. It holds data or information about each component.
 *
 * @Param coins is an array of objects containing coin data from the API
 *  @Param setCoins is a function that sets the state of the coins array
 *
 */

function App() {
  const [coins, SetCoins] = useState([])
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false"

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        SetCoins(response.data)
        console.log(response.data[0]) // at postion 0 is the first coin in the array
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <div>
      <NavBar />
      <Coins coins={coins} />
    </div>
  ) /* Coins component holds the state of the coins array*/
}

export default App
