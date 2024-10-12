import mongoose, { connect } from "mongoose";

 let url = process.env.URI_MONGO

 console.log(url);
 
//  mongoose.connect(url)

//  .then(()=>console.log("base de datos conectada"))
//  .catch(error => console.log(error))

async function conectionDB(){
        try {
             await  mongoose.connect(process.env.URI_MONGO)
                console.log("Conectado a la Base de datos");
                
        } catch (error) {
               console.log(error);
                
        }
}

conectionDB()