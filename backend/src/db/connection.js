//const mongoose = require("mongoose");
 const { connect , disconnect} = require ("mongoose");

async function connecttodatabase(){
    try {
      const mongoUrl = process.env.MONGODB_URL;
      
        await connect(mongoUrl);
        console.log("connected")
    } catch (error) {
      console.log(error);
      throw new Error("not connected to mongodb")   
    }
}

async function disconnecttodatabase(){
    try {
        await disconnect();
        console.log("disconnected")
    } catch (error) {
      console.log(error);
      throw new Error("not able to  disconnected to mongodb")   
    }
}

module.exports={ connecttodatabase , disconnecttodatabase};