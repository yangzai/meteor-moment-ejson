fn = moment.fn
name = fn.constructor.name

fn.typeName = -> name
fn.equals = fn.isSame
fn.toJSONValue = fn.toJSON

EJSON.addType name, moment