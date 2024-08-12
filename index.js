const express = require("express");
const users = require("./MOCK_DATA.json");
const app = express();

const PORT = 8000;

// routes

app.get("/api/users",(req, res)=>{
    return res.json(users)
});


// daynmic path parameters

app.get("/api/users/:id", (req, res)=>{
    const id =Number(req.params.id);

    const user = users.find((user)=> user.id == id);
    return res.json(user);
    });

    // post create user
    app.post("/api/users", (req, res)=>{

        return res.json({status: "pending"});
    })



app.listen(PORT,()=> console.log("Server Started"));


