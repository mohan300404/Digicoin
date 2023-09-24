import React from 'react'

const SelectButton = ({children,selected,onClick}) => {
  return (
    <span className='selectbutton' onClick={onClick}>{children}</span>
  )
}

export default SelectButton