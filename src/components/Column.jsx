import React from 'react'
import Task from './Task'

const Column = (props) => {
    const todoComp = props.todo.map( (item) => {
        return <Task title={item.title} desc = {item.desc} prio={item.priority}/>
    })
    return (
        <>
            <div className='text-white m-6 flex flex-col w-[200px] border-white border-2 p-4'>
                <div className='flex justify-between'>
                    <div>
                        <div></div>
                        <div>{props.name} </div>
                    </div>
                    <div>Edit</div>
                </div>
                {todoComp}
            </div>
        </>
    )
}

export default Column