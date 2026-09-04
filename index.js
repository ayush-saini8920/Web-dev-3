const express = require ('express');
const app = express();

const packages = require("./tour");

app.get(`/`,(req,res)=>{
    res.send("hello world");
});

app.get("/packages",(req,res)=>{
    res.json(packages);
});

app.get("/packages/:id",(req,res)=>{
    const packageId = parseInt(req.params.id);
    const selectedPackage = packages.find(item => item.id ===
    packageId);
    res.json(selectedPackage);
    });

app.listen(3000,()=>{
    console.log("server is running on 3000");
});