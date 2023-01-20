import { Injectable } from '@nestjs/common';

import { Prisma } from '@prisma/client';
import { PrismaService } from './../../database/Prisma.service';

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService) {

    }

    async create(data) {

       const userExists = await this.prisma.user.findFirst({
            where: {
                email: data.email
            }
       }) 
       
       if (userExists) {
            throw new Error("Este email já existe");
       }

       const user = await this.prisma.user.create({
            data,
        });

       return user;
    }


    async getAll() {
        return this.prisma.user.findMany();
    }

    async getUser(id: string) {
        const userId = await this.prisma.user.findUnique({
            where: {
                id: id
            }
        })

        if (userId) return userId; 
        else {
            throw new Error(JSON.stringify("User not found")); 
        }
        
    }
}
