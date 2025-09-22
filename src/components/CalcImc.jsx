import { useState } from 'react';
import BtnImc from './BtnImc'

const CalcImc = ({action}) => {
    const [altura, setAltura] = useState("")
    const [peso, setPeso] = useState("")
    const resetInput = (e)=>{
        e.preventDefault();
        setAltura("")
        setPeso("")       
    }
    const validarInput = (text) =>{
       return text.replace(/[^0-9,]/g,"")
    }
    const handleAlturaValidar = (e) =>{
        const validar = validarInput(e.target.value)
        setAltura(validar)
    }
    const handlePesoValidar = (e) =>{
        const validar = validarInput(e.target.value)
        setPeso(validar)
    }
  return (
    <div id='calc-imc'>
        <h1>Calculadora IMC</h1>
        <form id='form-imc'>
            <div className="medida">
                <label htmlFor="altura">Altura:</label>
                <input type="text"  id='altura' name='altura' placeholder='Exemplo 1,65' onChange={(e)=>handleAlturaValidar(e)} value={altura}/>
            </div>
            <div className="medida">
                <label htmlFor="peso">Peso: </label>
                <input type="text"  id='peso' name='peso' placeholder='Exemplo 80,65' onChange={(e)=>handlePesoValidar(e)} value={peso}/>
            </div>
            <div id='buttons'>
                <BtnImc id='calc' text='Calcular' action={(e)=>action(e, altura, peso)}/>
                <BtnImc id='clear' text='Limpar' action={resetInput}/>
            </div>
        </form>
    </div>
  )
}

export default CalcImc