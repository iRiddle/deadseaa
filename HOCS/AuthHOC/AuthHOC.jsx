import { useRouter } from 'next/router'

import { getDataFromLocal } from '../../storage'

const AuthHOC = Component => {
    const Auth = (props) => {
        const router = useRouter()
        const sessionData = getDataFromLocal('session-cosmetic-token')
        
        if (typeof window !== 'undefined' && !sessionData && window.location.pathname !== '/registration') {
            router.push('/')
        }

        if (typeof window !== 'undefined') {
            if (sessionData !== null && window.location.pathname === '/registration'){
                router.push('/')
            }
        }

        return (
            <Component {...props} />
        );
    };

    return Auth;
};

export default AuthHOC;