
# 🛒 Product Store

**Product Store** is a full-stack MERN (MongoDB, Express.js, React, Node.js) web application for managing and displaying products. It features product listing, creation, update, and deletion functionalities using a modern tech stack with responsive and dynamic UI built with Chakra UI.

---

## 🚀 Features

- 📦 Create, Read, Update, and Delete products (CRUD operations)
- 🌐 RESTful API with Express and MongoDB
- ⚛️ Modern frontend with React and Chakra UI
- 📁 Modular folder structure (MVC architecture)
- 🔥 Vite for blazing-fast frontend development
- 📦 Zustand for state management
- 🌙 Theme support via `next-themes`
- ✅ Production-ready build scripts
- 🌍 CORS enabled for cross-origin access

---

## 🛠️ Tech Stack

### 💻 Frontend
- React
- Vite
- Chakra UI
- Zustand (state management)
- React Router DOM
- React Icons
- next-themes (dark/light theme)
- Toast notifications

### 🖥️ Backend
- Node.js
- Express.js
- MongoDB (via Mongoose)
- dotenv (env config)
- cors (for API access)
- Nodemon & Cross-env (dev support)

---

## 📁 Project Structure

```
/mern
  ├── backend
  │   ├── config/
  │   ├── controller/
  │   ├── models/
  │   ├── routes/
  │   └── server.js
  ├── frontend
  │   ├── public/
  │   ├── src/
  │   └── vite.config.js
  ├── .env
  ├── package.json
  └── README.md
```

---

## 🔧 Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/your-username/product-store.git
cd product-store
```

### 2. Setup environment variables

Create a `.env` file in the root and add your MongoDB connection string:

```
PORT=5000
MONGO_URI=your_mongo_connection_string
NODE_ENV=development
```

### 3. Install dependencies

```bash
# install backend dependencies
npm install

# install frontend dependencies
cd frontend
npm install
```

### 4. Run the project

**Development Mode:**

```bash
# from root directory
npm run dev
```

**Production Build:**

```bash
npm run build
npm start
```

---

## 📬 API Endpoints

Base URL: `/api/products`

| Method | Endpoint       | Description         |
|--------|----------------|---------------------|
| POST   | `/`            | Create a product    |
| GET    | `/`            | Get all products    |
| PUT    | `/:id`         | Update a product    |
| DELETE | `/:id`         | Delete a product    |

---

## 🧠 Future Improvements

- Add user authentication (JWT)
- Product search and filter
- Pagination and sorting
- Image upload with Cloudinary

