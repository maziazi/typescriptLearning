import CourseGoal from './CourseGoal.tsx';
import InfoBox from './InfoBox.tsx';
// digunakan untuk mengimpor type dari file lain
import { type CourseGoal as CGoal } from '../App.tsx';
import { type ReactNode } from 'react';

type CourseGoalListProps ={
 goals: CGoal[];
 onDeleteGoal: (id:number)=>void;
}

export default function CourseGoalList({goals, onDeleteGoal}: CourseGoalListProps){
    if(goals.length === 0){
        return (
            <InfoBox mode="hint">
                Kamu tidak punya tujuan belajar untuk ditambahkan!
            </InfoBox>
        );
    }

    let warningBox: ReactNode;
    if (goals .length >= 4){
        warningBox=
        <InfoBox mode="warning" severity="medium">
            Kamu menuliskan terlalu banyak tujuan. Jangan tuliskan terlalu banyak tujuan!
        </InfoBox>
    }

    return(
        <>
        {warningBox}
        <ul>
        {goals.map((goal)=> (
          <li key={goal.id}>
            <CourseGoal id={goal.id} title={goal.title} onDeleteGoal={onDeleteGoal}>
              <p>{goal.description}</p> 
            </CourseGoal>
          </li>
        ))}
        </ul>
        </>
        
    );   
}