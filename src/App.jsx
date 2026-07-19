
import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import Column from './components/Column'
import { columns, boards, tasks } from './data'

function App() {

  const [selectedBoardId, setSelectedBoardId] = useState(boards[0].id)

  const selectedBoard = boards.find((board) => board.id === selectedBoardId)
  const boardName = selectedBoard?.name || ''

  const columnComponents = columns
    .filter((column) => column.boardId === selectedBoardId)
    .map((column) => {
      const todoItems = tasks.filter((task) => task.colId === column.id)
      return <Column key={column.id} name={column.title} todo={todoItems} />
    })


  const boardList = boards.map((board) => (
    <li
      key={board.id}
      onClick={() => setSelectedBoardId(board.id)}
      className='text-[1.3rem] border-t border-b p-2 cursor-pointer'
    >
      {board.name}
    </li>
  ))




  return (
    <div className='flex h-screen'>
      <Sidebar child={boardList} />

      <div className='flex-1 flex flex-col'>
        <Navbar ColumnNames={columnComponents} boardName={boardName} />
      </div>
    </div>
  )
}

export default App
