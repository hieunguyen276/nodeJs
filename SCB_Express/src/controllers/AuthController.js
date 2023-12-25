// src/controllers/AuthController

const jwt = require('jsonwebtoken');
class AuthController {

    login = async (req, res, next) =>{
        try {
            const {username, password} = req.body;

            // // check username and password
            // => Tồn tại user đó => thực hiện việc tạo ra token
            // => Không tồn tại user đó => trả về lỗi user not found

            // // if true => create jwt token
            const token = jwt.sign({ username }, process.env.SECRET_KEY_JWT);

            res.status(200).json({
                token: token
            })

        } catch (error) {
            next(error)
        }
    }
    
}

module.exports = new AuthController();