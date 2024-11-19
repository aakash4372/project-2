const express = require('express');
const router = express.Router();
const{User}=require('../Modules/usermodules')
const { v4: uuidv4 } = require('uuid');

const AdminLogin ={
    email:"admin123@outlook.com",
    password:"library@123"
}


router.post('/register', async (req, res) => {
    const { name, email, mobile, department, address, city, password, gender, birthday, role } = req.body;
    try {
        if (role === 'admin') {
            res.status(400).json({ message: 'Cannot register as admin' });
        } else {
            const NewUserData = new User({
                userId: uuidv4(),
                name, email, mobile, department, address, city, password, gender, birthday,
                booksTaken: [] 
            });
            await NewUserData.save();
            res.status(200).json({ message: 'User Registered Successfully' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Register failed" });
    }
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        if (email === AdminLogin.email && password === AdminLogin.password) {
            res.json({ message: 'Admin login successful', role: 'admin', name: 'Admin' });
        } else {
            const user = await User.findOne({ email, password });
            if (user) {
                res.status(200).json({ message: 'User Login Successfully', role: 'user', name: user.name, userId: user.userId, booksTaken: user.booksTaken });
            } else {
                res.status(400).json({ message: 'Invalid User' });
            }
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Login failed" });
    }
});

router.get('/all', async (req,res)=>{
    const getusers = await User.find();
    res.status(200).json({message:"All users",getusers});
})


module.exports = router;

