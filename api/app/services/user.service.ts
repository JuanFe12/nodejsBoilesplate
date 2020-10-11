import { User } from './../models/user.model';
import { hashpassword } from './../utils/user.utils';
import { createUser } from './../repository/user.repository';
import { UserCreateInput } from '@prisma/client';

export const createUserServices = async (
   inputUser: UserCreateInput
   ) =>{
   let pass = hashpassword(inputUser.password);
   let newUser = createUser(inputUser);
   return newUser;
};
