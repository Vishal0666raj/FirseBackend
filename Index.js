require('dotenv').config()
const express = require('express')

const app = express();

const github1 = {
   
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      
}

app.get('/github',(req,res)=>{
    res.json(github1);
})

app.get('/',(req,res)=>{
    res.send("gand mara chutiye");
})

app.get('/twitter',(req,res)=>{
    res.send("https://www.instagram.com/v_i_s_h_a_l__0666/");
})

app.get('/galli',(req,res)=>{
    res.send("<h1>Aur bhosdike boor choddi sala</h1>")
})

const port = 4000;

app.listen(process.env.PORT,()=>{
    console.log(`everthing that kills me make me feel alive ${port}`)
})