import express from 'express';
import { addFood, listFood, removeFood } from '../controllers/foodController.js';
// import {upload}  from '../middleware/multermid';

import multer from 'multer';
const foodRouter = express.Router();

//Image Storage Engine (Saving Image to uploads folder & rename it)

// const storage = multer.diskStorage({
//     destination: 'uploads',
//     filename: (req, file, cb) => {
//         return cb(null,`${Date.now()}${file.originalname}`);
//     }
// })

// const upload = multer({ storage: storage})

// const multer = require("multer");
import { CloudinaryStorage } from "multer-storage-cloudinary";

import cloudinary from '../config/cloudinary.js';



const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "PGHUb_images", // specify the folder name where you want to store images
    allowed_formats: ["jpeg", "png", "jpg"],
  },
});

const upload = multer({ storage });

foodRouter.get("/list",listFood);
// foodRouter.post("/add",upload.single('image'),addFood);
foodRouter.post("/add",upload.array('image', 10),addFood);
foodRouter.post("/remove",removeFood);

export default foodRouter;