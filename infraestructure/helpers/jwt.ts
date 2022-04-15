import jwt from 'jsonwebtoken'

export const generateJWT = (uid: string) => {

    return new Promise((resolve, reject) => {
        const payload = {
            uid
        }

        jwt.sign(payload, 'NEMH101620182908927319DCKEJjeebdgedgh', {
            expiresIn: '4h'
        }, (err, token) => {
            if (err) {
                console.log(err);
                reject('JWT Failed')
            } else {
                resolve(token);
            }
        });
    });

}