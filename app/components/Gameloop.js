'use client'
import { useState, useEffect } from 'react';

const words = ['Designing', 'Animation', 'Unity', 'PlayStore', 'Blender', 'Mobile Games'];

export default function Gameloop() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000); // Change word every 1 second

    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" font-bold">
      {words[currentWordIndex]}
    </div>
  );
}
