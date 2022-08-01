const admins = require('../../models/admins')
const bcrypt = require("bcryptjs")

/*admin register */
const register = async(req, res, next) => {
    try {
        const {
            name,
            email,
            password,
            phone,
        }= req.body

        const account = await admins.findOne({email})
        if(account){
            res.status(401).json({
                status: true,
                message: "Account Already Exists..!"
            })
        }
        /* Hash password */
        const hashPassword = await bcrypt.hash(password, 10)
         
        const newAdmin = new admins({
            name,
            email,
            password:hashPassword,
            phone
        })

        await newAdmin.save()

        res.status(201).json({
            status: true,
            message: "New Admin Created Successfully Done....!"
        })
        
    } catch (error) {
        console.log(error);
        next(error)
    } 
}

/*admin list */
const adminList = async(req, res, next) => {
    try {
        const results = await admins.find()
        res.status(201).json({
            status: true,
            data: results
        })
    } catch (error) {
        console.log(error);
        next()
    }
}

/*admin login*/
const Login = (req, res, next)=>{
    
}




module.exports = {
    register,
    adminList,
    Login,
    
}