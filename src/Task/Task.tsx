import React from 'react'
import { useTaskStore, type taskType } from '../../store/taskStore'

export default function Task({ title, completed , id }: taskType) {
  
let {checkTask} = useTaskStore();
  
  
  
  return <>
  <div className='flex justify-between w-[300px] m-auto mt-[30px] rounded border p-6 border-red-900'>
    <h2 className='text-black bg-red'>{title}</h2>
    <input type="checkbox" onChange={()=>{checkTask(id)}} checked={completed} />
  </div>
  </>
}
