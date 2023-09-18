import { Outlet } from '@remix-run/react';
import expensesStyles from '~/styles/expenses.css';
import ExpensesList from '~/components/expenses/ExpensesList';
import Footer from '~/routes/_expenses.expenses/Footer';
import Header from '~/routes/_expenses.expenses/Header';

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
        <Header/>
        <Outlet/>
        <main>
           <ExpensesList expenses={DUMMYEXPENSES}/> 
        </main>
        <Footer/>
        </>

    )
}

export function links() {
    return[{rel: 'stylesheet', href: expensesStyles}];
  }
  