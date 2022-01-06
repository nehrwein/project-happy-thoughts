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
              value={props.newThought}
              onChange={event => props.setNewThought(event.target.value)}
            >
            </textarea>
          </label>

        <span 
          className={props.newThought.length > 140 ? "red" : "letter-amount"}>     {/* changing the className conditionally for showing different color, when the amount of letter is > 140 */}
            {props.newThought.length}/140
        </span>  

        <label>Your name 
          <input 
            type={"text"}
            value={props.name}
            onChange={e => props.setName(e.target.value)} 
          />
        </label>

        <span className="alert red">{                                              /* displayed error messages according to API error messages */     
          props.error === "required" ? "Please type a thought!" :
          props.error === "minlength" ? "Type more than 5 letters" :
          props.error === "maxlength" ? "Please type less than 140 letters" : ""}</span>  

        <Button
          className={"thought-button"} 
          type={"submit"}
          text={<>❤️ Send Happy Thought ❤️</>}
        />

      </form>
    </div>
  )
}

export default NewThought