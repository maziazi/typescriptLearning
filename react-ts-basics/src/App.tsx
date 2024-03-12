import CourseGoal from './components/CourseGoal.tsx';
import CourseGoalList from './components/CourseGoalList.tsx';
import Header from './components/Header.tsx';
import goalsImg from './assets/goals.jpeg';
import { useState } from 'react';
import NewGoal from './components/NewGoal.tsx';
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

//Digunakan supoaya objek CourseGoal dapat digunakan di file lainnya
export type CourseGoal ={
  title: string;
  description: string;
  id: number;
}

export default function App() {
  const [goals, setGoals] =useState<CourseGoal[]>([]);

  function handleAddGoal(){
    setGoals(prevGoals=>{
      const newGoal: CourseGoal = {
        id: Math.random(),
        title: "Belajar React + Ts",
        description: "Belajar ini dari Udemy kelas oleh Academi",
      };
      return [...prevGoals, newGoal]
    });
  }

  function handleDeleteGoal(id:number){
    setGoals(prevGoals=>prevGoals.filter((goal)=> goal.id !== id));
  }

  return (
    <main>
      <Header image={{src: goalsImg, alt: 'A list of goals'}}>
        <h1>Tujuanku belajar</h1>
      </Header>
      <NewGoal />
      <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal}/>
    </main>
  );
}
