import { type PropsWithChildren} from "react";

// interface CourseGoalProps{
//     title: string,
//     children: ReactNode,
// }

type CourseGoalProps = PropsWithChildren<{
    id: number;
    title:string
    onDeleteGoal: (id:number)=>void;
}>

// const CourseGoal: FC<CourseGoalProps> = ({ title, children })=>{
//     return (
//         <article>
//             <div>
//                 <h2>{title}</h2>
//                 {children}
//             </div>
//             <button>Delate</button>
//         </article>
//     );
// }
// export default CourseGoal;

export default function CourseGoal({
    title, 
    id,
    children,
    onDeleteGoal,
}: CourseGoalProps) {
    return (
    <article>
        <div>
            <h2>{title}</h2>
            {children}
        </div>
        <button onClick={()=>onDeleteGoal(id)}>Delate</button>
    </article>
    );
}