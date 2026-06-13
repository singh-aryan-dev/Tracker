import Form from "./components/Form"
import Header from "./components/Header"
import List from "./components/List"

export default function App() {
  return (
    <div className="max-w-2xl mx-auto p-4 flex flex-col gap-4">
        <Header />
        <Form/>
        <List />
    </div>
  )
}

