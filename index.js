var express = require("express");
var app = express();
const cors = require('cors');
const axios = require('axios');
app.use(express.json())
app.use(express.urlencoded({extended: false}))


app.use((req,res, next)=>{
    res.setHeader('Access-Control-Allow-Origin',"http://localhost:3000");
    res.setHeader('Access-Control-Allow-Headers',"*");
    res.header('Access-Control-Allow-Credentials', true);
    next();
});

const getData = function(name){
    return new Promise(function(resolve, reject){
        axios.get('https://api.freightera.com/api/geolocation/'+name).then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err)
        })
    })
}
app.post("/findCity" , async function (req, res, next){
    try{
        if(req.body.name == undefined || req.body.name == ''){
            return res.json({'status':false, 'statusCode' : 200, 'message': 'zipcode/city name is required'});
        }else{
            let city_data = await getData(req.body.name);
            res.json({'status':true, 'statusCode' : 200, 'message': 'success', 'data': city_data});
        }
    }catch(error){
        res.json({'status':false, 'statusCode' : 500, 'message': 'Something went wron'});
    }
});

app.listen(3001, () => {
 console.log("Server running on port 3001");
});