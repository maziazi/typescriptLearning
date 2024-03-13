import { FormEvent, useRef } from "react";

type NewGoalProps = {
    onAddGoal: (goal: string, sumary:string)=>void;
};

export default function newGoal({onAddGoal}:NewGoalProps){
    const goal = useRef<HTMLInputElement>(null);
    const summary = useRef<HTMLInputElement>(null);
    function handleSubmit(event:FormEvent<HTMLFormElement>){
        event.preventDefault();

        // new FormData(event.currentTarget);
        const enteredGoal = goal.current!.value;
        const enteredSummary = summary.current!.value;

        onAddGoal(enteredGoal, enteredSummary);
    }

    return (
        <form onSubmit={handleSubmit}>
            <p>
                <label htmlFor="goal">Tujuanmu</label>
                <input id="goal" type="text" ref={goal} />
            </p>
            <p>
                <label htmlFor="summary">Deskripsi Singkatmu</label>
                <input id="sumary" type="text" ref={summary}/>
            </p>
            <p>
                <button>Tambahkan Tujuan</button>
            </p>
        </form>
    );
}