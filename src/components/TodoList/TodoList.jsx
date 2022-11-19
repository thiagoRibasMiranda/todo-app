/* eslint-disable react/prop-types */
function TodoList({
  displayTasks,
  changeStatusTask,
  deleteTask,
  clearCompleted,
}) {
  return (
    <div>
      <ul>
        {displayTasks.map((element) => (
          <div key={element.title}>
            <input
              type="checkbox"
              checked={element.completed}
              onChange={() => changeStatusTask(element.title)}
            />
            <li>{element.title}</li>
            <button type="button" onClick={() => deleteTask(element.title)}>
              Delete
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
