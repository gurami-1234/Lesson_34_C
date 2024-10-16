import React from 'react'

const Calculator = ({calculatorVal,setCalculatorVal}) => {

  return (
    <div>
        <button onClick={()=>setCalculatorVal(calculatorVal+"1")}>1</button>
        <button onClick={()=>setCalculatorVal(calculatorVal+"2")}>2</button>
        <button onClick={()=>setCalculatorVal(calculatorVal+"3")}>3</button>
        <button onClick={()=>setCalculatorVal(calculatorVal+"+")}>+</button>

        <button onClick={()=>setCalculatorVal( eval(calculatorVal) )}>=</button>
    </div>
  )
}

export default Calculator