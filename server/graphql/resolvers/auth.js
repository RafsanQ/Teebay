import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default {
    createUser: async (args) => {
        try{
            const user = await prisma.user.create({
                data: {
                   name: args.userInput.name,
                   password: args.userInput.password,
                   email: args.userInput.email,
                   address: args.userInput.address,
                   phoneNumber: args.userInput.phone
                }
            })
            console.log("added user!", user);
            return user;
        }catch(error){
            console.error(error);
            throw error;
        }
    },
}