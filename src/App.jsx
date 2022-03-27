import React from 'react';
import Header from "./Header";
import ToDo from "./ThingsToDo"
function App() {
  return (
  <div>
    <Header/>
    <div className="px-4 sm:px-40 py-10">
      <h1 className="font-bold text-3xl text-gray-900">Things to get done</h1>
      <ToDo/>
    </div>
  </div>
  );
}

export default App;