import React, { Component } from 'react'
import List from "./List";



const Lists = React.memo(({todoData, setTodoData,handleClick }) => {
  return (
    <div>     
    {todoData.map(data => (        
     <List 
      handleClick={handleClick}
      key={data.id}
      id={data.id}
      title={data.title}
      completed={data.completed}
      todoData={todoData}
      setTodoData={setTodoData}
      // provided, snapshot 필요없는듯
    />
    ))}
  </div>  
  )
})

export default Lists
