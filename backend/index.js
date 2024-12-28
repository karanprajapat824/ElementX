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
    myElements : [String],
    likes : [String]    
});


const contentSchema = new mongoose.Schema({
    html : String,
    css : String,
    category : String,
    username : String,
    likes : [String]
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


const verify = (req,res,next)=>{
    try{
        const token = req.headers.token;
        const json = jwt.verify(token,secret);
        req.user = json;
        next();
    }catch(error){
        res.status(404).json({message : "Invalid token"})
    }
}

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


app.post('/create',verify,(req,res)=>{
    try{
        const html = req.body.html;
        const css = req.body.css;
        const category = req.body.category;
        const username = req.body.username;
        const newContent = new Content({html,css,category,username});
        newContent.save();
        return res.status(200).json({message : "your creation saved successfully"});
    }catch(error)
    {
        res.json({message : "Internal server error"});
    }
    
});

app.post('/update',verify,async (req,res)=>{
    try{
        const html = req.body.html;
        const css = req.body.css;
        const _id = req.body._id;
        const existingContent = await Content.findOne({_id});
        if(!existingContent)
        {
            return res.status(404).json({message : "Element not found"});
        }
        existingContent.html = html;
        existingContent.css = css;
        existingContent.save();
        return res.status(200).json({message : "update successfully",existingContent});
    }catch(error)
    {
        return res.status(500).json({message : "Internal server error"});
    }
});

app.delete('/delete',verify,async (req,res)=>{
    try{
        const _id = req.body._id;
        const elementDeleted = await Content.deleteOne({_id});
        if(!elementDeleted) return res.status(404).json({message : "Element not found"});
        res.status(200).json({message : "Delete sussefully"});
    }catch(error)
    {
        return res.status(500),json({message : "Internal server error"});
    }
})

app.get('/getall', async (req, res) => {
    try {
      const pageSize = 15;
      const data = await Content.aggregate([
        { $match: { category: { $nin: ["Forms","Cards"] } } },
        { $sample: { size: pageSize } },
     ]);
      return res.status(200).json({ data });
    } catch (error) {
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  });


app.get('/getRandomElement',async (req,res)=>{
    try{
        const data = await Content.aggregate([
            { $match : { category: { $nin: ["Forms"] } } },
            { $sample : {size : 1 }},
        ]);
        return res.json({data});
    }catch(error)
    {
        return res.status(500).json({message  : "internal server error"});
    }
})

app.post('/getCode', async (req, res) => {
    try{
        const _id = req.body._id;
        const data = await Content.findOne({_id});
        if(data)
        {
            res.status(200).json({data});
        }
        else 
        {
            res.status(404).json({message : "Element not found"});
        }
    }catch(error)
    {
        return res.status(500).json({message  : "Internal server error"});
    }
  });

  app.post('/getElementByCategory',async (req,res)=>{
        try{
            const category = req.body.category;
            const data = await Content.aggregate([
                { $match : { category : category}},
                { $sample : 15}
            ]);
            if(data) return res.status(200).json({data});
            else return res.status(404).json({message : "data unavailable"});
        }catch(error)
        {
            return res.status(500).json({message : "internal server error"});
        }
  });

  

app.post('/like',verify,async (req,res)=>{
    try{
        const _id = req.body._id;
        const data = await Content.findOne({_id})
        if(!data) return res.json("Elment not found");
        
        if(data.likes.includes(req.user.username))
        {
            return res.json({message : "already liked"});
        }
        data.likes.push(req.user.username);
        await data.save();
        res.json({message : "like"});
    }catch(error)
    {
        return res.status(500).json({message : "internal server error"});
    }
});

app.post('/unlike',verify,async (req,res)=>{
    try{
        const _id = req.body._id;
        const data = await Content.findOne({_id});
        await data.likes.pull(req.user.username);
        await data.save();
        res.json({message : "unlike"});
    }catch(error)
    {
        return res.status(500).json({message : "internal server error"});
    }
});

app.listen(port,()=>{
    console.log(`Listening on port number ${port}`);
})