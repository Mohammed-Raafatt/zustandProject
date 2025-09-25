import { create } from 'zustand'

export type taskType = {
    title:string,
    completed:boolean,
    id:number
}

interface taskStateType {
  tasks: taskType[]
  addTask : (title:string)=>void

}

export const useTaskStore = create<taskStateType>()((set) => ({
  tasks: [],
  addTask:(title)=>{
    set((state) => {
     return {tasks: [...state.tasks, { id: Date.now(), title, completed: false }]} 
    })
    
  },
 
  
  
}))