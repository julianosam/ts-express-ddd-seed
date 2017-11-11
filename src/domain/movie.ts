import { Entity, PrimaryGeneratedColumn, Column, ObjectIdColumn } from 'typeorm';

@Entity()
export class Movie {

    @ObjectIdColumn()
    id: string;

    @Column()
    name: string;

    constructor(name?: string) {
        this.name = name;
    }

}
