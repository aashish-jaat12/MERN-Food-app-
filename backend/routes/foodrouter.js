import express from "express"
import multer from "multer"
import { addfood, foodlist, removefood } from "../controllers/foodcontroller.js";



const foodrouter = express.Router()


//image Storage engine

const storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, cb) => {

        return cb(null, `${Date.now()}${file.originalname}`)
    }
})

const upload = multer({ storage: storage })



foodrouter.post("/add", upload.single("image"), addfood)
foodrouter.get("/foodlist",  foodlist)
foodrouter.post("/removefood",  removefood)


export default foodrouter;
