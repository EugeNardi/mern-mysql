import React from "react";
import { useTasks } from "../context/TaskProvider.jsx";
import { useNavigate } from "react-router-dom";


function TaskCard({ task }) {
  const {deleteTask,toggleTaskDone} = useTasks()

  const navigate = useNavigate()
  
  const handleDone = async () =>{
      await toggleTaskDone(task.id)
      }
  

 
  return (
    <div className="bg-zinc-400 rounded-md p-4 text-white">
      <header className="flex justify-between gap-x-2">
      <h2 className="text-sm font-bold">{task.title}</h2>
      <span>{task.done === 1 ? "✅" : "❌"}</span> 
      </header>
      <p className="text-2xs">{task.description}</p>
      <span>{task.createAt}</span>
      <div className="flex gap-x-2">
      <button className="bg-slate-300 px-2 py-1 text-black" onClick={() => deleteTask(task.id)}>Borrar</button>
      <button className="bg-slate-300 px-2 py-1 text-black" onClick={() => navigate(`/edit/${task.id}`)}>Modificar</button>
      <button className="bg-slate-300 px-2 py-1 text-black" onClick={() => handleDone(task.done)}>Vacunación completa</button>
      </div>
    </div>
  );
}

export default TaskCard;
