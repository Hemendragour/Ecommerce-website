 import bcrypt from "bcrypt"
// import { hasdPassword}  from  "./authHelper.";

export const hashPassword = async(password) => {
    try {
        const saltRounds = 10;
        const hasdedPassword = await bcrypt.hash(password, saltRounds)
        return hasdedPassword
    } catch (error) {
        console.log(error);
        
    };
    
};
export const comparePassword = async (password , hashedPassword) =>{
    return bcrypt.compare(password , hashedPassword);
};