import { Controller, Post, Body, Get, Res, Param } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { UsersService } from './users.service';

@Controller('v1/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() user, @Res() res) {
    this.usersService.create(user);
    res.send(`Usuario criado ${JSON.stringify(user)}`);
  }

  @Get()
  async getAll() {
    return this.usersService.getAll();
  }

  @Get(':id')
  async getUser(@Param('id') userId) {
    return this.usersService.getUser(userId);
  }
}
