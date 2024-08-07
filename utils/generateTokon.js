const jwt = require("jsonwebtoken")

exports.getToken = async (req, res) => {

    const userID = req.user._id

    const options = {
        id: userID,
        time:Date.now()

    }

     const cookieParams = { httpOnly: true, sameSite: "none", secure: true };

    const token = await jwt.sign(options, process.env.JWT_SECRET_KEY, { expiresIn: "60min" })
    if (!token) {
        return res.status(500).json({
            success: false,
            message: "faild to generate Token",
            isAuthenticated: false
        })
    }
    

    res.status(200).cookie("token",token,cookieParams).json({
        success: true,
        message: "Logged in successfull!",
        isAuthenticated:true,
        user:req.user,
        token
    })
    

}