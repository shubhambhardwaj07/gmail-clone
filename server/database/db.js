import mongoose from "mongoose";

const Connection = () => {
  const DB_URI = `mongodb://shubham998845:Shubham12345@ac-zgjfl6l-shard-00-00.6r52zxh.mongodb.net:27017,ac-zgjfl6l-shard-00-01.6r52zxh.mongodb.net:27017,ac-zgjfl6l-shard-00-02.6r52zxh.mongodb.net:27017/?ssl=true&replicaSet=atlas-fczqwd-shard-0&authSource=admin&retryWrites=true&w=majority`;
  try {
    mongoose.connect(DB_URI, { useNewUrlParser: true });
    console.log("Db connection success");
  } catch (error) {
    console.log(`Error with db ${error.message}`);
  }
};

export default Connection;
