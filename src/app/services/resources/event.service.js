import moment from 'moment'

export const Event = (RestangularProvider) => {
  'ngInject'

  const applicationPath = 'application'

  const parseDate = (stringDate) => moment(stringDate, 'DD/MM/YYYY', true).toDate()

  RestangularProvider.addResponseInterceptor((data, operation, what) => { // temporary workaround to…
    if (what === applicationPath && operation === 'get') { // … https://github.com/cfpio/callForPapers/issues/103
      ['date', 'decisionDate', 'releaseDate'].forEach((prop) => {
        data[prop] = parseDate(data[prop])
      })
    }
    return data
  })

  return {
    $get: (Restangular) => {
      'ngInject'

      return Restangular.one(applicationPath) // "application" resource not really RESTful…
    }
  }
}
