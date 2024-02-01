const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

app.use(express.json())
app.use(cors())

app.listen(3002, ()=>{
    console.log('Server is running on port 3002')
})

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    database: 'coincause',
})

app.post('/register', (req, res) =>{
    const sentEmail = req.body.Email
    const sentUserName = req.body.UserName
    const sentPassword = req.body.Password
    const sentRegType = req.body.RegType

    const SQL = 'INSERT INTO users (email, username, password, type) VALUES (?,?,?,?)'
    const Values = [sentEmail, sentUserName, sentPassword, sentRegType]

    db.query(SQL, Values, (err, results)=>{
        if(err){
            res.send(err)
        }
        else{
            console.log('User inserted successfully!')
            res.send({message: 'User added!'})
        }
    })
})

app.post('/logindonor', (req, res)=>{
    const sentLoginUserName = req.body.LoginUserName
    const sentLoginPassword = req.body.LoginPassword
    const sentLoginRegType = req.body.LoginRegType

    const SQL = 'SELECT * FROM users WHERE username=? && password=? && type=?'
    const Values = [sentLoginUserName, sentLoginPassword, sentLoginRegType]

    db.query(SQL, Values, (err, results)=>{
        if(err){
            res.send(err)
        }
        if(results.length > 0){
            res.send(results)
        }
        else{
            console.log("Credentials don't match")
            res.send({message: "Credentials don't match"})
        }
    })
})

app.post('/loginorg', (req, res)=>{
    const sentLoginUserName = req.body.LoginUserName
    const sentLoginPassword = req.body.LoginPassword
    const sentLoginRegType = req.body.LoginRegType

    const SQL = 'SELECT * FROM users WHERE username=? && password=? && type=?'
    const Values = [sentLoginUserName, sentLoginPassword, sentLoginRegType]

    db.query(SQL, Values, (err, results)=>{
        if(err){
            res.send(err)
        }
        if(results.length > 0){
            res.send(results)
        }
        else{
            console.log("Credentials don't match")
            res.send({message: "Credentials don't match"})
        }
    })
})

// Route for creating a campaign
app.post('/organization', (req, res) => {
    const { title, description, image, targetAmount, amountCollected } = req.body;

    // Assuming you have a table named campaigns in your database
    const SQL = 'INSERT INTO campaigns (title, description, image, target_amount, amount_collected) VALUES (?, ?, ?, ?, ?)';
    const values = [title, description, image, targetAmount, amountCollected];

    db.query(SQL, values, (err, results) => {
        if (err) {
            console.error("Error creating campaign:", err);
            res.status(500).send({ error: "Error creating campaign" });
        } else {
            console.log("Campaign created successfully");
            res.status(200).send({ message: "Campaign created successfully" });
        }
    });
});

// Route for fetching organization data
app.get('/organizationcard', (req, res) => {
    // Assuming you have a table named organizations in your database
    const SQL = 'SELECT * FROM organizations';

    db.query(SQL, (err, results) => {
        if (err) {
            console.error("Error fetching organizations:", err);
            res.status(500).send({ error: "Error fetching organizations" });
        } else {
            console.log("Organizations fetched successfully");
            res.status(200).send(results);
        }
    });
});
