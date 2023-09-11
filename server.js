const express = require ('express');
const app=express();
const cors=require('cors');
const PORT=8000;

app.use(cors());
app.use(express.static('public'));


const student={
    'saba data':{
        'name':'Saba Azeem',
        'age':24,
        'class':14
    },
    'sana data':{
        'name':'Sana Azeem',
        'age':26,
        'class':16
    },
    'sara data':{
        'name':'Sara Azeem',
        'age':28,
        'class':18
    },
    'unknown':{
        'name':'unknown',
        'age':'unknown',
        'class':'unknown',
    }
}

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html');
});

app.get('/css/style.css',(req,res)=>{
    res.sendFile(__dirname+'/css/style.css');
});

app.get('/js/script.js',(req,res)=>{
    res.sendFile(__dirname+'/js/script.js');
})

app.get('/api/:name',(req,res)=>{
    const stuName=req.params.name.toLocaleLowerCase();
    if(student[stuName]){
        res.json(student[stuName]);
    }else{
        res.json(student['unknown']);
    }
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
});