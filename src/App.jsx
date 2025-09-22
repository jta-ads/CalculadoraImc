import { useState } from 'react'
import './App.css'
import CalcImc from './components/CalcImc'

function App() {
  const [imc, setImc] = useState("")

  const CalculadoraImc = (e, altura, peso) =>{
    e.preventDefault();
    const calcAltura = +altura.replace(",",".")
    const calcPeso = +peso.replace(",",".")

    const resultImc = (calcPeso/(calcAltura*calcAltura)).toFixed(1);
    setImc(resultImc)
    
  }
  return (
    <>
      <main id='main-container'>
        <CalcImc action={CalculadoraImc}/>
       <div>
        {!imc ? 'falso':'verdadeiro'}
       </div>
      </main>
    </>
  )
}

export default App
