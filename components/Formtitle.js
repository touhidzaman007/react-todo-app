const Formtitle = ({ task, handleTaskValueChange }) => {
  return (
    <input
      type="text"
      className="w-1/3 p-5 my-5 border-zinc-800 border-2 rounded-lg m-2"
      placeholder="Add a new task"
      value={task}
      onChange={handleTaskValueChange}
      required
    />
  );
};

export default Formtitle;
