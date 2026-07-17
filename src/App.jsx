
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

  const [selectedBoard, setSelectedBoard] = useState(boards[0].name)
  const [boardName, setBoardName] = useState(boards[0].name)

  const ColumnNames = columns.map((item) => {
    var todoItem = []
    for (var i = 0; i < tasks.length; i++) {
      if (item.id === tasks[i].colId) {
        todoItem = [...todoItem, tasks[i]]
      }
    }
    return <Column key={item.id} name={item.title} todo={todoItem} />
  })


  const childComp = boards.map((item) => <li onClick={clickHandler} className='text-[1.3rem] border-t border-b p-2 '>{item.name}</li>)


  

  function clickHandler(e){
    setSelectedBoard(e.target.textContent)
    setBoardName(e.target.textContent)
    console.log(boardName)
  }


  return (
    <>
      <div className="flex h-screen">
        <Sidebar child={childComp} />

        <div className="flex-1 flex flex-col">
          <Navbar
            ColumnNames={ColumnNames}
            boardName={boardName}
          />
        </div>
      </div>
    </>
  )
}

export default App
