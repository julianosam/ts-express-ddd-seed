import { Entity, ObjectIdColumn, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Customer {

    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    name: string;

    constructor(name?: string) {
        this.name = name;
    }

}
