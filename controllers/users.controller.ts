import { Request, Response } from "express";
import { sendEmail } from "../helpers/send-email";
import User from "../models/user-model";

export const getUsers = async(req: Request, res: Response) => {

    const users = await User.findAll({
        where: {
            state: 1
        }
    });

    res.json({
        users
    })
}

export const getUser = async(req: Request, res: Response) => {

    const { id } = req.params;

    const user = await User.findByPk(id);

    if(user){
        res.json({
            user
        })
    }else{
        res.status(404).json({
            ok: false,
            message: `Not exists user with ${ id } number ID`
        })
    }

 
}

export const createUser = async(req: Request, res: Response) => {
    
    const { body } = req;

    try {

        const emailExists = await User.findOne({
            where: {
                email: body.email
            }
        })

        if(emailExists){
            return res.status(400).json({
                message: `Already exists an user with email ${ body.email }, try with another one`
            });
        }

        const user = await User.create(body);

        await sendEmail(body.email,body.name);

        res.json({
            user,
        });
        
    } catch (error) {
        res.status(500).json({
            message: 'An unexpected error ocurred.'
        });
        console.log(error);
    }

}

export const  updateUser = async(req: Request, res: Response) => {

    const { body } = req;
    const { id } = req.params;

    try {

        const user = await User.findByPk(id);

        if(!user){
            return res.status(404).json({
                message: `Not exists an user with this ID`
            });
        }

        if(body.email != null){

            const emailExists = await User.findOne({
                where: {
                    email: body.email
                }
            });

            if(emailExists){
                return res.status(400).json({
                    message: `Already exists an user with email ${ body.email }, try with another one`
                });
            }

        }

        await user.update( body );
        
        res.json(user);

    } catch (error) {
        res.status(500).json({
            message: 'An unexpected error ocurred.'
        })
    }
}

export const deleteUser = async(req: Request, res: Response) => {

    const { id } = req.params;

    const user = await User.findByPk(id);

    if(!user){
        return res.status(404).json({
            message: `Not exists an user with this ID`
        });
    }

    await user.update({ state: false });

    res.json({
        message: `User deleted`
    });

}