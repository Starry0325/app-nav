const express = require("express");
const path = require("path");
const app = express();

// Configuração do EJS como view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Rota principal
const indexRouter = require("./routes/index");
app.use("/", indexRouter);

// Rotas para categorias e produtos
const categoriaRouter = require("./routes/categorias");

app.use("/categorias", categoriaRouter);

// Rotas para quem somos
const quemRouter = require("./routes/quem");

app.use("/quem", quemRouter);

// Iniciar o servidor e sincronizar com o banco de dados

app.listen(3000, () => {
  console.log("Servidor em execução na porta 3000");
});

app.get('/', (req, res) => {
  res.send(`
      <h1>Bem-vindo ao meu app!</h1>
      <img src="../img/cadastro.png" alt="Cadastro">
  `);
});

