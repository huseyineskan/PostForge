# 🖼️ Canvas Post Generator (React)

This is a simple **React-based Canvas Post Generator App**.  
It allows users to create a visual post by entering **custom text** and a **background image URL**. The result is rendered on a canvas.

---

## 🚀 Features

- 🖋️ Add custom text to a canvas
- 🖼️ Upload a background image via URL
- 🔤 Change text font size
- 🎨 Centered and styled text rendering
- 🧠 Canvas auto-scaling to fit the image ratio

---

## 🧱 Technologies

- React (Functional Components with Hooks)
- HTML Canvas API
- CSS (Modular styles: `Canvas.css`, `TextControl.css`)
- JavaScript ES6+

---

## 📦 How to Run

1. Clone this repository
2. Run `npm install` to install dependencies
3. Start the app with `npm start`
4. Open [http://localhost:3000](http://localhost:3000) in your browser

---

## 🖼️ Usage

1. Enter the **text** you want to display
2. Set the **font size** (default: 30)
3. Paste a **background image URL** (make sure it's accessible and allows CORS)
4. Click **"Create Post"**
5. The canvas will render your post with centered text on the image

---

## 📌 Example Inputs

- Text: `Hello World`
- Font Size: `40`
- Image URL: `https://images.unsplash.com/photo-...`

---

## 📌 Notes

- Make sure the image URL allows CORS. Otherwise, the canvas won't be able to load it.
- Font is styled using `system-ui`, but you can easily change it in the code.

---

## 🙌 Future Ideas

- Add a overlay
- Add a random image selector
- Download the generated image
- Add multiple text lines or positioning controls
- Text color selector
- Drag & drop image upload
