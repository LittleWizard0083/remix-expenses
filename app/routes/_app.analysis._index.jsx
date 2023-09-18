import  ExpenseStatistics from'~/components/expenses/ExpenseStatistics';
import  Chart  from '~/components/expenses/Chart';

const DUMMYEXPENSES = [
    {
        id:'e1',
        title: 'expenses 1',
        amount: 12.99,
        date: new Date().toDateString()
    },
    {
        id:'e2',
        title: 'expenses 2',
        amount: 16.99,
        date: new Date().toDateString()
    }
]

export default function ExpensesAnalysis() {
    return(
        <main>
            <Chart expenses={DUMMYEXPENSES}/>
            <ExpenseStatistics expenses={DUMMYEXPENSES}/>
        </main>
    )
}