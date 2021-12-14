import mongoose from "mongoose";

export async function post({
   username,
   password
}) {
   const data = {
      username,
      password
   };
   const uri =
      'mongodb+srv://wajeehaMalik452:Seamzo2021@cluster0.yatvu.mongodb.net/Seamzoo?retryWrites=true&w=majority';
   mongoose
      .connect(uri, {
         useNewUrlParser: true,
         useUnifiedTopology: true,
      })
      .then((result) => console.log('connected to db'))
      .catch((err) => console.log(err));

   return;
}