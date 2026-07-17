import React from 'react'

const Task = (props) => {

    var color = props.prio === "High" ? "bg-red-500" : props.prio === "Med" ? "bg-yellow-500" : "bg-green-500"


    return (
        <>
            <div className='flex text-white  h-[120px]'>
                <div className='h-[90%] border-l-4 border-amber-400 z-10 self-center'></div>
                <div className='p-3'>
                    <div>
                        {props.title}
                    </div>
                    <div>{props.desc}</div>
                    <div className= {`p-2 ${color}`}
                    >{props.prio}</div>
            </div>
        </div >
        </>
    )
}

export default Task