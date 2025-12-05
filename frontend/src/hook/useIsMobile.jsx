// hooks/useIsMobile.js
import { useState, useEffect } from 'react';

// Você pode ajustar este valor para o seu breakpoint CSS
const MOBILE_BREAKPOINT = 768; 

export function useIsMobile() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < MOBILE_BREAKPOINT);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
        };

        if (typeof window !== 'undefined') {
            window.addEventListener('resize', handleResize);

            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }
    }, []);

    return isMobile;
}