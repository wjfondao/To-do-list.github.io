import React from "react";
import AddTask from "./components/AddTask";
import Header from "./components/Header";

function App() {
  return (
    <div className="App font-mono">
      <Header>To-do List</Header>
      <AddTask>Add</AddTask>
    </div>
  );
}

export default App;
