import {inject, Provider} from '@loopback/core';
import {getService} from '@loopback/service-proxy';
import {ReqresDataSource} from '../datasources';

export interface ReuresResponseType {
  id: number;
  token: string;
}

export interface Reqres {
  // this is where you define the Node.js methods that will be
  // mapped to REST/SOAP/gRPC operations as stated in the datasource
  // json file.
  addUser(email: string, password: string): Promise<ReuresResponseType>;
}

export class ReqresProvider implements Provider<ReqresDataSource> {
  constructor(
    // reqres must match the name property in the datasource json file
    @inject('datasources.reqres')
    protected dataSource: ReqresDataSource = new ReqresDataSource(),
  ) {}

  value(): Promise<ReqresDataSource> {
    return getService(this.dataSource);
  }
}
