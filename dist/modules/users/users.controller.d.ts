import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(user: any, res: any): Promise<void>;
    getAll(): Promise<import(".prisma/client").User[]>;
    getUser(userId: any): Promise<import(".prisma/client").User>;
}
