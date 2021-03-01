import { useEffect } from 'react';

export default function useEvent(event, handler, engineFocused) {
  useEffect(() => {
    if (engineFocused.current) {
      window.addEventListener(event, handler);

      return function cleanup() {
        window.removeEventListener(event, handler);
      };
    }
  });
}