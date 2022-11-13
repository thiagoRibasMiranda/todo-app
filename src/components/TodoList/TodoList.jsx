function TodoList() {
  const todoList = ["task1", "task2", "task3", "task4", "task5"];

  const clearCompleted = () => {
    todoList.pop();
  };

  const deleteTask = () => {
    todoList.pop();
  };

  return (
    <div>
      <ul>
        {todoList.map((element) => (
          <div>
            <input type="checkbox" />
            <li key={element}>{element}</li>
            <button type="button" onClick={deleteTask}>
              Delete
            </button>
          </div>
        ))}
      </ul>
      <section>
        <span>{todoList.length} items left</span>
        <button type="button" onClick={clearCompleted}>
          Clear Completed
        </button>
      </section>
    </div>
  );
}

export default TodoList;
