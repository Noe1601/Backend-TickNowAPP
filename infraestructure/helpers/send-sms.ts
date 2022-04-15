import twilio  from 'twilio';


export const sendMessages = async(phoneNumber: string, code: string) => {

    const client = twilio(process.env.SSI_AUTH,process.env.AUTH_SMS);

    await client.messages.create({
        to: phoneNumber,
        from: process.env.TWILIO_PHONE_NUMBER,
        body: `
            Your verification code is: ${ code }
        `
    });
    
}


