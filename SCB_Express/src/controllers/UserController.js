class UserController {
    // Các hàm xử lý
    get = (req, res, next) => {
        try {
            let userid = req.params.userid;
            console.log(userid);
            res.status(200).json({ msg: `Get userid: ${userid} `});
        } catch (error) {
            throw error;
        }
    };


    create = (req, res, next) => {
        try {
            const { username, password } = req.body;
            res.status(200).json({
                username,
                password
            })
        } catch (error) {
           throw error;
        }
    };


    update = (req, res, next) => {
        try {
            const { username, password } = req.body;
            res.status(200).json({ 
            username, 
            password
            })
        } catch (error) {
           throw error;
        }
    };


    delete = (req, res, next) => {
        try {
            let id = req.params.id;
            console.log(id);
            res.status(200).json({ msg:`delete user: ${id}` });
        } catch (error) {
           throw error;
        }
    };
}

module.exports = new UserController();