
import { useEffect, useState } from 'react'
import Sidebar from "./components/Sidebar"
import Board from "./components/Board"
import CreateBoardModal from "./components/CreateBoardModal"
import AuthPage from "./components/AuthPage"
import { Toaster } from "sonner"
import { columns, boards, tasks } from './data'
import Navbar from './components/Navbar'
import Column from './components/Column'


function App() {
  
  const ColumnNames = columns.map( (item) => {
    var todoItem = []
    for(var i=0; i<tasks.length; i++ ){
      if(item.id === tasks[i].colId){
        todoItem = [...todoItem, tasks[i]]
      }
    }
    return <Column key={item.id} name={item.title} todo={todoItem} />
  })



  return (
    <>
      <Navbar ColumnNames = {ColumnNames} boardName={boards[1].name}/>
    </>
  )
}

export default App
