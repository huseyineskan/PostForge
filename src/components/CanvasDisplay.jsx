import React, { useRef, useEffect, useState } from "react";
import "../styles/Canvas.css";
import "../styles/TextControl.css";

function CanvasDisplay() {
  const canvasRef = useRef(null);

  const [userText, setUserText] = useState("");
  const [bgImageURL, setBgImageURL] = useState("");
  const canvasWidth = 500;
  const canvasHeight = 500;

  useEffect(() => {}, []);

  function createPost() {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const image = new Image();
    image.crossOrigin = "anonymous";
    image.src = bgImageURL;

    image.onload = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // draw bg image
      ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

      // Text styles
      ctx.font = "bold 40px system-ui";
      ctx.fillStyle = "#fff";

      // Text position - center
      const metrics = ctx.measureText(userText);
      const textHorizontalCenter = (canvas.width - metrics.width) / 2;
      const textVerticalCenter =
        (canvas.height - metrics.actualBoundingBoxDescent) / 2;

      ctx.fillText(userText, textHorizontalCenter, textVerticalCenter);
    };

    image.onerror = () => {
      alert("Image could not be loaded. Please enter a valid image URL.");
    };
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
            <div className="form-input">
              <input
                type="text"
                placeholder="Background image URL"
                onChange={(e) => setBgImageURL(e.target.value)}
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
