import { Request, Response } from "express";
import Code from "../../domain/models/code-model";
import Stablishment from "../../domain/models/stablishment-model";

export const getStablisments = async(req: Request, res: Response) => {

    const stablisments = await Stablishment.findAll({
        where: {
            state: 1
        }
    });

    res.json({
        stablisments
    })
}

export const getStablishment = async(req: Request, res: Response) => {

    const { id } = req.params;

    const stablishment = await Stablishment.findByPk(id);

    if(stablishment){
        res.json({
            stablishment
        })
    }else{
        res.status(404).json({
            ok: false,
            message: `Not exists stablishment with ${ id } number ID`
        })
    }

 
}

export const createStablishment = async(req: Request, res: Response) => {
    
    const { body } = req;

    try {

        const emailExists = await Stablishment.findOne({
            where: {
                email: body.email
            }
        })

        if(emailExists){
            return res.status(400).json({
                message: `Already exists an stablishment with email ${ body.email }, try with another one`
            });
        }


        if(body.code_confirmation == null){
            return res.status(400).json({
                message: 'The token verification is required'
            })
        }

        const verifyToken = await Code.findOne({
            where: {
                code: body.code_confirmation
            }
        })

        if(!verifyToken){
            return res.status(404).json({
                ok: false,
                message: 'This token is invalid, try again.'
            })
        }

        const stablisment = await Stablishment.create(body);

        res.json({
            stablisment,
        });
        
    } catch (error) {
        res.status(500).json({
            message: 'An unexpected error ocurred.'
        });
        console.log(error);
    }

}

export const  updateStablishment = async(req: Request, res: Response) => {

    const { body } = req;
    const { id } = req.params;

    try {

        const stablishment = await Stablishment.findByPk(id);

        if(!stablishment){
            return res.status(404).json({
                message: `Not exists an user with this ID`
            });
        }

        await stablishment.update( body );
        
        res.json(stablishment);

    } catch (error) {
        res.status(500).json({
            message: 'An unexpected error ocurred.'
        })
    }
}

export const deleteStableshiment = async(req: Request, res: Response) => {

    const { id } = req.params;

    const stablishment = await Stablishment.findByPk(id);

    if(!stablishment){
        return res.status(404).json({
            message: `Not exists an stablishment with this ID`
        });
    }

    await stablishment.update({ state: false });

    res.json({
        message: `Stablishment deleted`
    });

}


export const  activatedStablishment = async(req: Request, res: Response) => {

    const { body } = req;
    const { id } = req.params;

    try {

        const stablishment = await Stablishment.findByPk(id);

        if(!stablishment){
            return res.status(404).json({
                message: `Not exists an user with this ID`
            });
        }

        await stablishment.update( body );
        
        res.json({
            ok: true,
            message: 'Stablishment activated'
        });

    } catch (error) {
        res.status(500).json({
            message: 'An unexpected error ocurred.'
        })
    }
}