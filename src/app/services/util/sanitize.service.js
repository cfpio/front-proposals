import _ from 'lodash'

const sanitizeText = ($sanitize) => {
  'ngInject'
  return (text) => {
    return $sanitize(text).replace(/&#10;/g, '\n') // workaround to keep line returns
  }
}

const sanitizeObject = (sanitizeFilter) => {
  'ngInject'

  return (object, properties = []) => {
    properties.forEach((property) => {

      if (_.isString(object[property])) {
        object[property] = sanitizeFilter(object[property])
      }
    })
    return object
  }
}

export {sanitizeObject, sanitizeText}
