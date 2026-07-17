import React from 'react'
import { ChevronFirst } from "lucide-react"

const Sidebar = (props) => {
  return (
    <aside className='h-screen'>
      <nav className='h-full flex flex-col bg-white border-r shadow-sm'>
        <div className='p-4 pb-6 flex justify-between items-center gap-10'>
          <h1 className='text-3xl font-bold'>Priorix</h1>
          <button className='p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100'>
            <ChevronFirst />
          </button>
        </div>

        <ul className='flex-1 px-3'>
          {props.child}
        </ul>

        <div className='border-t flex p-3'>

        </div>

      </nav>
    </aside>
  )
}

export default Sidebar