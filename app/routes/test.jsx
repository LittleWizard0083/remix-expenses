import { Outlet } from '@remix-run/react';
import expensesStyles from '~/styles/expenses.css';
import ExpensesList from '~/components/expenses/ExpensesList';

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
        amount: 16.97,
        date: new Date().toDateString()
    }
]

export default function Layout() {
    return(
        <>
        <Outlet/>
        <main>
           <ExpensesList expenses={DUMMYEXPENSES}/> 
        </main>
        </>

    )
}

export function links() {
    return[{rel: 'stylesheet', href: expensesStyles}];
  }
  