const Description = ({ desc, handleDescValueChange }) => {
  return (
    <input
      type="text"
      className="w-1/3 p-5 my-5 border-zinc-800 border-2 rounded-lg m-2"
      placeholder="Add a new task"
      value={desc}
      onChange={handleDescValueChange}
      required
    />
  );
};

export default Description;
