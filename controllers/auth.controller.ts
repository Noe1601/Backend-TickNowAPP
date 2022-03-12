import bcrypt from 'bcryptjs';
import { Request, Response } from 'express';
import { generateJWT } from '../helpers/jwt';
import User from '../models/user-model';

export const login = async(req: Request, res: Response) => {

    const { body } = req;

    try {

        const userAuthenticate = await User.findOne({
            where: {
                email: body.email,
                password: body.password
            }
        });

        if(!userAuthenticate){
            return res.status(404).json({
                ok: false,
                message: 'Error in authentication, try again'
            })
        }

        const token = await generateJWT(res.get('id'));

        res.json({
            userAuthenticate,
            token
        })

        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Unexpected error'
        })
    }
}