import nodemailer from 'nodemailer';

export const sendEmail = async(email: string, name: string) => {

let testAccount = await nodemailer.createTestAccount();

let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, 
    auth: {
      user: "noeeduardomedinahenriquez@gmail.com", 
      pass: "evhuqsxkvmptzhnd",
    },
  });

  await transporter.sendMail({
    from: 'noeeduardomedinahenriquez@gmail.com',
    to: `${ email }`,
    subject: `Welcome ✔`,
    html: `
        <h3>
        Hello ${ name }, welcome to tickNowAPP family.
        Thanks for using the application, I hope you feel comfortable. ✔ 
        </h3>
    `
  });


}
