Figure SDK
---------

The official [Figure](https://figuredevices.com/) SDK for Node.

Role
----

The intention of this module is to provide developers a nice API to integrate their NodeJS applications with Figure.

Installation
------------

Install the Figure SDK by running:

```sh
$ npm install --save figure-sdk
```

Basic usage
---------
```
var Figure = require('figure-sdk');
var figure = Figure({token: 'token'});
var options = { query: { event__uuid: 'event_uuid', last: 10} }
figure.portraits.getAll(options, function(err, resp) { // do something with response })
```
Platforms
---------

We also support [Python SDK](https://github.com/postcard/figure-sdk-python).


Support
-------

If you're having any problem, please [raise an issue](https://github.com/postcard/figure-sdk-node/issues/new).


License
-------

The project is licensed under the MIT license.
