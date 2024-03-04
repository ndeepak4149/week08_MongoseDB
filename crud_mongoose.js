const mongoose=require("mongoose")

const namesModel = require("./models/names_schema")

let url = 'mongodb://127.0.0.1:27017/mongodb_demo';

    mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log("connected to the database");
            // list all entries
            // nameModel.find({})
            //     .then((data) => {
            //         console.log(data);
            //          mongoose.connection.close();

            //     })
            //     .catch((connectionError) => {
            //         console.log(connectionError)
            //     })
            // Fetch one
            // nameModel.find({id:2})
            //     .then((data) => {
            //         console.log(data);
            //          mongoose.connection.close();

            //     })
            //     .catch((connectionError) => {
            //         console.log(connectionError)
            //     })
            // nameModel.findById("652a0e951ebe3fdb2c03a5c2")
            // .then((data) => {
            //     console.log(data);
            //      mongoose.connection.close();

            // })
            // .catch((connectionError) => {
            //     console.log(connectionError)
            // })
            // let newData= new namesModel({id:10,name:"Testing mongoose"});
            // namesModel.insertMany(newData)
            // .then((data) => {
            //     console.log(data);
            //      mongoose.connection.close();

            // })
            // .catch((connectionError) => {
            //     console.log(connectionError)
            // })
            // let newData= {$set:{id:11,name:"Updated Content"}};;
            // namesModel.updateOne({id:10},newData)
            // .then((data) => {
            //     console.log(data);
            //      mongoose.connection.close();

            // })
            // .catch((connectionError) => {
            //     console.log(connectionError)
            // })
        
           namesModel.findOneAndRemove({id:11})
            .then((data) => {
                console.log(data);
                 mongoose.connection.close();

            })
            .catch((connectionError) => {
                console.log(connectionError)
            })
        
        })
        .catch((connectionError) => {
            console.log(connectionError);
        })


