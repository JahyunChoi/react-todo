import React, { useState } from 'react'

const List = React.memo(({
  id, title, completed, todoData, setTodoData, handleClick
}) => {


  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);//처음에는 그냥 타이틀을 넣어준다?

  const handleComplateChange= (id) => {
    let newTodoData = todoData.map(data => {
      if(data.id === id){
        data.completed = !data.completed;
      } 
      return data;
    })
    setTodoData(newTodoData);
  }
  //타이핑이 되게하는함수
  const handleEditChange = (event) => {
    setEditedTitle(event.target.value);
  }

  const handleSubmit =(event) => {
    event.preventDefault();
    let newTodoData = todoData.map(data=>{
      if(data.id === id) {
        data.title = editedTitle;
      }
      return data;
    })
    setTodoData(newTodoData);
    setIsEditing(false);
  }
  
  if(isEditing){
    return(
      <div className={'flex items-center justify-between w-full px-4 py-1 my-2 text-geay-600 bg-gray-100 border rounded '}>
      <div className="items-center">
        <form onSubmit={handleSubmit}>
          <input 
            value={editedTitle} 
            onChange={handleEditChange}
            className="w-full px-3 py-2 mr-4 text-gray-500 rounded"
          />            
        </form>
  
      </div>
      <div className="items-center">
        <button 
          className='px-4 py-2 float-right'
          onClick={() => setIsEditing(false)}>
        x
        </button>
        <button 
          onClick={handleSubmit} 
          className='px-4 py-2 float-right' 
          type="submit">
          save
        </button>
      </div>
    </div>
      )
  } else {
    return (
      <div className="flex items-center justify-between w-full px-4 py-1 my-2 text-geay-600 bg-gray-100 border rounded ">
        <div className="items-center">
            <input 
              type="checkbox"
              onChange={handleComplateChange(id)}
              defaultChecked={completed}
            />{" "}   
            <span className={completed ? "line-through" : undefined}>{title}
            </span>         
        </div>
        <div className="items-center">
          <button className='px-4 py-2 float-right' onClick={() => handleClick(id)}>
          x
          </button>
          <button className='px-4 py-2 float-right'
          onClick={() => setIsEditing(true)} 
          >
          edit
          </button>
        </div>
      </div>
    ) 
  }

  
});

export default List

