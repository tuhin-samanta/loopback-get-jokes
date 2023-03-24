// Uncomment these imports to begin using these cool features!

import {inject} from '@loopback/core';
import {get} from '@loopback/rest';
import {
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
}
