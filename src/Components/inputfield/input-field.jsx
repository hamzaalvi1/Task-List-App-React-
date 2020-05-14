import React from "react"
import "./input-field.css"

const InputField = props =>{


    return(
        <div>
       <div className ="card-panel">
        <h4>Todo List</h4>
        <div className= "row">
       <form onSubmit = {props.submitHandler}>
        <div className="input-field ">
          <input id="todoList" type="text" name="todoList" className="validate"/>
          <label htmlFor="todoList">Add Todo</label>
        </div>
        <button className="btn waves-effect waves-light" type="submit">Add
        <i className="material-icons right">add</i>
        </button>
           
       </form>
      </div>
      </div>
    </div>
        
    )

}

export default InputField