import { useState } from 'react';

const Rendertask = ({ mainTask, setMainTask }) => {
  const deleteHandler = i => {
    let copyTask = [...mainTask];
    copyTask.splice(i, 1);
    setMainTask(copyTask);
  };

  let renderTask = (
    <tbody>
      <tr className="bg-blue-gray-50">
        <td>No Task Available</td>
        <td>No Description Available</td>
        <td>No Action Available</td>
      </tr>
    </tbody>
  );

  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <tbody>
          <tr
            key={i}
            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
          >
            <td className=" font-medium px-6 py-4">{t.task}</td>
            <td className=" font-medium px-6 py-4">{t.desc}</td>
            <td className=" font-medium px-6 py-4">
              <button
                onClick={() => {
                  deleteHandler(i);
                }}
                className="bg-red-400 text-white px-4 py-2 rounded font-bold"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      );
    });
  }
  return (
    <div className="relative overflow-x-auto mt-5">
      <table className="w-full text-sm text-center rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Task Name
            </th>
            <th scope="col" className="px-6 py-3">
              Task Description
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        {renderTask}
      </table>
    </div>
  );
};

export default Rendertask;
