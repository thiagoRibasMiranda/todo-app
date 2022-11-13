function InputTask() {
  const handleChange = (event) => {
    console.log(event.target.value);
  };

  const addTask = () => {
    console.log("clicou");
  };

  return (
    <div className="text-3xl font-bold underline">
      <input
        type="text"
        placeholder="Create a new todo..."
        onChange={handleChange}
      />
      <button type="button" onClick={addTask}>
        Adicionar
      </button>
    </div>
  );
}

export default InputTask;
