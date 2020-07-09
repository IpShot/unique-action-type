# Unique Action Types

> Be sure all your action types are unique.

[![Build Status](https://travis-ci.com/IpShot/unique-action-types.svg?branch=master)](https://travis-ci.com/IpShot/unique-action-types)
[![npm version](https://img.shields.io/npm/v/unique-action-types.svg?style=flat-square)](https://www.npmjs.com/package/unique-action-types)
[![codecov](https://codecov.io/gh/IpShot/unique-action-types/branch/master/graph/badge.svg)](https://codecov.io/gh/IpShot/unique-action-types)

Simple way to make sure that you are not duplicating action types. It just pushes all your actions to an array and check if a new one exists or not.

## Installation
```sh
# If you use npm:
npm install unique-action-types

# Or if you use Yarn:
yarn add unique-action-types
```

## Usage
```js
import unique from 'unique-action-types';

const UPDATE_TITLE = unique('UPDATE_TITLE');
```

## License

[MIT](LICENSE.md)
