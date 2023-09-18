import authStyles from '~/styles/auth.css';
import AuthFrom from '~/components/auth/AuthForm';
export default function Authentification() {
    return(
        <AuthFrom/>
    )
}

export function links() {
    return[{rel: 'stylesheet', href: authStyles}];
}