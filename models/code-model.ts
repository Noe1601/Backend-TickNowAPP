import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Code = db.define('Code', {
    code: {
        type: DataTypes.STRING
    }
});

export default Code;
