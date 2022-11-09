import './App.css'

function App() {
  return (
    <div className="App">
      {/* <h1>Calculator</h1> */}
      <div className='mainContainer'>
        <div className='screen'>

        </div>
        <div className='keySection'>
          <div>
            <button>AC</button>
            <button>%</button>
            <button>C</button>
            <button>÷</button>

          </div>
          <div>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>X</button>
          </div>
          <div>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>-</button>
          </div>
          <div>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>+</button>
          </div>
          <div>
            <button>.</button>
            <button>0</button>
            <button>00</button>
            <button>=</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
