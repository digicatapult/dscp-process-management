# dscp-process-management

For the basic application to work and for locally run tests to work `docker-compose up` must be run.

The build command should be run first to create the converted ts files.

```shell
npm run build
```

To start the basic application

```shell
npm run start
```

To run the tests

```shell
npm run test
npm run test:unit
```

To run the application in dev mode with a nodemon watcher

```shell
npm run dev
```

Building an API with `@digicatapult/dscp-node` uses the `option` object:

```js
import { buildApi } from '@digicatapult/dscp-node'
import option from './options.ts'

const { api } = buildApi({
  options: {
    apiHost: option.API_HOST,
    apiPort: option.API_PORT,
  },
})
```

The following `options` can be configured:
| variable | required | default | description |
| :------------------------- | :------: | :---------------------------------------------------: | :-------------------------------------------------------------------- |
| apiHost | N | `localhost` | The hostname of the `dscp-node` the API should connect to |
| apiPort | N | `9944` | The port of the `dscp-node` the API should connect to |
