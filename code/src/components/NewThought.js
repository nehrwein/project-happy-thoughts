import React from "react"
import Button from "./Button"

const NewThought = (props) => {
  return (
    <div className="thought-container new">
      <form 
        className="new-thought-form"
        onSubmit={props.handleFormSubmit}>
          <label>What's making you happy right now?
            <textarea 
              rows={2} 
              cols={40}
              value={props.newThought}
              onChange={event => props.setNewThought(event.target.value)}
            >
            </textarea>
          </label>
        <span 
          className={props.newThought.length > 140 ? "red" : ""}
          >{props.newThought.length}/140</span>  

        <span className="red">{
          props.error === "required" ? "Please type a thought!" :
          props.error === "minlength" ? "Type more than 5 letters" :
          props.error === "maxlength" ? "Please type less than 140 letters" : ""}</span>  

        <Button
          className={"thought-button"} 
          type={"submit"}
          text={<>❤️ Send Happy Thought ❤️</>}
         /*  disabled={props.newThought.length < 6 || props.newThought.length > 140} */
        />
      </form>
    </div>
  )
}

export default NewThought