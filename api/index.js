const express = require("express")
const mongoose = require("mongoose")
const app = express();
// const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");
// dotenv.config();
const multer = require ("multer");
const path = require("path");
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "/images")))
// console.log("monny moon");
// app.use("/moon",(seq,res) => {
// 	console.log(" hey me is u but me is the moon ")
// })
// mongoose
// .connect('mongodb://localhost:27017/test', 
// { useNewUrlParser: true, 
//   useUnifiedTopology: true});
mongoose
  .connect("mongodb://localhost/blog", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useFindAndModify:true
  })
  .then(() => console.log("Connected to MongoDb ..."))
  .catch((error) => console.log("could not connect to database" + error));
 const storage = multer.diskStorage({
   destination:(req,file,cb) => {
     cb(null,"images")
   },filename:(req,file,cb) =>{
     cb(null, req.body.name);
   },
 });
 const upload = multer({storage:storage});
 app.post("/api/upload", upload.single("file"),(req,res)=>{
   res.status(200).json("file is uploaded");
 });
app.use("/api/auth", authRoute); 
app.use("/api/users", userRoute); 
app.use("/api/posts", postRoute); 
app.use("/api/categories", categoryRoute); 
app.listen("6000", () =>{
	console.log("backend babyyyy")
});