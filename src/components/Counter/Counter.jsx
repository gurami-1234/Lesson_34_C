import React from 'react'

const Counter = ({counter,setCounter}) => {

  return (
    <div>
        <button onClick={ ()=>setCounter( counter+1 ) } >+1</button>
     
      <button onClick={()=>setCounter(counter-1)}>-1</button>

      <button onClick={ ()=>setCounter( counter+10 ) } >+10</button>
      <button onClick={ ()=>setCounter( counter*10 ) } >*10</button>
      <button onClick={ ()=>setCounter( counter/10 ) } >/10</button>
      <button onClick={ ()=>setCounter( counter-10 )} >-10</button>
    </div>
  )
}

export default Counter