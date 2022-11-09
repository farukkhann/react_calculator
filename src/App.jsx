import { useState } from 'react'
import './App.css'

function App() {
  const [current,setCurrent]=useState("")
  const evaluation=()=>{
    if(typeof(current)=='string'){
      setCurrent(current.slice(0,current.length-1))
    }
    else{
      // console.log(current.toString().slice(0,current.length-1))
      const str=current.toString()
      setCurrent(str.slice(0,str.length-1))
    }
  }
  return (
    <div className="App">
      {/* <h1>Calculator</h1> */}
      <div className='mainContainer'>
        <div className='screen'>
          <h1>{current}</h1>
        </div>
        <div className='keySection'>
          <div>
            <button onClick={()=>setCurrent("")}>AC</button>
            <button>%</button>
            <button onClick={()=>evaluation()}>C</button>
            <button onClick={()=>setCurrent(current+"/")}>÷</button>
          </div>
          <div>
            <button onClick={()=>setCurrent(current+"1")}>1</button>
            <button onClick={()=>setCurrent(current+"2")}>2</button>
            <button onClick={()=>setCurrent(current+"3")}>3</button>
            <button onClick={()=>setCurrent(current+"*")}>X</button>
          </div>
          <div>
            <button onClick={()=>setCurrent(current+"4")}>4</button>
            <button onClick={()=>setCurrent(current+"5")}>5</button>
            <button onClick={()=>setCurrent(current+"6")}>6</button>
            <button onClick={()=>setCurrent(current+"-")}>-</button>
          </div>
          <div>
            <button onClick={()=>setCurrent(current+"7")}>7</button>
            <button onClick={()=>setCurrent(current+"8")}>8</button>
            <button onClick={()=>setCurrent(current+"9")}>9</button>
            <button onClick={()=>setCurrent(current+"+")}>+</button>
          </div>
          <div>
            <button onClick={()=>setCurrent(current+".")}>.</button>
            <button onClick={()=>setCurrent(current+"0")}>0</button>
            <button onClick={()=>setCurrent(current+"00")}>00</button>
            <button onClick={()=>setCurrent(eval(current))}>=</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
