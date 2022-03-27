import React from "react"

function AddTodo(props){
  const [showTodoCreateForm, toggleShowTodoCreateForm] = React.useState(false)
  const [textValue, setTextValue] = React.useState("")
  const handelSave = () => {
    props.onAdd(textValue)
    setTextValue("")
    toggle()
  }
  const toggle = () => {
    toggleShowTodoCreateForm(!showTodoCreateForm)
    props.changeDelete()
  }
  return (
    <div>
      {!showTodoCreateForm && <button onClick={toggle} className="bg-yellow-500 text-white p-2 font-medium text-sm rounded-full mt-2 px-3">➕ Add a todo </button>}
      {showTodoCreateForm && 
      <div className="p-6 shadow-sm">
        <h1 className="font-medium text-gray-900">Create a todo</h1>
        <input value = {textValue} onChange={(event) => {setTextValue(event.target.value)}} className="sm:w-1/4 w-full border border-gray-300 rounded-md p-2 text-sm mt-4" placeholder="Add any task here"></input><br/>
        <div className="mt-4">
          <button onClick={handelSave} className="bg-yellow-500 font-medium px-4 p-2 rounded-md text-white">Save</button>
          <button onClick={toggle} className="border font-medium px-4 p-2 rounded-md ml-3">Cancel</button>
        </div>
      </div>
    }
    </div>);
}
export default AddTodo;