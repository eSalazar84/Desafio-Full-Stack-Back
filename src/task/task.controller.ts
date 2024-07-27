import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { DeleteResult } from 'typeorm';
import { Status } from './helpers/status-enum.enum';

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

  @Patch(':id')
  updateTask(
    @Param('id') id: number,
    @Body() status: Status
  ) {
    return this.taskService.updateTask(id, status)
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<DeleteResult> {
    return this.taskService.removeTask(id)
  }
}
