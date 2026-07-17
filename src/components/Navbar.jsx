import React from 'react'
import Column from './Column'

const Navbar = (props) => {
    return (
        <>
            <div className='flex justify-between text-white text-xl m-4 ml-9 mr-9 items-center'>
                <div>{props.boardName}</div>
                <div className='flex gap-3 items-center'>
                    <button className='bg-purple-500 rounded-xl w-40 p-2'>Add new task</button>
                    <div>Hritik</div>
                </div>
            </div>

            <div className='w-full bg-amber-50 h-[0.5px]'></div>

            <div className='flex'>
                {props.ColumnNames}
            </div>
        </>
    )
}

export default Navbar