import React from "react"
import "./list.css"

const List = props =>{


    return(
        <ul className = "collection">
            <li className = "collection-item">
            <div>
            {props.todo}
            <span>
            <a onClick = {props.deleteHandler} href="#"><i className="material-icons">delete</i></a>
            </span>
            </div>
                      
            </li>
        </ul>
    )

}
export default List