// Uncomment these imports to begin using these cool features!

import {inject} from '@loopback/core';
import {get, post, requestBody} from '@loopback/rest';
import {
  RestFulAddItemType,
  RestFulAddItemTypeResponse,
  RestFulGetListType,
  RestfulService,
} from '../services/restful-service.service';

const base = 'restful';
export class RestFulController {
  constructor(
    @inject('services.RestfulService')
    private readonly restfulService: RestfulService,
  ) {}

  @get(`${base}/get_all`)
  get(): RestFulGetListType[] {
    return this.restfulService.getAll();
  }

  @post(`${base}/add_item`)
  addItem(@requestBody() item: RestFulAddItemType): RestFulAddItemTypeResponse {
    return this.restfulService.addItem(item.name, item.data);
  }
}
