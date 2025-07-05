import ExpenseTracker from "./components/ExpenseTracker";

export default function App(){
    return(
        <main className="max-w-[900px] mx-auto">
            <h1 className="text-[2rem]">Track Your Expense</h1>
            <ExpenseTracker/>
        </main>
    )
}