import { Module } from '@nestjs/common';
import { TaskModule } from './task/task.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';

@Module({
  imports: [TaskModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'todolist',
      entities: [
        join(__dirname, '/**/*.entity{.js,.ts}')
      ],
      synchronize: true
    })
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
