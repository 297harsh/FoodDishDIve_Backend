import 'dotenv/config';
import mongoose from "mongoose";


export const  connectDB = async () =>{
    const dburl = process.env.DBURL
    // MONGODB_URL="mongodb+srv://harshpatel29731461:vTR61VHbmutwxZFZ@pghub.nnt4h.mongodb.net/?retryWrites=true&w=majority&appName=PGHub"


    // await mongoose.connect('mongodb+srv://tishapatel0618:KX5VKHoMqp4y6dch@cluster0.22jsz.mongodb.net/food-del').then(()=>console.log("DB Connected")).catch(()=>{console.log("hii")});
    await mongoose.connect('mongodb+srv://harshpatel29731461:vTR61VHbmutwxZFZ@pghub.nnt4h.mongodb.net/?retryWrites=true&w=majority&appName=PGHub').then(()=>console.log("DB Connected")).catch(()=>{console.log("hii")});
    // await mongoose.connect(dburl).then(()=>console.log("DB Connected")).catch(()=>{console.log("hii")});
   
}
