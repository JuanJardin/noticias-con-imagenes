import mongoose from "mongoose";

(async () => {
  const db = await mongoose.connect("mongodb://localhost/noticia-con-imagenes", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex:true,
  });
  console.log('Connected to:', db.connection.name)
})();
