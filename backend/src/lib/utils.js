import jwt from 'jsonwebtoken'

export const generateToken = (userId,res) =>{
   const token = jwt.sign({userId},process.env.JWT_SECRET_KEY,{
    expiresIn:"7d"
   })

   res.cookie("jwt",token,{
    maxAge: 7 * 24 * 68 * 1000,
    httpOnly:true, // prevent XSS attacks 
    sameSite:"strict",
    secure:process.NODE_ENV !== "development"
   })

   return token
}