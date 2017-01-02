class WelcomeController {
  constructor() {
    'ngInject'
  }
}

export const Welcome = {
  controller: WelcomeController,
  templateUrl: 'app/components/home/welcome/welcome.html',
  bindings: {
    event: '=',
    tracks: '=',
    drafts: '=',
    proposals: '='
  }
}
