// Uncomment these imports to begin using these cool features!

import {get, post} from '@loopback/rest';

// import {inject} from '@loopback/core';

export class JokesController {
  constructor() {}

  @get('/test')
  async test(): Promise<string> {
    return 'Ok';
  }

  @post('/jokes')
  getJokes() {}
}
