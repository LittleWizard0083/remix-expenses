import { Outlet } from "@remix-run/react";
import expensesStyles  from '~/styles/expenses.css';

export default function ExpensesAppLayout() {
    return(
        <main>
            <h1>Expenses App Layout</h1>
            <Outlet/>

        </main>
    )
}

export function links() {
    return[{rel: 'stylesheet', href: expensesStyles }];
}


