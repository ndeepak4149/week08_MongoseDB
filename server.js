const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

const mongoose = require("mongoose");

const budgetSchema = require("./models/budget_schema");


const url = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/personal_budget';


const connectionOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

app.get('/budget', async (req, res) => {
    try {
        const connection = await mongoose.connect(url, connectionOptions);
        console.log("Connected to the database");
        
        const data = await budgetSchema.find({});
        res.send(data);
    } catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    } finally {
        mongoose.connection.close();
    }
});

app.post("/insertBudget", async (req, res) => {
    try {
        const connection = await mongoose.connect(url, connectionOptions);
        console.log("Connected to the database to insert data");

        const newData = new budgetSchema(req.body);
        await newData.save();

        res.send("Data inserted into the database successfully");
    } catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    } finally {
        mongoose.connection.close();
    }
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
