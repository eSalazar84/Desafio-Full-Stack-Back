import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { DeleteResult } from 'typeorm';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) { }

  @Post()
  create(@Body() createTaskDto: CreateTaskDto): Promise<CreateTaskDto> {
    return this.taskService.createTask(createTaskDto);
  }

  @Get()
  findAll(): Promise<CreateTaskDto[]> {
    return this.taskService.getAllTask();
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<DeleteResult> {
    return this.taskService.removeTask(id)
  }
}
