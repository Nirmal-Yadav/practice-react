import React, { useState } from "react";
import "./DropArea.css";

function DropArea() {
  const [showDrop, setShowDrop] = useState(false);
  return (
    <section
      onDragEnter={() => setShowDrop(true)}
      onDragLeave={() => setShowDrop(false)}
      className={DropArea ? "drop_area" : "hide_drop"}
    >
      Drop Here
    </section>
  );
}

export default DropArea;
