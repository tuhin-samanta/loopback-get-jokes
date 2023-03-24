// Uncomment these imports to begin using these cool features!

import {inject} from '@loopback/core';
import {post, Request, requestBody, RestBindings} from '@loopback/rest';
import type {Reqres, ReuresResponseType} from '../services/reqres.service';

export class ReqresController {
  constructor(
    @inject('services.Reqres')
    private reqresService: Reqres,
    @inject(RestBindings.Http.REQUEST) private request: Request,
  ) {}
  @post('/create_user')
  createUser(
    @requestBody() body: {email: string; password: string},
  ): Promise<ReuresResponseType> {
    //const body = this.request.body;
    console.log(body);
    return this.reqresService.addUser(body.email, body.password);
  }
}
