//require('dotenv').config({path:'./env'})
import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
  path:'./env'
})
connectDB();

/*
const app = express();

(async()=>{
  try{
    await mongoose.connect(`${process.env.MONGODB_URI}`)
    app.on("error",(err)=>
    {
      console.log("application cannot able listen");
      throw err;
    })
    app.listen(process.env.PORT,()=>
    {
      console.log(`App is listening on port ${process.env.PORT}`)
    })
  }
  catch(err)
  {
    console.error("ERRO:",err)
    throw err
  }
})
*/
