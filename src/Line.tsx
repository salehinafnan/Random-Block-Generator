import React, { FC } from "react";

interface LineProps {
  from: { x: number; y: number };
  to: { x: number; y: number };
}

export const Line: FC<LineProps> = ({ from, to }) => {
  const boxWidth = 100;
  const boxHeight = 100;

  const dx = to.x + boxWidth / 2 - (from.x + boxWidth / 2);
  const dy = to.y + boxHeight / 2 - (from.y + boxHeight / 2);
  const angle = (Math.atan2(dy, dx) * 180) / Math.PI;
  const length = Math.sqrt(dx * dx + dy * dy);

  return (
    <div
      style={{
        position: "absolute",
        top: `${from.y + boxHeight / 2}px`,
        left: `${from.x + boxWidth / 2}px`,
        width: `${length}px`,
        height: "0",
        border: "1px dashed black",
        transform: `rotate(${angle}deg)`,
        transformOrigin: "0 0",
        zIndex: 1,
      }}
    />
  );
};
