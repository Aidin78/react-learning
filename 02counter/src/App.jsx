import { useState } from 'react'

function App() {
  const [counter, setCounter] = useState(1);
  const [alert, setAlert] = useState("");

  const addValue = () => {
    setCounter(counter + 1);
    // setCounter((prevCounter) => prevCounter + 1);
    // setCounter((prevCounter) => prevCounter + 1);
    // setCounter((prevCounter) => prevCounter + 1);
    // setCounter((prevCounter) => prevCounter + 1);
  }

  const decreaseValue = () => {
    if (counter == 0)
      setAlert("the lowest is 0")
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>React Course with hitesh</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={addValue}>Add value</button> {" "}
      <button onClick={decreaseValue}>Decrease Value</button>
      <p>footer: {alert}</p>
    </>
  )
}

export default App
