import { createUserServices } from '../services/user.service';
import { Request, Response } from "express";

export const user = async(
   req: Request,
   res: Response,
):Promise<Response> =>{
   const newUser = await createUserServices(req.body)
   
   .catch((e) => {
     console.log(e);
   });
 
   return res.json(newUser);

 }