const expressFramework = require('express');
const corsPolicy = require('cors');
const server = expressFramework();
const serverPort = 3000;

const mongoDB = require("mongoose");

const financialPlanSchema = require("./models/budget_schema");

const databaseURL = process.env.DB_URI || 'mongodb://127.0.0.1:27017/my_finances';

const mongoOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

server.use(corsPolicy());
server.use(expressFramework.json());
server.use(expressFramework.urlencoded({ extended: true }));

// Middleware for error handling
server.use((error, req, response, next) => {
    console.error(error.stack);
    response.status(500).send('An error occurred!');
});

server.get('/budget', async (req, response) => {
    try {
        await mongoDB.connect(databaseURL, mongoOptions);
        console.log("Successfully connected to the database");
        
        const financialData = await financialPlanSchema.find({});
        response.send(financialData);
    } catch (err) {
        console.error(err);
        response.status(500).send(err.message);
    } finally {
        mongoDB.connection.close();
    }
});

server.post("/budget", async (req, response) => {
    try {
        await mongoDB.connect(databaseURL, mongoOptions);
        console.log("Database connection established for data insertion");

        const planData = new financialPlanSchema(req.body);
        await planData.save();

        response.send("Financial plan added successfully to the database");
    } catch (err) {
        console.error(err);
        response.status(500).send(err.message);
    } finally {
        mongoDB.connection.close();
    }
});

server.listen(serverPort, () => {
    console.log(`Finance app running at http://localhost:${serverPort}`);
});
