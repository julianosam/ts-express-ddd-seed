import { injectable, inject } from 'inversify';
import { RegisterCustomerCommand } from './commands/register-customer-command';
import { CustomerRepository } from '../../domain/customer-repository';
import { Customer } from '../../domain/customer';

@injectable()
export class CustomerApplicationService {

    constructor(
        @inject('CustomerRepository') private _customerRepo: CustomerRepository
    ) { }

    /**
     * User Story 003 - As a new Customer, I want to be able to create a new account.
     *
     * @param customerRegCmd The customer data input to create a new accountIs
     */
    registerCustomer(customerRegCmd: RegisterCustomerCommand): Promise<Customer> {
        const customer = new Customer(customerRegCmd.name);
        return this._customerRepo.create(customer);
    }
}
