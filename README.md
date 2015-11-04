Meteor EJSON Support for Moment.js
==================================

Reimplementation of [mrt:moment-ejson](https://atmospherejs.com/mrt/moment-ejson).

This package adds Moment as a custom datatype to EJSON.

This would allow Meteor to use Moment objects to:
* pass them as arguments in to publish handlers.
* pass them as arguments or return them in Meteor methods.
* store them in Minimongo.
* use them as Session variables.

## Installation

```sh
$ meteor add yangzai:moment-ejson
```
