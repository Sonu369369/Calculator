import React from 'react'
import "../components/calculator.css"
function Calculator() {
  return (
    <>
      <div className='cal-body'>
        <div className="sum-calculator">
          <h2>Sum Calculator</h2>
          <div className="input-container">
            <input type="text" placeholder="Enter number 1" />
            <input type="text" placeholder="Enter number 2" />
            <button>Submit</button>
          </div>
          <div className="output">Output:</div>
        </div>
      </div>
    </>
  )
}

export default Calculator;