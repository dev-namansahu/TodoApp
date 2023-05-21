import React from "react";
import Addtodo from "./Addtodo";
import Todolist from "./Todolist";
import { useState } from "react";

export default function Todo() {
  const [todolist, settodolist] = useState([]);
  const updatetodostate = (todotext) => {
    settodolist([
      ...todolist,
      {
        id: Date.now(),
        todo: todotext,
        status: 1,
      },
    ]);
  };

  const markasdone = (id) => {
    const temp = todolist.map((el) => {
      if (el.id === id) {
        return {
          ...el,
          status: 2,
        };
      } else {
        return el;
      }
    });
    settodolist(temp);
  };
const remove=(id)=>{
  const removedArr = [...todolist].filter(todo => todo.id !== id);
  settodolist(removedArr)
}
  return (
    <>
      <div className="container" style={{width:"900px", backgroundColor:"lightgrey" , height:"100vh"}}>
        <h1 style={{textAlign:"center", fontWeight:"bold"}}>My  Todo App</h1>
        <Addtodo update={updatetodostate} />
        <Todolist todolist={todolist} markasdone={markasdone} remove={remove} />
      </div>
    </>
  );
}
