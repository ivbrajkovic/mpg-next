// useFadeIn

import { useEffect, useLayoutEffect } from 'react';

export const useFadeIn = (refEl, delay) => {
    useLayoutEffect(() => {
        if (refEl.current === null) return;
        refEl.current.style.setProperty('animation-delay', `${delay}ms`);
        refEl.current.classList.add('fade-in');
    });

    useEffect(() => {
        refEl.current.classList.add('fade-in--active');
        return () => elementRef.current.classList.remove('fade-in--active');
    }, []);
};
