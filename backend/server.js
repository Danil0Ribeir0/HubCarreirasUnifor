
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')

const app = express()
const PORT = process.env.PORT || 3001
const MONGO_URI = process.env.MONGO_URI

mongoose.connect(MONGO_URI)
    .then(() => {
        console.log('Conexão com o MongoDB reconhecida')

        app.listen(PORT, () => {
            console.log(`Servidor Express rodando na porta ${PORT}`);
            console.log('Back-end Inicial PRONTO para CRUD.');
        });
    }).catch((error) => {
        console.error('Erro na conexão com o MongoDB:', error.message);
        process.exit(1);
    })