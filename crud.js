const mongoDBClient = require('mongodb').MongoClient
let url = 'mongodb://127.0.0.1:27017/mongodb_demo';
mongoDBClient.connect(url,(operationError,dbHandler)=>
{
    if(operationError){
        console.log("An error has occured during the connection");
    }
    else{
        // Insert operation
        console.log("connected to database")
         let data={id:10,name:"added a new name from mongoDB Native Driver"};
         
//         dbHandler.db('mongodb_demo').collection('names').insertOne(data,(operr,opresult)=>{
// if(operr){
//     console.log("unable to insert data into your collection ")
// }
// else{
//     console.log("Inserted Successfully")
//     // dbHandler.close()
// }
//         })
        // list operation
        // dbHandler.close()
        // setTimeout
        // dbHandler.db('mongodb_demo').collection('names').find().toArray((operr,opresult) => {
        //     if(operr)
        //     {
        //         console.log(operr)

        //     }
        //     else{
        //         for(var i=0;i<opresult.length;i++){
        //             console.log(opresult[i])
        //         }
        //         dbHandler.close()
        //     }
        // });
        // fetch operation
        // dbHandler.db('mongodb_demo').collection('names').findOne({id:1},(operr,opresult) => {
        //     if(operr)
        //     {
        //         console.log(operr)

        //     }
        //     else{
        //      console.log(opresult)
        //     }
        // }) 
        // //update operation
        // let newData={$set:{id:10,name:"added a new name from mongoDB Native Driver"}};
        // dbHandler.db('mongodb_demo').collection('names').updateOne({id:1},newData,(operr,opresult) => {
        //     if(operr)
        //     {
        //         console.log("Unable to insert data into your collection")

        //     }
        //     else{
        //      console.log("updated Successfully")
        //      dbHandler.close()
        //     }
        // }) 
        // Delete Operation
        // dbHandler.db('mongodb_demo').collection('names').deleteOne({id:10},(operr,opresult) => {
        //         if(operr)
        //          {
        //              console.log("Unable to delete data from your collection")
    
        //          }
        //          else{
        //             // console.log(opresult)
        //           console.log("deleted Successfully")
        //           dbHandler.close()
        //         }
        //      }) 
        // Bulk Delete
        dbHandler.db('mongodb_demo').collection('names').deleteMany({id:10},(operr,opresult) => {
            if(operr)
             {
                 console.log("Unable to delete data from your collection")

             }
             else{
                // console.log(opresult)
              console.log("deleted Successfully")
              dbHandler.close()
            }
         }) 
    }
});