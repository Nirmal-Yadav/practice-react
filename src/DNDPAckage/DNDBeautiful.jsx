import React, { useEffect, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { data } from "../data";

export const reorder = (list, startIndex, endIndex) => {
  console.log("list", list);
  const result = Array.from(list);

  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

function DNDBeautiful() {
  const [dragData, setDragData] = useState([]);

  const onDragEnd = (result) => {
    console.log("result", result);
    if (!result.destination) {
      return;
    }
    const reorderedItems = reorder(
      dragData,
      result.source.index,
      result.destination.index
    );
    console.log("reorderedItems", reorderedItems);
    setDragData(reorderedItems);
  };

  useEffect(() => {
    setDragData(data);
  }, []);

  return (
    <div style={{ border: "2px solid black" }}>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {dragData?.map((item, index) => {
                return (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided, snapshot) => (
                      <div
                        style={{ border: "2px solid red" }}
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <span>{` ${item.id} : ${item.content}`}</span>
                      </div>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default DNDBeautiful;
