import { Form, Formik } from "formik";
import { useTasks } from "../context/TaskProvider.jsx";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function TaskForm() {
  const { createTask, getTask, updateTask } = useTasks();
  const [task, setTask] = useState({
    title:"",
    description:""
  })
  const params = useParams();
  const navigate = useNavigate();

  useEffect( () => {
    const loadTask = async () => {
      if (params.id) {
        const task = await getTask(params.id);
        console.log(task)
        setTask({
          title:task.title,
          description:task.description,
        })
      }
    };
    loadTask();
  }, []);

  return (
    <div className="mx-auto">
     

      <Formik
        initialValues={task}
        enableReinitialize={true}
        onSubmit={async (values, actions) => {
          console.log(values);
          
          if(params.id ){
            await updateTask(params.id , values);
            
          }else{
            await createTask(values);
          }
          navigate("/");

          setTask({
            title:"",
            description:"",
          })
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form onSubmit={handleSubmit} className="bg-slate-300 max-w-sm rounded-md p-4 mx-auto mt-10">
            <h1 className="text-xl font-bold uppercase text-center">{params.id ? "Editar registro" : "Nuevo Registro"}</h1>
            <label className="block">N° de caravana</label>
            <input
              type="number"
              name="title"
              placeholder="Ingrese el numero"
              className="px-2 py-1 rounded-sm block w-full"
              onChange={handleChange}
              value={values.title}
            />
            <ul></ul>
            
            <label className="block">Peso (Kg)</label>
            <input
              name="description"
              type="number"
              placeholder="Ingrese el peso"
              className="px-2 py-1 rounded-sm block w-full"
              onChange={handleChange}
              value={values.description}
            ></input>

            <button type="submit" disabled={isSubmitting} className="block bg-orange-800 px-2 py-1 text-white w-full rounded-md">
              {isSubmitting ? "Guardando..." : "Guardar"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default TaskForm;
