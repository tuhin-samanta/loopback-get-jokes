// Uncomment these imports to begin using these cool features!

import {inject} from '@loopback/core';
import {del, get, param, post, put, requestBody} from '@loopback/rest';
import {
  RestFulAddItemType,
  RestFulAddItemTypeResponse,
  RestfulDeleteresponse,
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

  @put(`${base}/update_item/{id}`)
  updateItem(
    @requestBody() item: RestFulAddItemType,
    @param.path.string('id') id: string,
  ): RestFulAddItemTypeResponse {
    return this.restfulService.updateItem(id, item.name, item.data);
  }

  @del(`${base}/delete_item/{id}`)
  delItem(@param.path.string('id') id: string): RestfulDeleteresponse {
    return this.restfulService.deleteItem(id);
  }
}
