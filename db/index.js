// const Sequelize = require('sequelize');
// const connection = new Sequelize('d6vgcnti2vi9sf', 'pahugdzzljqqma', 'b3b5950c7acf77a6cd2b92f5886c063407c73b14ddef06f0d11571a080c7987e', {
//     host: 'ec2-54-80-184-43.compute-1.amazonaws.com',
//     dialect: 'postgres',
//     dialectOptions: {
//         ssl: true
//     }
// })

// module.exports = connection;

const Sequelize = require('sequelize');
const connection = new Sequelize('dj1kmj768d8n2', 'lposuliwagsjcl', '0bb3585ff672f01257db02b78fc6d5ac18e87feeb57ce9dbdad34419b9111a74', {
    host: 'ec2-3-219-111-26.compute-1.amazonaws.com',
    dialect: 'postgres',
    dialectOptions: {
        ssl: true
    }
})

module.exports = connection;