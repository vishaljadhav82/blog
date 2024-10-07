import React, { useEffect } from 'react';
import './header.css';

const Header = () => {
  const blocks = Array.from({ length: 30 }, (_, idx) => `Block ${idx + 1}`);

  // Function to shake blocks
  const shakeBlocks = () => {
    const blockEls = document.querySelectorAll('.scroll-block');
    blockEls.forEach((block) => {
      block.classList.add('shake');
      block.addEventListener(
        'animationend',
        () => {
          block.classList.remove('shake');
        },
        { once: true }
      );
    });
  };

  // useEffect to handle shake interval
  useEffect(() => {
    const interval = setInterval(shakeBlocks, 1000);
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div>
      <div className="scroll-container">
        {blocks.map((block, idx) => (
          <div key={idx} className="scroll-block">
            {block}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
