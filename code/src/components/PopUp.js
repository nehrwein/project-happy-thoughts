import React from "react"
import "./PopUp.css"

const PopUp = ( props ) => {
  return(
    <div className={props.className}>
      <p>{props.noOfLikes}
        <span 
          role="img"
          aria-label="jsx-a11y/accessible-emoji">❤️</span>
      </p>
    </div>
  )
}

export default PopUp