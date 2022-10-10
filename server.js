const express=require("express")
const ejs=require("ejs")
const path=require("path")
const expressLayouts=require("express-ejs-layouts")
const app=express();

app.use(express.static('Public'))

app.get("/",(req,res)=>{res.render('home')});



// set templet engine
app.use(expressLayouts);
app.set('views',path.join(__dirname,'resources/views'));
app.set('view engine','ejs');



const PORT =process.env.PORT||3000;

app.listen(PORT,()=>{
    console.log(`listing Port on ${PORT}`)
});
