# Interview Prep
*Code Together, Grow Together*

<img width="1911" height="911" alt="Screenshot from 2026-06-13 02-54-02" src="https://github.com/user-attachments/assets/355ea59d-1c30-476f-9869-f80bb9805c4c" />


A full-stack collaborative coding platform for technical interview preparation. Practice LeetCode-style problems in real-time with friends via live video calls, chat, and a shared code editor.

## Features
- **User Authentication**: Sign up or login via Clerk (Google, GitHub, email)
- **Dashboard**: View active sessions, join or create rooms, track recent sessions
- **Live Video Call and Chat**: Real-time video session and chat using Stream
- **Code Editor**: Monaco editor with support for JavaScript, Python, and Java using PistonAPI (PistonAPI public endpoints are no longer free, so hosted locally using Docker)
- **Problem Library**: Curated LeetCode-style problems with examples and constraints
<img width="1911" height="911" alt="Screenshot from 2026-06-13 02-55-32" src="https://github.com/user-attachments/assets/8e08b437-7144-4427-92db-5b3d43fbf2c1" />

## Tech Stack
 
**Frontend**
- React + Vite
- Tailwind CSS + DaisyUI
- TanStack Query
- Stream Video & Chat React SDKs
- Monaco Editor
- React Router
**Backend**
- Node.js + Express
- MongoDB + Mongoose
- Clerk (auth middleware)
- Stream (video + chat)
- Inngest (durable workflows for user synchronisation)
**Deployment**
- Frontend + Backend: Render
- Database: MongoDB Atlas

<img width="1911" height="911" alt="Screenshot from 2026-06-13 02-54-50" src="https://github.com/user-attachments/assets/d396df9f-7e8f-4da1-90ef-e494876a6cf6" />
<img width="1911" height="911" alt="Screenshot from 2026-06-13 02-55-56" src="https://github.com/user-attachments/assets/fc20222d-60af-4ed3-8242-5038f439da40" />
