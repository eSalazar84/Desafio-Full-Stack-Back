import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Status } from "../helpers/status-enum.enum";


@Entity()
export class Task {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: "varchar", length: 60, nullable: false })
    title: string

    @Column({ type: "varchar", nullable: true })
    description: string

    @Column({ type: 'enum', enum: Status, nullable: false })
    status: Status

    @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date
}
