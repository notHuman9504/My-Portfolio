import React, { useEffect, useRef } from 'react';

const Circles: React.FC = () => {
  const coords = useRef({ x: 0, y: 0 });
  const circlesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
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
          const nextCircle = circlesRef.current[index + 1] || circlesRef.current[0];
          const nextX = nextCircle ? parseFloat(nextCircle.dataset.x || "0") : x;
          const nextY = nextCircle ? parseFloat(nextCircle.dataset.y || "0") : y;

          circle.style.left = `${x - 12}px`;
          circle.style.top = `${y - 12}px`;
          circle.style.transform = `scale(${(circlesRef.current.length - index) / circlesRef.current.length})`;

          x += (nextX - x) * 0.3;
          y += (nextY - y) * 0.3;

          circle.dataset.x = String(x);
          circle.dataset.y = String(y);
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
              el.dataset.x = '0';
              el.dataset.y = '0';
            }
          }}
          style={{
            position: 'absolute',
            width: '14px',
            height: '14px',
            borderRadius: '50%',
            background: 'white',
            pointerEvents: 'none',
            zIndex: 999999,
            cursor: 'none',
            transition: 'transform 0.1s, left 0.1s, top 0.1s',
          }}
        />
      ))}
    </div>
  );
};

export default Circles;
