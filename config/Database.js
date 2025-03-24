import {Sequelize} from "sequelize";

const db = new Sequelize('tcc_note','admin','',{
    host: 'localhost',
    dialect: 'mysql'
});

export default db;
