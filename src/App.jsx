import { useState } from 'react'
import './App.css'
import CalcImc from './components/CalcImc'
import ImcTable from './components/ImcTable'

function App() {
  const [imc, setImc] = useState("")
  const [situacao, setSituacao] = useState("")
  const [cor, setCor] = useState("")

  const CalculadoraImc = (e, altura, peso) =>{
    e.preventDefault();
    const calcAltura = +altura.replace(",",".")
    const calcPeso = +peso.replace(",",".")

    const resultImc = (calcPeso/(calcAltura*calcAltura)).toFixed(1);
    setImc(resultImc)
    if(resultImc < 18.5){
      setSituacao("Magreza")
      setCor({color:'#E8A427'})
    } else if(resultImc >= 18.5 && resultImc <= 24.9){
      setSituacao("Normal")
      setCor({color:'#04B813'})
    }else if(resultImc >= 25 && resultImc <= 29.9){
      setSituacao("Sobrepeso")
      setCor({color:'#EBD20C'})
    }else if(resultImc >= 30 && resultImc <= 39.9){
      setSituacao("Obesidade")
      setCor({color:'#E66F10'})
    }else{
      setSituacao("Obesidade Grave")
      setCor({color:'#F20A0A'})
    }
    
  }
  const backInicio = ()=>{
    setImc("")
    setSituacao("")
    setCor("")
  }   
  return (
    <>
      <main id='main-container'>
        {!imc ? <CalcImc action={CalculadoraImc}/>:<ImcTable imc={imc} situacaoAtual={situacao} estilo={cor} back={backInicio}/>}
      </main>
    </>
  )
}

export default App
