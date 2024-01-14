import { useState } from "react";

interface BlockProps {
  id: string;
  onAddBlock: (id: string) => void;
  onDeleteBlock: (id: string) => void;
  position: { x: number; y: number };
  onMoveBlock: (id: string, position: { x: number; y: number }) => void;
}

export const Block = ({
  id,
  onAddBlock,
  onDeleteBlock,
  position,
  onMoveBlock,
}: BlockProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const [color, setColor] = useState("darkgrey");

  const handleMouseDown = () => {
    setIsDragging(true);
    setColor("red");
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    onMoveBlock(id, { x: event.clientX, y: event.clientY });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setColor("darkgrey");
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  const handleAddBlock = () => {
    onAddBlock(id);
  };

  const handleDeleteBlock = () => {
    onDeleteBlock(id);
  };

  return (
    <div
      style={{
        position: "absolute",
        top: position.y,
        left: position.x,
        width: "100px",
        height: "100px",
        backgroundColor: color,
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "column",
        zIndex: isDragging ? 3 : 2,
        padding: "10px",
      }}
      onMouseDown={handleMouseDown}
    >
      <div>{id}</div>
      <div
        style={{
          width: "60px",
          height: "30px",
          backgroundColor: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button
          style={{
            backgroundColor: "transparent",
            border: "none",
            color: "black",
            fontSize: "2em",
            marginRight: "10px",
            marginLeft: "10px",
          }}
          onClick={handleAddBlock}
        >
          +
        </button>
        <button
          style={{
            backgroundColor: "transparent",
            border: "none",
            color: "black",
            fontSize: "2em",
            marginRight: "10px",
            marginLeft: "10px",
          }}
          onClick={handleDeleteBlock}
        >
          -
        </button>
      </div>
    </div>
  );
};
