import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';
import { DeleteResult, Repository } from 'typeorm';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task) private readonly taskRepository: Repository<CreateTaskDto>
  ) { }
  
  async createTask(createTaskDto: CreateTaskDto): Promise<CreateTaskDto> {
    const newTask = this.taskRepository.create(createTaskDto)
    await this.taskRepository.save(newTask)
    return newTask
  }

  async getAllTask(): Promise<CreateTaskDto[]> {
    const allTask = await this.taskRepository.find()
    return allTask
  }

  async removeTask(id: number): Promise<DeleteResult> {
    const query = { where: { id } }
    const taskFound = await this.taskRepository.findOne(query)
    if (!taskFound) throw new HttpException({
      status: HttpStatus.NOT_FOUND,
      error: `No existe la tarea con el id ${id}`
    }, HttpStatus.NOT_FOUND);
    const deleteTask = await this.taskRepository.delete(taskFound);
    return deleteTask;
  }

}
