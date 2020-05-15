var path = require("path");
var express = require("express");
var reservationData = require("./data/reservationData");
var waitlistData = require("./data/waitlistData")
const PORT = process.env.PORT || 8118;

var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname + "public")));
app.use("/scripts", express.static(__dirname + '/public/javascripts'));

var customers= [];

app.listen(PORT,()=>{
    console.log("server started");    
})

app.get("/", (req,res)=> {
    res.sendFile(__dirname + "/public/home.html")
})

app.get("/makereservation", (req,res)=>{
    res.sendFile(__dirname + "/public/makeReservation.html")
})

app.get("/makereservationAlert", (req,res)=>{
    res.sendFile(__dirname + "/public/alert.html")
})

app.get("/reservations", (req,res)=>{
    res.sendFile(__dirname + "/public/reservations.html")
})

app.get("/api/reservations", (req,res)=> {
    res.json(reservationData);
})

app.get("/api/waitlist", (req,res)=> {
    res.json(waitlistData);
})

app.post("/api/reservations", (req, res)=>{
    if(reservationData.length<5){
        reservationData.push(req.body);
        res.json(true)
    }
    else{
        waitlistData.push(req.body);
        res.json(false)
    }

})
