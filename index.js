var recipes = {eggs: 3}

function updateObjectWithKeyAndValue(object, key, value) {
  new = Object.assign({}, object, {[key]: value})
  return new
}
