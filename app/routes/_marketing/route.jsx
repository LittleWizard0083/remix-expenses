import { Outlet } from "@remix-run/react";
import styleMarketing from '~/styles/marketing.css';

export default function MarketingLayout() {
    return(
        <Outlet/>
    )
}

export function links() {
    return [{rel: 'stylesheet', href: styleMarketing}]
}