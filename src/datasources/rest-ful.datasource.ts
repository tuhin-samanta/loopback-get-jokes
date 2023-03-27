import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const baseURL: String = 'https://api.restful-api.dev';

const config = {
  name: 'RestFul',
  connector: 'rest',
  baseURL,
  crud: false,
  operations: [
    {
      template: {
        method: 'GET',
        url: `${baseURL}/objects`,
        headers: {
          Accept: 'Application/JSON',
        },
      },
      functions: {
        getAll: [],
      },
    },
    {
      template: {
        method: 'POST',
        url: `${baseURL}/objects`,
        body: {name: `{name}`, data: `{data}`},
      },
      functions: {
        addItem: ['name', 'data'],
      },
    },
  ],
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class RestFulDataSource
  extends juggler.DataSource
  implements LifeCycleObserver
{
  static dataSourceName = 'RestFul';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.RestFul', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
