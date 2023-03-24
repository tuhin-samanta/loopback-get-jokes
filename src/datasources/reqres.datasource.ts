import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'reqres',
  connector: 'rest',
  baseURL: 'https://reqres.in/',
  crud: false,

  options: {
    headers: {
      'Content-type': 'Application/JSON',
    },
  },

  operations: [
    {
      template: {
        method: 'POST',
        url: 'https://reqres.in/api/register',
        body: {
          email: '{email}',
          password: '{password}',
        },
      },
      functions: {
        addUser: ['email', 'password'],
      },
    },
  ],
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class ReqresDataSource
  extends juggler.DataSource
  implements LifeCycleObserver
{
  static dataSourceName = 'reqres';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.reqres', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
