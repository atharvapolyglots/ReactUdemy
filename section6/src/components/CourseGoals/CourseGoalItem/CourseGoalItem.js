import React from 'react'

export default function CourseGoalItem(prop) {
  
  const deleteMe = () => prop.deleteItem(prop.id);

  return (
    <div>
        <li onClick={deleteMe}>
          {prop.children}
        </li>
    </div>
  )
}
