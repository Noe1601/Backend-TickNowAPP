import { Request, Response } from "express";
import Code from "../../domain/models/code-model";
import Worker from "../../domain/models/workers-model";


export const getWorkers = async(req: Request, res: Response) => {

    const workers = await Worker.findAll({
        where: {
            state: 1
        }
    });

    res.json({
        workers
    })
}

export const getWorker = async(req: Request, res: Response) => {

    const { id } = req.params;

    const worker = await Worker.findByPk(id);

    if(worker){
        res.json({
            worker
        })
    }else{
        res.status(404).json({
            ok: false,
            message: `Not exists worker with ${ id } number ID`
        })
    }

 
}

export const getWorkersByStablishment = async(req: Request, res: Response) => {

    try {
        
        const { id } = req.params;

        const workers = await Worker.findAll({ 
            where: {
                stablisment_id : id,
                state: 1
            }
        });

        res.json({
            workers
        })

    } catch (error) {
        res.status(500).json({
            ok: false,
            message: error
        })
    }


}

export const createWorker = async(req: Request, res: Response) => {
    
    const { body } = req;

    try {

        const emailExists = await Worker.findOne({
            where: {
                email: body.email
            }
        })

        if(emailExists){
            return res.status(400).json({
                message: `Already exists an worker with email ${ body.email }, try with another one`
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

        const worker = await Worker.create(body);

        res.json({
            worker
        });
        
    } catch (error) {
        res.status(500).json({
            message: 'An unexpected error ocurred.'
        });
        console.log(error);
    }

}

export const  updateWorker = async(req: Request, res: Response) => {

    const { body } = req;
    const { id } = req.params;

    try {

        const worker = await Worker.findByPk(id);

        if(!worker){
            return res.status(404).json({
                message: `Not exists an worker with this ID`
            });
        }

        await worker.update( body );
        
        res.json(worker);

    } catch (error) {
        res.status(500).json({
            message: 'An unexpected error ocurred.'
        })
    }
}

export const deleteWorker = async(req: Request, res: Response) => {

    const { id } = req.params;

    const worker = await Worker.findByPk(id);

    if(!worker){
        return res.status(404).json({
            message: `Not exists an user with this ID`
        });
    }

    await worker.update({ state: false });

    res.json({
        message: `Worker deleted`
    });

}


export const recuperatePassword = async(req: Request, res: Response) => {

    const { body } = req;

    try {

        const worker = await Worker.findOne({ 
            where: {
                email: body.email
            }
        });

        if(!worker){
            return res.status(404).json({
                message: `This email is invalid`
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

        await worker.update( body );
        
        res.json({
            ok: true,
            message: 'Password updated'
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'An unexpected error ocurred.'
        })
    }
}

export const activatedWorker = async(req: Request, res: Response) => {

    const { body } = req;
    const { id } = req.params;

    try {

        const worker = await Worker.findByPk(id);

        if(!worker){
            return res.status(404).json({
                message: `Not exists an worker with this ID`
            });
        }

        await worker.update( body );
        
        res.json({
            ok: true,
            message: 'Worker activated'
        });

    } catch (error) {
        res.status(500).json({
            message: 'An unexpected error ocurred.'
        })
    }
}