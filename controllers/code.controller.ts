import { Request, Response } from "express";
import { sendEmail } from "../helpers/send-email";
import { sendMessages } from "../helpers/send-sms";
import Code from "../models/code-model";

export const createCodeVerification = async(req: Request, res: Response) => {

    const { body } = req;

    try {

        const token = Math.floor(100000 + Math.random() * 900000)

        const tokenObject = {
            code: token
        }

        const code = await Code.create(tokenObject);

        if(body.email){
            await sendEmail(body.email,token.toString());
        }

        if(body.phone_number){
            await sendMessages(body.phone_number,token.toString());
        }


        res.json({
            code
        });
        
    } catch (error) {
        res.status(500).json({
            message: 'An unexpected error ocurred.'
        });
        console.log(error);
    }
    
}