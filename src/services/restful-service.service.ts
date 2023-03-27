import {inject, Provider} from '@loopback/core';
import {getService} from '@loopback/service-proxy';
import {RestFulDataSource} from '../datasources';

export interface RestFulGetListType {
  id: number;
  ['key']: unknown;
}

export interface RestFulAddItemType {
  name: string;
  data: {
    ['key']: unknown;
  };
}

export interface RestFulAddItemTypeResponse {
  id: string;
  ['key']: unknown;
}

export interface RestfulService {
  // this is where you define the Node.js methods that will be
  // mapped to REST/SOAP/gRPC operations as stated in the datasource
  // json file.
  getAll(): RestFulGetListType[];
  addItem(name: string, data: unknown): RestFulAddItemTypeResponse;
}

export class RestfulServiceProvider implements Provider<RestfulService> {
  constructor(
    // RestFul must match the name property in the datasource json file
    @inject('datasources.RestFul')
    protected dataSource: RestFulDataSource = new RestFulDataSource(),
  ) {}

  value(): Promise<RestfulService> {
    return getService(this.dataSource);
  }
}
