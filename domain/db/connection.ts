import { Sequelize } from 'sequelize';

const db = new Sequelize('TickNowAPP','root','noemedina16', {
    host: 'localhost',
    dialect: 'mysql'
});


export default db;