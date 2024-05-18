const express = require("express");
const cors = require('cors');
const mongoose = require("mongoose");
const port = 3001;
const routes = require("./routes");

main().catch((err) => console.error(err));

async function main() {
  try {
    await mongoose.connect("mongodb://mongo:27017/todos", {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Connected to MongoDB");
    
    const app = express();
    app.use(cors());
    app.use(express.json());
    app.use("/api", routes);

    app.listen(port, () => {
      console.log(`Server is listening on port: ${port}`);
    });
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit the process if connection fails
  }
}
