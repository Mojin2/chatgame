// src/components/TypingText.js
import React, { useEffect, useState } from "react";

const TypingText = ({ text, onComplete }) => {
  const [displayedText, setDisplayedText] = useState("");
  console.log(text);
  useEffect(() => {
    let index = -1;
    setDisplayedText(""); // 새 텍스트가 나타날 때 초기화
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text[index]);
      index++;
      if (index === text.length - 1) {
        clearInterval(interval);
        onComplete();
      }
    }, 100); // 타이핑 속도 조절

    return () => clearInterval(interval);
  }, [text]);

  return (
    <p>
      {displayedText.split("\n").map((line, index) => (
        <React.Fragment key={index}>
          {line}
          <br />
        </React.Fragment>
      ))}
    </p>
  );
};

export default TypingText;
