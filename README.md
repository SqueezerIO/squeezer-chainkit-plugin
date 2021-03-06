# squeezer-swagger
Swagger ChainKit Plugin. The plugin take care of ChainKit configuration upon deployment.

[![Squeezer.IO](https://cdn.rawgit.com/SqueezerIO/squeezer/9a010c35/docs/gitbook/images/badge.svg)](https://Squeezer.IO)
[![Build Status](https://travis-ci.org/SqueezerIO/squeezer-swagger.svg?branch=master)](https://travis-ci.org/SqueezerIO/squeezer-swagger)
[![npm version](https://badge.fury.io/js/squeezer-swagger.svg)](https://badge.fury.io/js/squeezer-swagger)
[![DUB](https://img.shields.io/dub/l/vibe-d.svg)]()

### Installation

`cd PROJECT_DIR`

`npm i squeezer-chainkit-plugin --save`

### Activate the plugin

*PROJECT_DIR/squeezer.yml*

```yaml
plugins:
  - name: squeezer-chainkit-plugin
    path: node_modules
```

### Squeezer Global Config

```
.
PROJECT_DIR
└─squeezer.yml
```

`squeezer.yml` :

```yaml
vars:
  stages:
    local:
      chainkit:
        itnUrl: /v1/itn/callback
        environment: test
```          