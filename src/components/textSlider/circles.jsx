import React from "react";

export default function Circles({ activeNum, circlesNum, setActive }) {
  return (
    <div className="circles">
      {circlesNum.map((circle, i) => (
        <div className="circle" key={i} onClick={() => setActive(i)}>
          {activeNum === i ? (
            <div className="circle-active" />
          ) : (
            <div className="circle-deactive" />
          )}
        </div>
      ))}
    </div>
  );
}
