# Thenv

[![Build Status](https://travis-ci.org/rhberro/thenv.svg?branch=master)](https://travis-ci.org/rhberro/thenv)
[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
[![Coverage Status](https://coveralls.io/repos/github/rhberro/thenv/badge.svg)](https://coveralls.io/github/rhberro/thenv)

A Node library for working with environment variables.

---

- [**Installing**](#installing)
- [**Getting Started**](#getting-started)
- [**Contributing**](#contributing)
- [**License**](#license)

---

## Installing

Install it using node package manager.

```
npm install --save thenv
```

## Getting Started

The simplest and the cleanest way.

```js
var thenv = require('thenv')()
```

You can also specify the file name and the encoding type.

```js
var thenv = require('thenv')('path/to/file', 'encoding')
```

It returns an object with every valid property that was applied to the environment.

## Contributing

The contribution guide is not available for now but I am accepting any contribution if under the standard style.

## License

The Thenv library is open-sourced software licensed under the MIT license.
