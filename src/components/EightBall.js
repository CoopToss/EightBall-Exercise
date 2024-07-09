import React, { useState } from "react";

const EightBall = ({ answers }) => {
  const initialMsg = "Think of a Question";
  const initialColor = "black";
  
  const [msg, setMsg] = useState(initialMsg);
  const [color, setColor] = useState(initialColor);

  const handleClick = () => {
    const randomAnswer = answers[Math.floor(Math.random() * answers.length)];
    setMsg(randomAnswer.msg);
    setColor(randomAnswer.color);
  };

  return (
    <div
      onClick={handleClick}
      style={{
        backgroundColor: color,
        color: "white",
        borderRadius: "50%",
        width: "200px",
        height: "200px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        fontSize: "20px",
        cursor: "pointer"
      }}
    >
      {msg}
    </div>
  );
};

export default EightBall;
