import React from 'react'
import "./Card.css"

function Card(props) {
  let style ={}
  if(props.Visible){
    style.backgroundColor =props.backgroundColor
  }
  return (
    <div onClick = {props.onClick} className ={props.numCards===16?"card-container card16 ":"card-container card32"} style ={style}>

    </div>
  )
}

export default Card
