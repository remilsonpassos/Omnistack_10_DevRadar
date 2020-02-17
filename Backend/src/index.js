const express = require ('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');
const app = express();

mongoose.connect('mongodb://omnistack10:omnistack10@cluster0-shard-00-00-btg8e.mongodb.net:27017,cluster0-shard-00-01-btg8e.mongodb.net:27017,cluster0-shard-00-02-btg8e.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
//metodos HTTP: GET, POST, PUT DELETE

// tipos de parametros:
//Query Params: request.query(filtros, ordenação, paginação,...)
//Route Params: request.params(Identificar um recurso na alteração ou remoção)
//Body: request.body(Dados para criação ou alteração de um registro)
app.use(cors());
app.use(express.json());

app.use(routes);


app.listen(3333);