/* eslint-disable react/prop-types */
import { ReactComponent as XmarkLogo } from "./icons/xmark.svg";

function TodoList({
  displayTasks,
  changeStatusTask,
  deleteTask,
  clearCompleted,
}) {
  return (
    <div className="m-0 m-auto p-0 m-4 m-auto bg-white rounded-md shadow-lg">
      <ul>
        {displayTasks.map((element) => (
          <div
            className="flex flex-row justify-between p-3 border-b-2"
            key={element.title}
          >
            <input
              type="checkbox"
              className="w-4 h-4 accent-[#8091F2]"
              checked={element.completed}
              onChange={() => changeStatusTask(element.title)}
            />
            <p className={element.completed ? "line-through" : ""}>
              {element.title}
            </p>
            <button type="button" onClick={() => deleteTask(element.title)}>
              <XmarkLogo />
            </button>
          </div>
        ))}
      </ul>
      <section className="flex flex-row justify-between p-3">
        <span>{displayTasks.length} items left</span>
        <button type="button" onClick={clearCompleted}>
          Clear Completed
        </button>
      </section>
    </div>
  );
}

export default TodoList;
