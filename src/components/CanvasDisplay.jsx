import React, { useRef, useEffect, useState } from "react";
import "../styles/Canvas.css";
import "../styles/TextControl.css";

function CanvasDisplay() {
  const canvasRef = useRef(null);

  const [userText, setUserText] = useState("");
  const [bgImageURL, setBgImageURL] = useState("");
  const [textFontSize, settextFontSize] = useState(30);
  const canvasSize = 500;
  const canvasWidth = 500;
  const canvasHeight = 500;

  useEffect(() => {
    createPost();
  }, [userText, textFontSize]);

  function createPost() {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const image = new Image();
    image.crossOrigin = "anonymous";
    image.src = bgImageURL;

    image.onload = () => {
      const imgRatio = image.width / image.height;
      let drawWidth = canvasSize;
      let drawHeight = canvasSize;

      if (imgRatio > 1) {
        drawHeight = canvasSize;
        drawWidth = canvasSize * imgRatio;
      } else {
        drawWidth = canvasSize;
        drawHeight = canvasSize / imgRatio;
      }
      const offsetX = (canvasSize - drawWidth) / 2;
      const offsetY = (canvasSize - drawHeight) / 2;

      ctx.clearRect(0, 0, canvasSize, canvasSize);

      // draw bg image
      ctx.drawImage(image, offsetX, offsetY, drawWidth, drawHeight);
      console.log("OffsetX: " + offsetX);
      // Text styles
      ctx.font = `bold ${textFontSize}px system-ui`;
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
            <span className="bg-color">1</span>
          </div>
          <div className="form-group">
            <div className="form-input">
              <input
                type="text"
                placeholder="Text"
                onChange={(e) => setUserText(e.target.value)}
              />
              <input
                className="font-size-number"
                type="number"
                value={textFontSize}
                onChange={(e) => settextFontSize(e.target.value)}
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
