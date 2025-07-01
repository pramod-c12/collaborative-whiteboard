# 🖍️ Collaborative Whiteboard

An interactive real-time collaborative whiteboard built with **HTML**, **React (via CDN)**, **Socket.IO**, and **Node.js**. Users can draw together in shared rooms with support for multiple tools, stroke erasing, and live syncing.

🔗 **Live Demo:**  
[https://collaborative-whiteboard-x5ip.onrender.com](https://collaborative-whiteboard-x5ip.onrender.com)

---

## ✨ Features

- ✅ Create or join a room to collaborate in real time  
- 🖌️ Tools: Freehand, Line, Circle, Rectangle  
- 🧼 Erasers: Pixel eraser & Stroke-based eraser  
- 🎨 Adjustable stroke and eraser sizes  
- 🌈 Color picker for drawing  
- 🧹 Clear your own drawings or the entire canvas (creator only)  
- 📎 Copy room ID to clipboard  
- 📡 Powered by Socket.IO for instant communication  

---

## 🚀 How to Use

1. **Visit the live app**  
   👉 [https://collaborative-whiteboard-x5ip.onrender.com](https://collaborative-whiteboard-x5ip.onrender.com)

2. **Create a room**  
   - Click on "Create Room"  
   - Share the Room ID with your collaborators  

3. **Join a room**  
   - Enter the Room ID shared by a friend  
   - Click "Join Room"  

4. **Start drawing together!**  
   - Use the sidebar tools to draw, erase, or clear  

---

## 🛠️ Local Development

### Prerequisites

- Node.js installed

### Steps

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
npm install
node server.js
````

Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🧾 Project Structure

```
.
├── index.html         # Main frontend (React + Tailwind via CDN)
├── server.js          # Express + Socket.IO backend
├── package.json       # Node dependencies and start script
```

---

## 📦 Deployment

This project is deployed using Render. Render handles:

* Server setup with Express
* Hosting of static index.html
* Running the backend WebSocket server

To deploy your own:

* Push the project to GitHub
* Create a new Web Service on Render
* Use:

  * **Build Command:** `npm install`
  * **Start Command:** `node server.js`

---

## 🤝 Contributing

Contributions are welcome! Feel free to fork the repo, submit PRs, or open issues for ideas and improvements.

---

## 🙌 Acknowledgments

* [Socket.IO](https://socket.io/)
* [React](https://reactjs.org/)
* [Tailwind CSS](https://tailwindcss.com/)
* [Render](https://render.com/)

