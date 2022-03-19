import React from 'react'

function Button(props) {
  return (
    <a href={props.link} target="_blank"><button className='uw-button'>{props.name}</button></a>
  )
}

export default Button;