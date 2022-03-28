import logo from './logo.svg';
import './App.css';
import CourseInput from './components/CourseGoals/CourseInput/CourseInput';
import Header from './components/UI/Header/Header';
import CourseGoalList from './components/CourseGoals/CourseGoalList/CourseGoalList';
import { useState } from 'react';


function App() {

  const [courseGoal,setCourseGoal]=useState([
    {id: 'id1', text: 'do exercise'},
    {id: 'id2', text: 'do course'},
    {id: 'id3', text: 'new course'}

  ])

  const deleteGoalHandler = (course) => {

    courseGoal.splice(course,1)
    setCourseGoal(courseGoal)
    console.log(courseGoal)

  }

  const addGoalHandler = (course) => {
    console.log('Course: ', course);  
    const newItem = { id: `id${courseGoal.length+1}`, text: course };
    const newCoursesArray = [...courseGoal, newItem];
    console.log('New Array: ', newCoursesArray);
    setCourseGoal(newCoursesArray);
  }

  return (
    <div className="App">
      <Header/>
      <CourseInput onAdd={addGoalHandler}/>
      <CourseGoalList items={courseGoal} onDelete={deleteGoalHandler} />
    </div>
  );
}

export default App;
