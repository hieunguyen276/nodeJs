const User = require("../models/User");

class UserService {

    create = async (userData) => {
        try {
            // Xu ly cac nghiep vu lien quan
            // goi den tang model 
            const user = new User(userData);
            await user.save();
            return user;
        } catch (error) {
            throw error;
        }
    }


    getAll = async () => {
        try {
            // Xu ly cac nghiep vu lien quan
            // goi den tang model 
            const users = await User.find();
            return users;
        } catch (error) {
            throw error;
        }
    }


    update = async (id, data) => {
        try {
            // Xu ly cac nghiep vu lien quan
            // goi den tang model 
            const result = await User.updateOne({_id: id}, {username: data.username}, {email: data.email}, {phone: data.phone}, {age: data.age});
            return true;
        } catch (error) {
            throw error;
        }
    }


    delete = async (id) => {
        try {
            // Xu ly cac nghiep vu lien quan
            // goi den tang model 
            const user = await User.findById(id);
            await user.deleteOne();
            return true;
        } catch (error) {
            throw error;
        }
    }

}

module.exports = new UserService();