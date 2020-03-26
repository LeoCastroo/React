const cors = require('cors');
const express = require('express');
const routes = require('./routes')

const app = express();
/* Caso coloque em produção
app.use(cors({
    origin: "http://meuapp.com"
}));*/
app.use(cors());
app.use(express.json());
app.use(routes);

/**
 * Rota / Recurso
 * 
 */

 /**
  *Métodos HTTP:  
  GET: Buscar ou listar uma informação no backend
  POST: Criar uma informação no backend 
  PUT: Alterar uma informaçaõ no backend
  DELETE: Deletar uma informação no backend
  * 
  */

  /**
   * Tipos de parâmetros
   * 
   * Query Params: Paramêtros nomeados enviados na rota após "?" (Filtros, páginação, parâmetros)
   * Route Params: Paramêtros utilizados para identificar recursos
   * Request Body: Corpo da requisição, utilizado para criar ou alterar dados
   * 
   */

   /*
   * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
   * NoSQL: MongoDB, CouchDB, etc
   *  */

   /*
    * Driver: Select * from USERS
    * Query Builder: table('users').select('*').where();
   */


app.listen(3333);