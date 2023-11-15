const mongoose = require("mongoose");

// Połączenie z bazą danych
mongoose.connect("mongodb://localhost:27017/mojabaza", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Model Mongoose (jeśli potrzebujesz)
const exampleSchema = new mongoose.Schema({
  // Definicja schematu
});

const ExampleModel = mongoose.model("Example", exampleSchema);

module.exports = {
  ExampleModel,
};
