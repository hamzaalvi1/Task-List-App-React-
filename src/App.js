import React, {Component} from 'react';
import './App.css';
import InputField from "./Components/inputfield/input-field"
import List from "./Components/list/list"
class App extends Component{
constructor(props){
  super(props)
  this.state = {
  todoList : [],
  isEdit : false 
  }
}
_todoItem = []

onDeleteHandler = (evt,id) =>{
evt.preventDefault()
let todoId = id;
const itemList = [...this.state.todoList]
const itemIndex = itemList.findIndex(it => it.id === todoId)
itemList.splice(itemIndex,1)

this.setState({
  todoList: itemList
})
}






onSubmitHandler = (evt)=> {
evt.preventDefault()
let  todo =  evt.target.elements["todoList"].value
if(todo){
const todoTask = {
  id: Math.random(),
  todo
}
this._todoItem.push(todoTask)
this.setState({
  todoList: this._todoItem
})  
document.querySelector("form").reset()
}
else{
  alert("Please add task")
}

}


render(){
 
let list = null;

if(this.state.todoList.length !== 0){
  list = (
    this.state.todoList.map((li,index)=>{
      return <List todo = {li.todo}
       deleteHandler ={(evt)=>this.onDeleteHandler(evt,li.id)}
         key = {li.id}
         />
    })
  )
}


  return(
    <div className = "App">
      <InputField submitHandler = {this.onSubmitHandler}/>
       {list} 
     
      </div>    
  )

}


}

export default App;
