import { useEffect } from 'react';
import handleKeyPress from '../utils/handleKeyPress';



export default function useEvent(event) {
    useEffect(() => {
    // if (engineFocused.current) {
        window.addEventListener(event, handleKeyPress);

        return function cleanup() {
            window.removeEventListener(event, handleKeyPress);
            // };
        };
    });
}
