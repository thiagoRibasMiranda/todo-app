/* eslint-disable react/prop-types */
import { ReactComponent as XmarkLogo } from "./icons/xmark.svg";

function TodoList({
  displayTasks,
  changeStatusTask,
  deleteTask,
  clearCompleted,
}) {
  return (
    <div className="m-0 m-auto p-0 m-4 m-auto bg-white rounded-md">
      <ul>
        {displayTasks.map((element) => (
          <div
            className="flex flex-row justify-between p-3 border-b-2"
            key={element.title}
          >
            <input
              type="checkbox"
              checked={element.completed}
              onChange={() => changeStatusTask(element.title)}
            />
            <li>{element.title}</li>
            <button type="button" onClick={() => deleteTask(element.title)}>
              <XmarkLogo />
            </button>
          </div>
        ))}
      </ul>
      <section>
        <span>{displayTasks.length} items left</span>
        <button type="button" onClick={clearCompleted}>
          Clear Completed
        </button>
      </section>
    </div>
  );
}

export default TodoList;
