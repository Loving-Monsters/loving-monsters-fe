import { useEffect } from 'react';
import handleKeyPress from '../utils/handleKeyPress';



export default function useEvent(propsObj) {
    useEffect(() => {
        window.addEventListener(event, () => handleKeyPress(event, propsObj));

        return function cleanup() {
            window.removeEventListener(event, handleKeyPress);
        };
    });
}
