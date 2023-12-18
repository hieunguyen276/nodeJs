const UserService = require("../services/UserService");


class UserController {
    // Các hàm xử lý


    create = async (req, res, next) => {
        try {
            const { username, email, phone, age } = req.body;
            // goi den tang service

            let data = {
                username, email, phone, age
            }
            
            const user = await UserService.create(data);

            res.status(200).json({
                user
            });
            

        } catch (error) {
           throw error;
        }
    };


    getAll = async (req, res, next) => {
        try {

            const users = await UserService.getAll();

            res.status(200).json({
                users
            });
        } catch (error) {
            throw error;
        }
    };


    
    update = async (req, res, next) => {
        try {
            const { username, email, phone, age } = req.body;
            // goi den tang service

            const { id } = req.params;

            let data = {
                username, email, phone, age
            }
            
            const result = await UserService.update(id, data);
            if (result) {
                res.status(200).json({
                    msg: 'Updated'
                });              
            } else {
                throw new error('Error updating');
            }

        } catch (error) {
           throw error;
        }
    };


    delete = async (req, res, next) => {
        try {
            const { id } = req.params;
            

            const result = await UserService.delete(id);
            if (result) {
                res.status(200).json({
                    msg: 'Deleted'
                });              
            } else {
                throw new error('Error deleting');
            }
        } catch (error) {
           throw error;
        }
    };
}

module.exports = new UserController();