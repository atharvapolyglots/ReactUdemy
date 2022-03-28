import React from 'react'
import CourseGoalItem from '../CourseGoalItem/CourseGoalItem'

export default function CourseGoalList(prop) {
    return (
        <div>
            <ul>
                {prop.items.map(goal => (
                    <CourseGoalItem id={goal.id} key={goal.id} deleteItem={prop.onDelete}>
                        {goal.text}
                    </CourseGoalItem>
                ))}
            </ul>
        </div>
    )
}
