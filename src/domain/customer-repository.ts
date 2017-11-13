import { Customer } from './customer';

export interface CustomerRepository {

    create(movie: Customer): Promise<Customer>;
    findById(id: string): Promise<Customer>;

}
