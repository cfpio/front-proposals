class TopMenuController {
  constructor(AuthenticationService) {
    'ngInject'

    this.authService = AuthenticationService
  }
}

export const TopMenu = {
  controller: TopMenuController,
  template: require('./top-menu.html'),
  bindings: {
    user: '='
  }
}
