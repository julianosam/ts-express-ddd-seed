import { Entity, OneToOne, Column, ObjectIdColumn, JoinColumn, PrimaryGeneratedColumn } from 'typeorm';
import { Customer } from './customer';

@Entity()
export class Movie {

    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    name: string;

    @OneToOne((type) => Customer)
    @JoinColumn()
    currentlyRentedBy: Customer;

    constructor(name?: string) {
        this.name = name;
    }

    /**
     * Rents this movie to a user, if available.
     * @param customer The customer renting this movie
     */
    rentTo(customer: Customer) {
        if (this.currentlyRentedBy) {
            throw new Error('Movie is not available!');
        } else {
            this.currentlyRentedBy = customer;
        }
    }

}
