import React from "react";

export default function Caption({ captions, active }) {
  return (
    <div>
      {captions.map(({ title, description, subdescription, code }, i) => (
        <div key={i}>
          <div style={{ position: "absolute", top: "30px" }}>
            <h1
              className={
                active === i
                  ? "textSlider-title"
                  : "textSlider-title textSlider-deactive"
              }
            >
              {title}
            </h1>
            <div
              className={
                active === i
                  ? "textSlider-description"
                  : "textSlider-description textSlider-deactive"
              }
            >
              {description}
            </div>
            <div
              className={
                active === i
                  ? "textSlider-subdescription"
                  : "textSlider-subdescription textSlider-deactive"
              }
            >
              {subdescription}
            </div>
          </div>
          <button
            className={
              active === i
                ? "textSlider-button"
                : "textSlider-button textSlider-deactive"
            }
          >
            Use{" "}
            <div
              className={
                active === i
                  ? "textSlider-button-code"
                  : "textSlider-button-code textSlider-deactive"
              }
            >
              {code}
            </div>
          </button>
        </div>
      ))}
    </div>
  );
}
