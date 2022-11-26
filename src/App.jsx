import { useState, useEffect } from "react";
import InputTask from "./components/InputTask/InputTask";
import MenuFilter from "./components/MenuFilter/MenuFilter";
import TodoList from "./components/TodoList/TodoList";

const tasksMock = [
  {
    title: "Grab some Pizza",
    completed: true,
  },
  {
    title: "Do your workout",
    completed: true,
  },
  {
    title: "Hangout with friends",
    completed: false,
  },
];

function App() {
  const [tasks, setTasks] = useState(tasksMock);
  const [displayTasks, setDisplayTasks] = useState(tasks);
  const [filter, setFilter] = useState("All");

  const filterDisplayTask = (filterType) => {
    let tasksFiltered = [];
    if (filterType === "Active") {
      tasksFiltered = tasks.filter((element) => element.completed === false);
    } else if (filterType === "Completed") {
      tasksFiltered = tasks.filter((element) => element.completed === true);
    } else {
      tasksFiltered = tasks;
    }
    setDisplayTasks(tasksFiltered);
  };

  useEffect(() => {
    filterDisplayTask(filter);
  }, [tasks]);

  const changeFilter = (filterType) => {
    setFilter(filterType);
    filterDisplayTask(filterType);
  };

  const addTask = (title) => {
    const newTasks = [...tasks, { title, completed: false }];
    setTasks(newTasks);
  };

  const changeStatusTask = (title) => {
    const newArr = tasks.map((obj) => {
      if (obj.title === title) {
        return { ...obj, completed: !obj.completed };
      }
      return obj;
    });
    setTasks(newArr);
  };

  const deleteTask = (title) => {
    const filteredTasks = displayTasks.filter((el) => el.title !== title);
    setTasks(filteredTasks);
  };

  const clearCompleted = () => {
    const filteredTasks = tasks.filter((el) => el.completed === false);
    setTasks(filteredTasks);
  };

  return (
    <div className="p-0 m-0 flex flex-col bg-white-f8 bg-no-repeat bg-[length:100%_30%] bg-mobile-light w-full h-screen">
      <h1 className="p-1 mt-10 mb-2 mx-4 font-bold text-white tracking-widest text-2xl">
        TODO
      </h1>
      <InputTask addTask={addTask} />
      <TodoList
        displayTasks={displayTasks}
        changeStatusTask={changeStatusTask}
        deleteTask={deleteTask}
        clearCompleted={clearCompleted}
      />
      <MenuFilter filter={filter} changeFilter={changeFilter} />
    </div>
  );
}

export default App;
