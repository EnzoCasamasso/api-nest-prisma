import { PrismaService } from './../../database/Prisma.service';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: any): Promise<import(".prisma/client").User>;
    getAll(): Promise<import(".prisma/client").User[]>;
    getUser(id: string): Promise<import(".prisma/client").User>;
}
