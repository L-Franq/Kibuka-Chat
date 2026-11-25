require("dotenv").config();
const app = require("./app");
const PORT = process.env.PORT || 3000;
const HOST = "0.0.0.0";

app.listen(PORT, HOST, (error) => {
  error
    ? console.log("Falha ao iniciar: ", error)
    : console.log(`Kibuka Chat running on http://localhost:${PORT}`);
});
