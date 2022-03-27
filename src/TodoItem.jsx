import React from "react";

function TodoItem(props){ 
  const handelClick = (event) => {
    props.shaking ?
    props.handelDelete(props.id) :
    props.onChecked(props.id)
  }
  return (
    <div className = "flex items-center my-2">
      <input defaultChecked={props.isDone} onChange = {handelClick} type="checkbox" className="w-4 h-4 text-yellow-600 border-gray-300 rounded focus:ring-yellow-500"/>
      <label className = {"text-gray-700 ml-3 font-medium text-sm " + (props.isDone ? "line-through " : "") + (props.shaking && "shake")} onClick={handelClick} id = {props.id}> {props.action}</label>
    </div>
  );
}
export default TodoItem;