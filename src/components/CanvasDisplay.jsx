import React, { useRef, useEffect, useState } from "react";
import "../styles/Canvas.css";

function CanvasDisplay() {
  const canvasRef = useRef(null);

  const [userText, setUserText] = useState("");
  const [canvasWidth, setCanvasWidth] = useState(400);
  const [canvasHeight, setCanvasHeight] = useState(400);

  useEffect(() => {}, []);

  function createPost() {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const metrics = ctx.measureText(userText);

    const textHorizontalCenter = (canvas.width - metrics.width) / 2;
    const textVerticalCenter =
      (canvas.height - metrics.actualBoundingBoxDescent) / 2;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillText(userText, textHorizontalCenter, textVerticalCenter);
    ctx.font = "bold 40px system-ui";
  }

  return (
    <section className="main-section">
      <div className="text-control">
        <div className="form">
          <div className="form-group">
            <div className="form-input">
              <input
                type="text"
                placeholder="Text"
                onChange={(e) => setUserText(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group">
            <button onClick={() => createPost()}>Create Post</button>
          </div>
        </div>
      </div>
      <div className="canvas">
        <canvas
          ref={canvasRef}
          width={canvasWidth}
          height={canvasHeight}
        ></canvas>
      </div>
    </section>
  );
}

export default CanvasDisplay;
