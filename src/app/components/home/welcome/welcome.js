class WelcomeController {
  constructor() {
    'ngInject'
  }
}

export const Welcome = {
  controller: WelcomeController,
  template: require('./welcome.html'),
  bindings: {
    event: '=',
    tracks: '=',
    drafts: '=',
    proposals: '='
  }
}
