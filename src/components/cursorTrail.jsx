// CursorTrail.js
import { useEffect } from 'react';
import '../styles/cursorTrail.scss';

const CursorTrail = () => {
    useEffect(() => {
        const cursorTrailContainer = document.getElementById('cursor-trail');

        // Update the handleMouseMove function
const handleMouseMove = (e) => {
    requestAnimationFrame(() => {
        const x = e.clientX;
        const y = e.clientY;

        const star = document.createElement('div');
        star.className = 'trail';
        star.style.left = `${x}px`;
        star.style.top = `${y}px`;

        cursorTrailContainer.appendChild(star);

        setTimeout(() => {
            star.remove();
        }, 1000);
    });
};


        document.addEventListener('mousemove', handleMouseMove);
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return <div id="cursor-trail"></div>; // Ensure this element is rendered
};

export default CursorTrail;
