import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Worker = db.define('Worker', {
    name: {
        type: DataTypes.STRING
    },
    lastname: {
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
    face_id: {
        type: DataTypes.BOOLEAN
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
    },
    stablisment_id: {
        type: DataTypes.INTEGER
    }
});

export default Worker;
