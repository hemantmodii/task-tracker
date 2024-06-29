import React, { useState } from 'react'

const AddTask = ({taskList, setTaskList}) => {

  const [addModal, setAddModal] = useState(false);
  const [projectName, setProjectName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const handleInput = ({target}) => {
      const {name, value} = target;

      if(name === "projectName") {
        setProjectName(value);
        setErrorMessage("");
      }
      if(name === "projectName" && value === "") {
        setErrorMessage("Enter Project Name to continue");
      }
      if(name === "taskDescription") setTaskDescription(value);
  }


  const handleAdd = (e) => {
    e.preventDefault();
    if(!projectName) {
      setErrorMessage("Enter Project Name to continue")
    } else 
    {
      let timeStamp = new Date();
      let tempList = taskList;
      tempList.push({
        projectName,
        taskDescription,
        timeStamp: timeStamp,
        duration: 0
      })
      localStorage.setItem("taskList", JSON.stringify(tempList))
      window.location.reload()
      setTaskList(
      [...taskList, {projectName, taskDescription, timeStamp: timeStamp}]);
      setAddModal(false);
    setProjectName("");
    setTaskDescription("");}
  }

  return (
    <>
      <button className='bg-blue-500 text-white uppercase text-sm font-semibold py-1 mx-1.5 pl-2 pr-2.5 rounded hover:opacity-70'
      type='button'
      onClick={() => setAddModal(!addModal)}
      >
        +New
      </button>
      {addModal ? (
        <>
          <div className='flex items-center justify-center overflow-x-hidden overflow-y-auto fixed inset-0 z-100'>
            <div className='w-9/12 max-w-lg bg-white rounded-lg shadow-md relative flex flex-col'>

            <div className='flex flex-row justify-between align-center p-5 border-b border-slate-200 rounded-t'>
            <h3 className='text-3xl font-semibold'>Add New Task</h3>
            <button className='px-1 text-gray-400 float-right text-3xl leading-none font-bold block'
            onClick={() =>setAddModal(false)}
            >x</button>
            </div>
              <form 
                className='px-6 pt-6 pb-4'
                action="submit">
                <div>
                    <label 
                        className='tracking-wide uppercase text-gray-700 text-xs font-semibold mb-2 block'
                        htmlFor="project-name">Project Name
                    </label>
                    <input 
                      id='project-name'
                      name='projectName'
                      value={projectName}
                      onChange={handleInput}
                      className='w-full bg-gray-200 text-gray-700
                      border
                      border-gray-200
                      rounded py-3 px-4
                      leading-tight
                      focus:outline-none
                      focus:bg-white'
                      type="text" placeholder='Project Name' required />
                      <p className='text-red-500 text-center mt-2 mb-5'>{errorMessage}</p>
                </div>
                <div>
                  <label 
                  className='tracking-wide uppercase text-gray-700 text-xs font-semibold mb-2 block'
                  htmlFor="task-description">Task Description</label>
                  <textarea
                  rows="5"
                  id="task-description"
                  name='taskDescription'
                  value={taskDescription}
                  onChange={handleInput}
                  type="text"
                  placeholder='Task Description'
                  className='w-full bg-gray-200 text-gray-700 
                  border border-gray-200 rounded py-3 px-4 mb-5 leading-tight focus:outline-none focus:bg-white' />
                </div>
              </form>
              <div className='flex justify-end p-6 border-t border-slate-200 rounded-b'>
                <button
                className='bg-blue-500 text-white font-semibold uppercase text-sm px-6 py-3 rounded hover:opacity-70'
                onClick={handleAdd}
                >
                  Add Task
                </button>
              </div>
            </div>
          </div>
        </>
      ): null}
    </>
  )
}

export default AddTask