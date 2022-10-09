import logo from './logo.svg';
import './App.css';
import { useState } from 'react'


function App() {

  const [data, setData] = useState({name: "Rafael", age: 30})

  async function obj() {
    let obj = await fetch('http://localhost:4000?name=Luiz&sobrenome=Contes')
    let data = await obj.json()
    setData(data)
  }

  return (
    <div className="App">
      <p>Name: {data.name}</p>
      <p>{data.sobrenome ? `Sobrenome: ${data.sobrenome}` : ""}</p>
      <p>Age: {data.age}</p>
      <button onClick={obj}>Click Me</button>
    </div>
  );
}

export default App;
