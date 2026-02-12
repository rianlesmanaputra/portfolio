import { useEffect, useState } from "react";

function TypingText({ texts, speed = 80, pause = 1500 }) {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < texts[textIndex].length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + texts[textIndex][charIndex]);
        setCharIndex(charIndex + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setDisplayText("");
        setCharIndex(0);
        setTextIndex((textIndex + 1) % texts.length);
      }, pause);

      return () => clearTimeout(timeout);
    }
  }, [charIndex, textIndex, texts, speed, pause]);

  return (
    <span className="text-cyan-400">
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
}

export default TypingText;
