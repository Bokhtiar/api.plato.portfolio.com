const admins = require('../../models/admins')
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")

/*admin register */
const register = async (req, res, next) => {
    try {
        const {
            name,
            email,
            password,
            phone,
        } = req.body

        const account = await admins.findOne({ email })
        if (account) {
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
            password: hashPassword,
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
const adminList = async (req, res, next) => {
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
const Login = async (req, res, next) => {
    try {
        const {
            email, password
        } = req.body


        /*exist email in admins table */
        const account = await admins.findOne({ email })
        if (!account) {
            res.status(404).json({
                status: true,
                message: "Invalid Email or Password"
            })
        }

        /*compare against accounts */
        const result = await bcrypt.compare(password, account.password)
        
        if (!result) {
            return res.status(404).json({
                status: false,
                message: "Invalid email or password."
            })
        }

        /* Generate JWT token */
        const token = await jwt.sign(
            {
                id: account._id,
                name: account.name,
                role: account.role,
                permissions: account.permissions,
            }, process.env.JWT_SECRET, { expiresIn: '1d' }
        )

        res.status(201).json({
            status: true,
            token
        })

    } catch (error) {
        console.log(error);
        next()
    }
}




module.exports = {
    register,
    adminList,
    Login,

}