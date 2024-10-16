import { useState } from "react";
import Calculator from "./components/Calculator/Calculator";
// import Counter from "./components/Counter/Counter";

function App() {
  // const [userAge,setUserAge] = useState(0)

  const [calculatorVal,setCalculatorVal] = useState('')
  return (
    <div className="App">

      {/* <span style={{fontSize:'1.5rem'}}>{userAge}</span>
      <Counter counter={userAge} setCounter={setUserAge} /> */}
      <div>{calculatorVal}</div>
      <Calculator calculatorVal={calculatorVal} setCalculatorVal={setCalculatorVal} />

    </div>
  );
}

export default App;
