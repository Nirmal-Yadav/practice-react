import React, { useEffect, useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

function Dropping() {
  const [data, setData] = useState([]);

  const reorder = (list, startIndex, endIndex) => {
    console.log("list", list);
    const result = Array.from(list);

    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  const onDragEnd = (result) => {
    console.log("result2", result);
    if (!result.destination) {
      return;
    }
    const reorderedItems = reorder(
      data,
      result.source.index,
      result.destination.index
    );
    console.log("reorderedItems", reorderedItems);
    setData(reorderedItems);
  };

  useEffect(() => {}, []);
  //   return (
  //     <div style={{ border: "2px solid green", height: "50px" }}>
  //       <DragDropContext onDragEnd={onDragEnd}>
  //         <Droppable droppableId="droppableId">
  //           {(provided, snapshot) => (
  //             <div {...provided.droppableProps} {...provided.droppableProps} ref={provided.innerRef}>
  //               {data?.map((item, index) => {
  //                 return <div key={item.id}>{item.id}</div>;
  //               })}
  //               {provided.placeholder}
  //             </div>
  //           )}
  //         </Droppable>
  //       </DragDropContext>
  //     </div>
  //   );

  return (
    <div style={{ border: "2px solid green", height: "200px" }}>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppableId2">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {data?.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={{
                        padding: "8px",
                        margin: "4px",
                        background: "lightgrey",
                        border: "1px solid blue",
                      }}
                    >
                      {item.id}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default Dropping;

// function Dropping() {
//   const [data, setData] = useState(initialData);

//   const onDragEnd = (result) => {
//     if (!result.destination) return;
//     const reorderedItems = reorder(
//       data,
//       result.source.index,
//       result.destination.index
//     );
//     setData(reorderedItems);
//   };

//   return (
//     <div style={{ border: "2px solid green", height: "200px" }}>
//       <DragDropContext onDragEnd={onDragEnd}>
//         <Droppable droppableId="droppableId2">
//           {(provided) => (
//             <div {...provided.droppableProps} ref={provided.innerRef}>
//               {data?.map((item, index) => (
//                 <Draggable key={item.id} draggableId={item.id} index={index}>
//                   {(provided) => (
//                     <div
//                       ref={provided.innerRef}
//                       {...provided.draggableProps}
//                       {...provided.dragHandleProps}
//                       style={{
//                         padding: "8px",
//                         margin: "4px",
//                         background: "lightgrey",
//                         border: "1px solid blue",
//                       }}
//                     >
//                       {item.id}
//                     </div>
//                   )}
//                 </Draggable>
//               ))}
//               {provided.placeholder}
//             </div>
//           )}
//         </Droppable>
//       </DragDropContext>
//     </div>
//   );
// }

// export { Dropping };
