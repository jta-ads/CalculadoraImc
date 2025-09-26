import React from 'react'
import BtnImc from './BtnImc'
import './ImcTable.css'

const ImcTable = ({imc, situacaoAtual, estilo, back}) => {
  return (
        <div id='table-container'>
            <h1>Imc: <span style={estilo}>{imc}</span></h1>
            <h2>Situação Atual: <span style={estilo}>{situacaoAtual}</span></h2>
            <div id="table-imc">
                <p>Tabela de Informações: </p>
                <table>
                        <thead>
                            <tr>
                                <th>IMC</th>
                                <th>Classificação</th>
                                <th>Obesidade</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Menor que 18,5</td>
                                <td>Magreza</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>Entre 18,5 e 24,9</td>
                                <td>Normal</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>Entre 25 e 29,9</td>
                                <td>Sobrepeso</td>
                                <td>I</td>
                            </tr>
                            <tr>
                                <td>Entre 30 e 39,9</td>
                                <td>Obesidade</td>
                                <td>II</td>
                            </tr>
                            <tr>
                                <td>Maior que 40</td>
                                <td>Obesidade Grave</td>
                                <td>III</td>
                            </tr>
                        </tbody>
                </table>
            </div>
            <div className="btnTable">
                <BtnImc id='voltar' text='Voltar' action={back}/>    
            </div>
        </div>  
    
  )
}

export default ImcTable