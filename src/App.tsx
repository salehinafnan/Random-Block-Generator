import { useState } from "react";
import { Block } from "./Block";
import { Line } from "./Line";

export const App = () => {
  const [blocks, setBlocks] = useState([
    {
      id: "0",
      position: {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      },
      parentId: null,
    },
  ]);

  const handleAddBlock = (parentId: string | null) => {
    const position = {
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
    };
    const id = String(blocks.length);
    setBlocks([...blocks, { id, position, parentId }]);
  };

  const handleDeleteBlock = (id: string) => {
    const deleteRecursively = (id: string) => {
      // Remove the block with the given id
      setBlocks((blocks) => blocks.filter((block) => block.id !== id));

      // Find and remove all child blocks
      blocks
        .filter((block) => block.parentId === id)
        .forEach((childBlock) => deleteRecursively(childBlock.id));
    };

    deleteRecursively(id);
  };

  const handleMoveBlock = (id: string, position: { x: number; y: number }) => {
    setBlocks(
      blocks.map((block) => (block.id === id ? { ...block, position } : block))
    );
  };

  return (
    <div>
      {blocks.map((block) => (
        <Block
          key={block.id}
          id={block.id}
          onAddBlock={handleAddBlock}
          onDeleteBlock={handleDeleteBlock}
          position={block.position}
          onMoveBlock={handleMoveBlock}
        />
      ))}
      {blocks.map((block) =>
        block.parentId ? (
          <Line
            key={block.id}
            from={blocks.find((b) => b.id === block.parentId)!.position}
            to={block.position}
          />
        ) : null
      )}
    </div>
  );
};
