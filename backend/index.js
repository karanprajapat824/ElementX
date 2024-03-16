const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 4040;
const secret = "634659";

mongoose.connect('mongodb+srv://karanprajapat824:karanprajapat824@cluster0.xescpid.mongodb.net/?retryWrites=true&w=majority',{
    useNewUrlParser : true,
    useUnifiedTopology : true
});

const userSchema = new mongoose.Schema({
    username : String,
    gmail : String,
    password : String,
});


const contentSchema = new mongoose.Schema({
    html : String,
    css : String,
    category : String,
    username : String,
    likes : [
        {
            username : String
        }
    ]
});

const reviewSchema = new mongoose.Schema({
    html : String,
    css : String,
    category : String,
    username : String,
});

const Content = mongoose.model('content',contentSchema);
const User = mongoose.model('websiteUser',userSchema);
const Review = mongoose.model('review',reviewSchema);


app.use(bodyParser.json());
app.use(cors());


app.post('/register',async (req,res) => {
    try
    {
        const username = req.body.username;
        const gmail = req.body.gmail;
        const password = req.body.password;
        const existingUser = await User.findOne({ $or: [{ username }, { gmail }] });
        if(existingUser) 
        {
            if (existingUser) {
                if (existingUser.username === username) {
                    return res.json({ message: "Username is already taken" });
                } else {
                    return res.json({ message: "Gmail is already registered" });
                }
            }
        }
        const user = {username,password,gmail};
        const newUser = new User(user);
        newUser.save();
        const token = jwt.sign(user,secret);
        res.status(200).json({
            message : "User register successfully",
        token
    });
    }catch(error)
    {
        res.status(500).json({message : "internal server error",error})
    }
    
} )

app.post('/login',async (req,res) => {
    try
    {
        const username = req.body.username;
        const password = req.body.password;
        let existingUser = await User.findOne({username});
        if(!existingUser)
        {
            return res.status(404).json({message : "User not found"});
        }
        if(existingUser.password === password)
        {
            const user = {username,password,gmail : existingUser.gmail};
            const token = jwt.sign(user,secret);
            return res.status(200).json({message : "login successfully ",token});
        }
        else 
        {
            return res.json({message : "Invalid password"});
        }
    }
    catch(error)
    {
        res.status(500).json({message : "internal server error",error})
    }
});

app.post('/create',(request,response)=>{
    const html = request.body.html;
    const css = request.body.css;
    const category = request.body.category;
    const username = request.body.username;
    const newContent = new Content({html,css,category,username});
    newContent.save();
    return response.status(200).json({message : "your creation saved successfully",
    html,css,category,username});
});

app.get('/getall', async (request, response) => {
    try {
      const pageSize = 15;
  
      const data = await Content.aggregate([
        { $match: { category: { $nin: ["Forms", "Cards"] } } },
        { $sample: { size: pageSize } },
     ]);

      return response.status(200).json({ data });
    } catch (error) {
      console.error(error);
      return response.status(500).json({ message: 'Internal Server Error' });
    }
  });


app.get('/getElement',async (request,response)=>{
    const data = await Content.aggregate([
        { $match : { category: { $nin: ["Forms"] } } },
        { $sample : {size : 1}},
    ]);
    response.json({data});
})

app.post('/getElementById', async (request, response) => {
    const _id = request.body._id;
    const data = await Content.find({_id : _id});
    if(data)
    {
        response.status(200).json({data});
    }
    else 
    {
        response.json({message : "Element not found"});
    }
    
  });

app.post('/likesControl', async (req,res)=>{
    const username = req.body.username;
    const _id = req.body._id;
    const data = await Content.findOne({_id});
    if(data)
    {
        let likeIt = data.likes.some(like => like.username === username);
        if(!likeIt)
        {
            data.likes.push({username});
            data.save();
            likeIt = true;
        }
        const likeCount = data.likes.length;
        res.json({likeCount,likeIt});
    }
    else 
    {
        res.json({message : "error"});
    }
});

app.listen(port,()=>{
    console.log(`Listening on port number ${port}`);
})