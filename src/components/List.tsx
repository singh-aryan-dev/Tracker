import type { ReactNode } from "react";

type ItemProps = {
    habit : ReactNode;
}
export default function List(){

    const habits = [
        {id:1, name:"Habit1"}
    ]

    if(habits.length === 0) {
        return (
            <p className="text-center text-zinc-500 py-12">
                No habits yet. Add one above to get started!
            </p>
        )
    }
    return <div className="flex flex-col gap-3">
        {habits.map(habit => (
             <Item key={habit.id} habit={habit}></Item >
        ))}
    </div>

}

function Item({habit }:ItemProps) {
    return <h1>{habit}</h1>
}