import { inject, injectable } from 'inversify';
import { Request, Response } from 'express';
import { controller, httpPost, httpGet } from 'inversify-express-utils';
import * as HTTP_CODES from 'http-status-codes';
import { logger } from '../../../utils/logger';
import { CustomerApplicationService } from '../../../application/customer/customer-application-service';
import { RegisterCustomerCommand } from '../../../application/customer/commands/register-customer-command';

@injectable()
@controller('/api')
export class CustomerController {

    constructor(
        @inject('CustomerApplicationService') private customerAppSvc: CustomerApplicationService
    ) { }

    @httpPost('/customers/commands/register')
    registerMovie(request: any, response: Response) {

        const customerRegCmd = new RegisterCustomerCommand();
        customerRegCmd.name = request.body.name;

        return this.customerAppSvc.registerCustomer(customerRegCmd).then((customer) => {
            response.send(customer);
        }).catch((err: Error) => {
            logger.error(err.message);
            logger.error(err.stack);
            response.status(HTTP_CODES.INTERNAL_SERVER_ERROR).send(err.message);
        });
    }

}
