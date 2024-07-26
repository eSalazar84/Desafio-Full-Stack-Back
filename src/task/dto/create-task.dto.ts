import { IsDateString, IsEnum, IsNotEmpty, IsString, MaxLength } from "class-validator";
import { Status } from "../helpers/status-enum.enum";
import { Expose } from "class-transformer";

export class CreateTaskDto {

    id: number

    @IsString()
    @Expose()
    @MaxLength(60)
    @IsNotEmpty()
    readonly title: string

    @IsString()
    @Expose()
    @MaxLength(255)
    readonly description: string

    @IsEnum(Status)
    @IsNotEmpty()
    readonly status: Status

    readonly createdAt: Date
}
