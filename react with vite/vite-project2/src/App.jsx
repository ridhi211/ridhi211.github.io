// import './index.css'
import UserInput from './userinput.jsx'
import { useState } from 'react'
import Results from './results.jsx'

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  })

  function handleChange(inputIdentifier, newValue) {
    setUserInput(prevUserInput => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue
      }
    } )
  }

  return (

    <>
      {/* <p>jomijkm</p> */}
      <UserInput userInput={userInput} onChange={handleChange} />
      <Results input={userInput} />
    </>
  )

}

export default App
