import { useState } from 'react';
import Formtitle from './Formtitle';
import Description from './Description';
import Rendertask from './Rendertask';

const Form = () => {
  const [task, setTask] = useState('');
  const [desc, setDesc] = useState('');
  const [mainTask, setMainTask] = useState([]);

  const handleTaskValueChange = e => {
    setTask(e.target.value);
  };

  const handleDescValueChange = e => {
    setDesc(e.target.value);
  };

  const submitHandler = e => {
    e.preventDefault();
    setMainTask([...mainTask, { task, desc }]);
    setTask('');
    setDesc('');
  };

  return (
    <>
      <form onSubmit={submitHandler} className="text-center">
        <Formtitle task={task} handleTaskValueChange={handleTaskValueChange} />
        <Description
          desc={desc}
          handleDescValueChange={handleDescValueChange}
        />
        <button className="w-1/2 p-5 bg-black text-white">Add Task</button>
      </form>
      <Rendertask mainTask={mainTask} setMainTask={setMainTask} />
    </>
  );
};

export default Form;
