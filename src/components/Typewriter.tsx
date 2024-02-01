import React, { useState, useEffect } from 'react';

interface TypewriterProps {
  text: string[];
  delay: number;
  infinite: boolean;
}

export const Typewriter = ({ text, delay, infinite }: TypewriterProps) => {
  const [textIndex, setTextIndex] = useState(0)
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text[textIndex].length ) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[textIndex][currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);

    } else if (infinite) {
      setTimeout(() => {
        setCurrentIndex(0);
        setCurrentText('');
        if (textIndex < text.length - 1) {
          setTextIndex(prevIndex => prevIndex + 1);
        } else {
          setTextIndex(0)
        }
      }, 2500)
    }
  }, [currentIndex, delay, text, infinite]);

  return (
    <>
      {currentText}
    </>
  )
}