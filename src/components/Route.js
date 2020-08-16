import { useEffect, useState } from 'react';

const Route = ({ path, children }) => {  
    
    // This useState exists just so we can make the component to rerender
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    useEffect (() => {
        const onLocationChange = () => {
            setCurrentPath(window.location.pathname);
            console.log('Location Changed');
        }

        window.addEventListener('popstate', onLocationChange);

        return () => {
            window.removeEventListener('popstate', onLocationChange);
        }
    }, []);

    return currentPath === path ? children : null;      
};

export default Route;