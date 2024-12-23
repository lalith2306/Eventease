import React from "react";

function ProgressBar({ progress }) {
  return (
    <div style={{ width: "100%", backgroundColor: "#f4f4f4" }}>
      <div
        style={{
          width: `${progress}%`,
          height: "20px",
          backgroundColor: "green",
        }}
      ></div>
    </div>
  );
}

export default ProgressBar;
