import './App.css';
import HelloWorld from './components/HelloWorld'
import SayMyName from './components/SayMyName'

function App() {
    const name="Gabriel"
    const newName = name.toUpperCase()
    const nome = "maria"

    function sum(a, b){
      return a + b
    }

    return (
      <div className="App">
        <h2>Alterando o JSX</h2>
        <p>olá,{newName}</p>
        <p>Soma: {sum(1, 2)}</p>
        <HelloWorld />
        <SayMyName nome="Gabriel" />
        <SayMyName nome={nome}/>
      </div>
    )
}

export default App;
