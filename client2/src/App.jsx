import React from "react";
import { Route, Routes } from "react-router-dom";
import TaskPage from "./pages/TaskPage.jsx";
import TaskForm from "./pages/TaskForm.jsx";
import NotFound from "./pages/NotFound.jsx";
import Navbar from "./components/Navbar.jsx";
import { TaskContextProvider } from "./context/TaskProvider.jsx";

function App() {
  return (
    <>
      <div className="bg-neutral-50 h-screen">
      <Navbar></Navbar>
      <div className="container mx-auto py-4 px-20">
      <TaskContextProvider>
        <Routes>
          <Route path="/" element={<TaskPage></TaskPage>} />
          <Route path="/new" element={<TaskForm></TaskForm>} />
          <Route path="/edit/:id" element={<TaskForm></TaskForm>} />
          <Route path="*" element={<NotFound></NotFound>} />
        </Routes>
      </TaskContextProvider>
      </div>
      </div>
    </>
  );
}

export default App;
