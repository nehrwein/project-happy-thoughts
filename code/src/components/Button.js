import React from "react"

const Button = (props) => {
  return(
    <button
      className={props.className}
      type={props.type}
      disabled={props.disabled}>{props.text}
    </button>
  )
}

export default Button