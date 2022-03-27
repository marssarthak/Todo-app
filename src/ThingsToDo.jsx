import React from "react";
import TodoItem from "./TodoItem"
import AddTodo from "./AddTodo"
import DeleteTodo from "./DeleteTodo"
import uuid from 'react-uuid'

function ToDo(){
  const changeDelete = () => {
    setShowTodoDelete(!showTodoDelete)
  }  
  
  const handelAdd = (textValue) => {
    const newTodoList =  [...totalList, {action : textValue, done:false, id:uuid()}]
    updateTodoList(newTodoList)
  }
   
  const handelChecked = (id) => {
    let newList = totalList.map(item => item.id==id ? {...item, done: !item.done} : item)
    updateTodoList(newList)
  }

  const handelDelete = (id) => {
    if (id){
      let newTodo = totalList.filter(item => item.id!=id)
      updateTodoList(newTodo)
    } else{
      setShakingEffect(!shakingEffect)
    }
  }
  
  const updateTodoList = (listItem) => {
    updateList(listItem)
    localStorage.setItem("totalList", JSON.stringify(listItem))
  }
  
  const showList = (listName,  emptyText) => 
    listName.length>0 ? 
    listName.map(item => <TodoItem shaking = {shakingEffect} isDone = {item.done} id={item.id} key={item.id} action = {item.action} onChecked = {handelChecked} handelDelete = {handelDelete} />) : 
    <p className="text-slate-500">{emptyText}</p>

  const savedTotalList = JSON.parse(localStorage.getItem("totalList")) || [
    {action : "Buy milk", id : uuid(), done:false},
    {action : "Buy eggs", id : uuid(), done:false},
    {action : "submit assignment", id : uuid(), done:false}]
  
  const [showTodoDelete,setShowTodoDelete] = React.useState(true)
  const [shakingEffect,setShakingEffect] = React.useState(false)
  
  const [totalList,updateList] = React.useState(savedTotalList);
  const todoList = totalList.filter(data => !data.done)
  const doneList = totalList.filter(data => data.done)
  
  return (
    <div>
      <h1 className="font-medium text-lg mt-8 mb-3">Things to do</h1>
      {showList(todoList, "No todos here!")}
      <div className = {showTodoDelete && "flex items-center gap-2"}>
        <AddTodo onAdd={handelAdd} changeDelete={() => {setShowTodoDelete(!showTodoDelete)}}/>
        {showTodoDelete && <DeleteTodo onDelete={handelDelete} isOn={shakingEffect}/>}
      </div>
      <h1 className = "font-medium text-lg mt-4 mb-3">Things done</h1>
      {showList(doneList, "No todos here!")}
    </div>
  );
}
export default ToDo;