import React from 'react'
import "./BtnImc.css"

const BtnImc = ({id, text, action}) => {
    const handleAction = (e) =>{
        action(e)
    }
  return (
    <button id={id} onClick={handleAction}>{text}</button>
  )
}

export default BtnImc