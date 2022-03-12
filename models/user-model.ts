import { DataTypes } from 'sequelize';
import db from '../db/connection';

const User = db.define('User', {
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
});

export default User;
