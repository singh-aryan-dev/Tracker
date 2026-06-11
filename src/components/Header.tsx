import { Button } from "./Button";

export default function Header() {
  return (
    <header className="flex items-center justify-between">
      {/* left side */}
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold">Tracker</h1>
        <span className="text-zinc-400 text-sm">1/1</span>
      </div>
 
      {/* right side */}
      <div className="flex flex-col gap-1 items-end">
        <span className="text-zinc-400 text-sm">May 9 - May 14</span>
        <div className="flex items-center gap-3">
          <Button>Prev</Button>
          <Button >Next</Button>
        </div>
      </div>
    </header>
  )
}