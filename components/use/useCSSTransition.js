// useCSSTransition.jsx

import { useEffect, useState, useLayoutEffect } from 'react';

export const useCSSTransition = (refEl, isActive, duration) => {
    const [state, setState] = useState(false);

    useLayoutEffect(() => {
        if (refEl.current === null) return;
        refEl.current.style.setProperty('--transition-duration', `${duration}ms`);
        refEl.current.classList.add('css-transition');
    });

    useEffect(() => {
        const timer = setTimeout(
            () => {
                setState(isActive);
            },
            // isActive ? 0 : duration
            duration
        );

        // console.log('TCL: useCSSTransition -> refEl.current', refEl.current);
        if (refEl.current) {
            refEl.current.classList.toggle('css-transition--active', isActive);
        }

        return () => {
            clearTimeout(timer);
        };
    }, [isActive, state]);

    return state;
};
