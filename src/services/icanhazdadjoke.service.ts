import {inject, Provider} from '@loopback/core';
import {getService} from '@loopback/service-proxy';
import {IcanhazdadjokeDataSource} from '../datasources';

export interface JokesType {
  id: string;
  joke: string;
  code: number;
}

export interface IcanhazdadjokeService {
  // this is where you define the Node.js methods that will be
  // mapped to REST/SOAP/gRPC operations as stated in the datasource
  // json file.
  getSingle(): Promise<JokesType>;
}

export class IcanhazdadjokeProvider
  implements Provider<IcanhazdadjokeDataSource>
{
  constructor(
    // icanhazdadjoke must match the name property in the datasource json file
    @inject('datasources.icanhazdadjoke')
    protected dataSource: IcanhazdadjokeDataSource = new IcanhazdadjokeDataSource(),
  ) {}

  value(): Promise<IcanhazdadjokeDataSource> {
    return getService(this.dataSource);
  }
}
