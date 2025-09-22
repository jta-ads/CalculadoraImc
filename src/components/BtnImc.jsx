import React from 'react'

const BtnImc = ({id, text, action}) => {
    const handleAction = (e) =>{
        action(e)
    }
  return (
    <button id={id} onClick={handleAction}>{text}</button>
  )
}

export default BtnImc