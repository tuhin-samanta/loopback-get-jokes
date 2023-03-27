import {inject, Provider} from '@loopback/core';
import {getService} from '@loopback/service-proxy';
import {RestFulDataSource} from '../datasources';

export interface RestFulGetListType {
  id: number;
  [key: string]: unknown;
}

export interface RestFulAddItemType {
  name: string;
  data: {
    [key: string]: unknown;
  };
}

export interface RestFulAddItemTypeResponse {
  id: string;
  [key: string]: unknown;
}

export interface RestfulDeleteresponse {
  message: string;
}

export interface RestfulService {
  // this is where you define the Node.js methods that will be
  // mapped to REST/SOAP/gRPC operations as stated in the datasource
  // json file.
  getAll(): RestFulGetListType[];
  addItem(name: string, data: unknown): RestFulAddItemTypeResponse;
  updateItem(
    id: string,
    name: string,
    data: unknown,
  ): RestFulAddItemTypeResponse;
  deleteItem(id: string): RestfulDeleteresponse;
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
