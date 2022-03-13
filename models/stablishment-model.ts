import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Stablishment = db.define('Stablishment', {
    name: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    phone_number: {
        type: DataTypes.STRING
    },
    direction: {
        type: DataTypes.STRING
    },
    image: {
        type: DataTypes.BLOB
    },
    user_role: {
        type: DataTypes.STRING
    },
    state: {
        type: DataTypes.BOOLEAN
    },
    password: {
        type: DataTypes.STRING
    },
    code_confirmation: {
        type: DataTypes.STRING
    },
    account_confirmed: {
        type: DataTypes.BOOLEAN
    }
});

export default Stablishment;
