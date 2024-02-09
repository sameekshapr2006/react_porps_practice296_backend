import express, { json } from 'express';
import { createConnection } from 'mysql';
import cors from 'cors';

const app = express();

app.use(json());
app.use(cors());
const db =createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'school'
})

app.get('/contacts', (req, res) => {
    
    db.query("SELECT * FROM contact",[], (err, data) => {
        if(err){
            console.error(err);
            return res.json("error"); 
        } 
        if(data.length > 0) {
            console.log(data);
            return res.json(data);
        } else {
            return res.json("No record");
        }
})
})
app.listen(3001, ()=>{
    console.log('listening on port 3001');
})

