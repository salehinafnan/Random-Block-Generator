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
  const [isResizing, setIsResizing] = useState(false);
  const [color, setColor] = useState("darkgrey");
  const [size, setSize] = useState({ width: 100, height: 100 });

  const handleMouseDown = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      setIsDragging(true);
      setColor("red");
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    } else {
      setIsResizing(true);
      document.addEventListener("mousemove", handleResize);
      document.addEventListener("mouseup", handleMouseUp);
    }
  };

  const handleMouseMove = (event: MouseEvent) => {
    onMoveBlock(id, { x: event.clientX, y: event.clientY });
  };

  const handleResize = (event: MouseEvent) => {
    const newWidth = event.clientX - position.x;
    const newHeight = event.clientY - position.y;
    if (newWidth >= 100 && newHeight >= 100) {
      setSize({
        width: newWidth,
        height: newHeight,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setIsResizing(false);
    setColor("darkgrey");
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mousemove", handleResize);
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
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: `${size.width}px`,
        height: `${size.height}px`,
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
          width: "70%",
          height: "40%",
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
      <div
        style={{
          position: "absolute",
          right: 0,
          bottom: 0,
          width: "10px",
          height: "10px",
          backgroundColor: "black",
          cursor: "nwse-resize",
        }}
      />
    </div>
  );
};
