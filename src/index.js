//require('dotenv').config({path:'./env'})
import dotenv from "dotenv"
import connectDB from "./db/index.js";
import { app } from "./app.js";
dotenv.config({
  path:'./env'
})
connectDB()
.then(()=>
{
  app.listen(process.env.PORT||8000,()=>
  {
    console.log(`app is listening on port ${process.env.PORT}`);
  })
})
.catch((err)=>
{
  console.log("mongo err",err);
});

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
