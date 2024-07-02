import React, { useEffect, useRef } from 'react';

const Circles = () => {
  const coords = useRef({ x: 0, y: 0 });
  const circlesRef = useRef([]);

  useEffect(() => {
    const handleMouseMove = (e) => {

      coords.current = { x: e.pageX, y: e.pageY };
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const animateCircles = () => {
      let { x, y } = coords.current;

      circlesRef.current.forEach((circle, index) => {
        if (circle) {
          circle.style.left = `${x - 12}px`;
          circle.style.top = `${y - 12}px`;
          circle.style.transform = `scale(${(circlesRef.current.length - index) / circlesRef.current.length})`;

          const nextCircle = circlesRef.current[index + 1] || circlesRef.current[0];
          x += (nextCircle.x - x) * 0.3;
          y += (nextCircle.y - y) * 0.3;

          circle.x = x;
          circle.y = y;
        }
      });

      requestAnimationFrame(animateCircles);
    };

    animateCircles();
  }, []);

  return (
    <div>
      {Array.from({ length: 10 }).map((_, index) => (
        <div
          key={index}
          className="circle"
          ref={(el) => {
            if (el) {
              circlesRef.current[index] = el;
              el.x = 0;
              el.y = 0;
            }
          }}
          style={{
            position: 'absolute',
            width: '14px',
            height: '14px',
            borderRadius: '50%',
            background: 'white',
            pointerEvents: 'none',
            zIndex:"999999",
            cursor:"none",
            transition: 'transform 0.1s, left 0.1s, top 0.1s'
          }}
        />
      ))}
    </div>
  );
};

export default Circles;
