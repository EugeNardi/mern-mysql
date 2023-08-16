import React from "react";
import { useEffect, } from "react";
import TasksCard from "../components/TaskCard.jsx";
import { useTasks } from "../context/TaskProvider.jsx";


function TaskPage() {
  const {tasks, loadTasks} = useTasks()

  useEffect(() => {
    loadTasks();
  }, []);

  function renderMain() {
    if (tasks.length === 0) return <h1>NO HAY CARAVANA DISPONIBLE</h1>;
    return tasks.map((task) => <TasksCard task={task} key={task.id} />);
  }
  return (
    <div>
      <h1 className="text-5xl  font-bold text-center ">REGISTRO DE TROPA </h1>
      <div className="grid grid-cols-3 gap-2">
      {renderMain()}
      </div>
    </div>
  );
}

export default TaskPage;
