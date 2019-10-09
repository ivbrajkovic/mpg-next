import { useEffect, useRef } from 'react';

const useRipplet = (selector = '.btn') => {
  const buttonsRef = useRef();

  useEffect(() => {
    buttonsRef.current = document.querySelectorAll(selector);
    buttonsRef.current &&
      buttonsRef.current.forEach(btn => {
        btn.addEventListener('mousedown', ripplet);
      });

    return () => {
      buttonsRef.current &&
        buttonsRef.current.forEach(btn => {
          btn.removeEventListener('mousedown', ripplet);
        });
    };
  }, []);
};

export default useRipplet;
