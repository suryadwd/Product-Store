import express, { json } from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import path from "path"
import productRoutes from "./routes/product.route.js"

const app = express();

dotenv.config();
const __dirname = path.resolve()
app.use(express.json())
app.use("/api/products",productRoutes)

app.use(cors({
    origin: "*",  
  }));
  

const PORT = process.env.PORT 

if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, "/frontend/dist")))

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"))
})

}

app.listen(5000, ()=> {
    connectDB()
    console.log("server is live at http://localhost:" + PORT);
    
})



//server.js


