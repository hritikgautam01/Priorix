import React from 'react'

const Sidebar = () => {
  return (
    <>
      <div className='h-[95%] absolute w-[20%]'>
        <div className='border-r-1 border-r-white h-full'>
          <div className='flex items-center space-x-3 mb-6 m-6'>
            <div className='flex items-center justify-center size-12 bg-purple-500 rounded text-white font-bold text-lg!'>
              |||
            </div>

            <h1 className='text-2xl! font-bold text-slate-100'>Priorix</h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar