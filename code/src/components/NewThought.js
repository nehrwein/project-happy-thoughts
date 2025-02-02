import React from "react"
import Button from "./Button"
import Emoji from "./Emoji"

const NewThought = (props) => {
  const options = ['Food', 'Animals', 'Home', 'Project', 'Just Happy']

  return (
    <div className="thought-container new">
      <form 
        className="new-thought-form"
        onSubmit={props.handleFormSubmit}
      >
        <label>What's making you happy right now?
          <textarea 
            value={props.newThought}
            onChange={event => props.setNewThought(event.target.value)}
          >
          </textarea>
        </label>

        <div className="category-letter-container">
          <select 
            id='categories'
            value={props.category}
            onChange={event => props.setCategory(event.target.value)}
          >
            <option disabled value="">Select category: </option>
            {options.map((opt)=> (
              <option 
                key={opt} 
                value={opt}>{opt}
              </option>))}
          </select>

          <span             
            className={props.newThought.length > 140 ? 
              "red" : 
              "letter-amount"
            }>     {/* changing the className conditionally for showing different color, when the amount of letter is > 140 */}
              {props.newThought.length}/140
          </span>  
        </div>    

        <label> 
          <input 
            type={"text"}
            placeholder="Your name (optional)"
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
          text={<>
            <Emoji symbol="❤️" label="heart" role="img"/>
            Send
            <Emoji symbol="❤️" label="heart" role="img"/>
          </>}>
        </Button>

      </form>
    </div>
  )
}

export default NewThought